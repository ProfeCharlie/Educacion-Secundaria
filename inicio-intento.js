let inicioPorPost = false;
// Conserva el ID si se pierde la confirmación y se reintenta con los mismos datos.
const iniciosPendientes = new Map();
function solicitarInicioExamen(url, exam, datos, consultar) {
  const { id, ...identidad } = datos;
  if (!inicioPorPost) {
    const campos = datos.section ? { id, section: datos.section } : { id };
    return consultar('start', campos).then(respuesta => ({ ...respuesta, attemptId: id }));
  }
  const clave = JSON.stringify([exam, identidad]);
  const attemptId = iniciosPendientes.get(clave) ?? id;
  iniciosPendientes.set(clave, attemptId);

  return new Promise((resolve, reject) => {
    const nonce = id;
    const frame = document.createElement('iframe');
    const form = document.createElement('form');
    frame.name = 'exam_start_' + nonce.replace(/-/g, '');
    frame.hidden = form.hidden = true;
    form.method = 'POST';
    form.action = url;
    form.target = frame.name;
    const fields = {
      exam, op: 'start', nonce, origin: location.origin,
      payload: JSON.stringify({ ...identidad, id: attemptId })
    };
    for (const [name, value] of Object.entries(fields)) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = value;
      form.append(input);
    }
    function limpiar() {
      clearTimeout(timer);
      window.removeEventListener('message', recibir);
      form.remove();
      frame.remove();
    }
    function recibir(event) {
      const { origin, data } = event;
      if (!/^https:\/\/(?:script\.google\.com|script\.googleusercontent\.com|[a-z0-9-]+[.-]script\.googleusercontent\.com)$/.test(origin)
          || data?.kind !== 'educacion-abierta-exam-save' || data.nonce !== nonce) return;
      limpiar();
      iniciosPendientes.delete(clave);
      resolve({ ...data, attemptId });
    }
    const timer = setTimeout(() => {
      limpiar();
      reject(new Error('No se confirmó el inicio. Pulsa «Iniciar prueba» para reintentar.'));
    }, 60000);
    window.addEventListener('message', recibir);
    document.body.append(frame, form);
    form.submit();
  });
}
