(() => {
  const endpoint = 'https://script.google.com/macros/s/AKfycbxW2qb_Kfgl1-RZQ7jkCabxyRkXkY7UqZG12hd-AkUT1OFMmg9CLbydAwGyeaiAZA/exec';
  const pendingPrefix = 'olcoma-resultados-pendiente:';
  const state = document.getElementById('olcoma-save-status');
  const retry = document.getElementById('olcoma-save-retry');
  const sending = new Set();
  let visibleId = '';

  function enviar(record) {
    if (sending.has(record.nonce)) return;
    const { exam, nonce, payload } = record;
    const frame = document.createElement('iframe');
    const form = document.createElement('form');
    frame.name = 'olcoma_' + nonce.replace(/-/g, '');
    frame.hidden = form.hidden = true;
    form.method = 'POST';
    form.action = endpoint;
    form.target = frame.name;
    for (const [name, value] of Object.entries({ exam, nonce, payload, op: 'resultado-olimpiadas', origin: location.origin })) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = value;
      form.append(input);
    }

    function terminar(ok) {
      clearTimeout(timeout);
      window.removeEventListener('message', recibir);
      frame.remove();
      form.remove();
      sending.delete(nonce);
      if (ok) {
        try { localStorage.removeItem(pendingPrefix + nonce); } catch {}
      }
      if (visibleId !== nonce) return;
      state.textContent = ok ? 'Resultado registrado en el administrador.' : 'No se confirmó el registro. Puedes reintentar el envío.';
      retry.hidden = ok;
    }

    function recibir({ origin, data }) {
      if (!/^https:\/\/(?:script\.google\.com|script\.googleusercontent\.com|[a-z0-9-]+[.-]script\.googleusercontent\.com)$/.test(origin) ||
          data?.kind !== 'olcoma-resultados' || data.nonce !== nonce) return;
      terminar(data.ok === true);
    }

    sending.add(nonce);
    const timeout = setTimeout(() => terminar(false), 35000);
    window.addEventListener('message', recibir);
    document.body.append(frame, form);
    try { form.submit(); } catch { terminar(false); }
  }

  function registrar(exam, items, attempt, duration, save) {
    if (attempt.resultId) return;
    const answers = items.flatMap(({ answer }, index) => {
      if (answer === null) return [];
      if (answer === '-') return [''];
      const entered = String(attempt.answers[index] || '').trim().toUpperCase();
      return [entered];
    });
    attempt.resultId = crypto.randomUUID();
    save();
    const record = {
      exam,
      nonce: attempt.resultId,
      payload: JSON.stringify({
        code: attempt.participant || '',
        answers,
        elapsed: Math.round(Math.max(0, Math.min(duration, duration - (attempt.deadline - Date.now()))) / 1000)
      })
    };
    visibleId = record.nonce;
    try { localStorage.setItem(pendingPrefix + record.nonce, JSON.stringify(record)); } catch {}
    const submit = () => {
      state.textContent = 'Registrando resultado…';
      retry.hidden = true;
      enviar(record);
    };
    retry.onclick = submit;
    submit();
  }

  function reintentarPendientes() {
    try {
      const keys = Object.keys(localStorage).filter(key => key.startsWith(pendingPrefix)).slice(0, 5);
      for (const key of keys) {
        const record = JSON.parse(localStorage.getItem(key));
        if (record?.nonce && record?.exam && typeof record.payload === 'string') enviar(record);
      }
    } catch {}
  }

  window.olcomaResultados = { registrar };
  document.addEventListener('DOMContentLoaded', reintentarPendientes, { once: true });
})();
