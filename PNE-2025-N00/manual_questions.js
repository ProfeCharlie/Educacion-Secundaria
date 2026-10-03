// Texto cotejado con el cuadernillo original 2025-N00.
const QUESTIONS=[
  {
    "sourceNumber": 1,
    "lead": "Considere la siguiente información: En una finca agrícola, se ha instalado un sistema de riego con un aspersor (dispositivo mecánico giratorio). Este dispositivo lanza un chorro de agua, cuyo alcance máximo es 20 m a su alrededor. Además, el dispositivo está ubicado en el punto correspondiente a (45, −35) con respecto a la ubicación de una bomba de agua, la cual se considera como el origen. La siguiente representación gráfica, cuyas unidades están en metros, muestra la ubicación P de la bomba, A del aspersor y C de la circunferencia correspondiente al alcance máximo del chorro de agua: <span data-fig=\"1\"></span> De acuerdo con la información anterior, ¿cuál es la representación algebraica de C?",
    "options": [
      "(x – 45)<sup>2</sup> + (y + 35)<sup>2</sup> = 400",
      "(x + 45)<sup>2</sup> + (y – 35)<sup>2</sup> = 400",
      "(x – 45)<sup>2</sup> + (y – 35)<sup>2</sup> = 20"
    ]
  },
  {
    "sourceNumber": 2,
    "lead": "En una cafetería al aire libre se instaló un toldo, cuya tela tiene forma circular. La medida del radio, de la circunferencia que representa el borde de esa tela, es 3 m. La ubicación A del centro de esa circunferencia corresponde a 12 m al este y 8 m al norte de la ubicación R de la esquina de la barra de servicio, la cual se considera el origen. ¿Cuál es la representación gráfica, cuyas unidades están en metros, de la circunferencia que representa el borde de la tela de ese toldo?",
    "options": [
      "<span data-fig=\"2A\"></span>",
      "<span data-fig=\"2B\"></span>",
      "<span data-fig=\"2C\"></span>"
    ]
  },
  {
    "sourceNumber": 3,
    "lead": "Una empresa instaló una torre de comunicación en un parque para proporcionar señal telefónica a los visitantes. La torre se ubicó a 1 km al este y 2 km al norte con respecto a la entrada principal de ese parque, la cual se considera el origen. Además, el alcance máximo de la señal emitida por esa torre es 1 km a su alrededor. La siguiente representación gráfica, cuyas unidades están en kilómetros, muestra la ubicación T de la torre de comunicación, P de la entrada al parque y C de la circunferencia correspondiente al alcance máximo de la señal emitida por esa torre: <span data-fig=\"3\"></span> Además, debido a un estudio técnico, la empresa decide ubicar la torre en otra parte del parque. Para ello, la torre se trasladó, desde su ubicación actual, a 2 km al este y 1 km al sur. De acuerdo con la información anterior, ¿cuál es la representación algebraica, cuyas unidades están en kilómetros, de la circunferencia correspondiente al alcance máximo de la señal emitida por esa torre en la nueva ubicación?",
    "options": [
      "(x – 1)<sup>2</sup> + (y – 2)<sup>2</sup> = 1",
      "(x – 2)<sup>2</sup> + (y – 1)<sup>2</sup> = 1",
      "(x – 3)<sup>2</sup> + (y – 1)<sup>2</sup> = 1"
    ]
  },
  {
    "sourceNumber": 4,
    "lead": "En el suelo de un jardín hay una tapa circular de cemento que cubre la entrada de un pozo. La medida del diámetro de la circunferencia que representa el borde de la superficie de esa tapa es 100 cm. La siguiente representación gráfica, cuyas unidades están en centímetros, muestra la circunferencia correspondiente al borde de la superficie de esa tapa: <span data-fig=\"4\"></span> Además, una persona colocó una pequeña piedra sobre la superficie de esa tapa. De acuerdo con la información anterior, ¿cuál de las siguientes opciones, cuyas unidades están en centímetros, corresponde a un posible punto donde la persona colocó esa piedra?",
    "options": [
      "(100, 170)",
      "(130, 150)",
      "(200, 80)"
    ]
  },
  {
    "sourceNumber": 5,
    "lead": "En un colegio hay una zona de seguridad, una banca y una mesa de cemento. La zona tiene forma circular, cuya medida del diámetro es 8 m. La siguiente representación gráfica, cuyas unidades están en metros, muestra la ubicación B de la banca, M de la mesa y C de la circunferencia correspondiente al borde de esa zona: <span data-fig=\"5\"></span> Además, se desea construir un camino con forma de recta que pase por la ubicación de la banca y por la de la mesa. De acuerdo con la información anterior, la recta que representará ese camino, con respecto a C, será",
    "options": [
      "exterior.",
      "secante.",
      "tangente."
    ]
  },
  {
    "sourceNumber": 6,
    "lead": "La siguiente figura muestra la forma que tiene el piso de una zona recreativa de un colegio, la cual está compuesta por un hexágono regular y un cuadrado: <span data-fig=\"6\"></span> De acuerdo con la información anterior, si se requiere colocar un alambre alrededor de la totalidad del borde de la superficie de ese piso, entonces, ¿cuántos metros de alambre, como mínimo, se requieren colocar?",
    "options": [
      "32",
      "36",
      "40"
    ]
  },
  {
    "sourceNumber": 7,
    "lead": "Una empresa fabrica señales de tránsito a partir de láminas metálicas. En una de estas láminas se construyen dos señales: una con forma de triángulo equilátero y la otra con forma de hexágono regular. Además, la medida de un lado de cada señal es 50 cm. De acuerdo con la información anterior, ¿cuántos centímetros cuadrados de esa lámina se necesitarán, como mínimo, para construir ambas señales?",
    "options": [
      "<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>3750</mn><msqrt><mn>3</mn></msqrt></math>",
      "<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>4375</mn><msqrt><mn>3</mn></msqrt></math>",
      "<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>8750</mn><msqrt><mn>3</mn></msqrt></math>"
    ]
  },
  {
    "sourceNumber": 8,
    "lead": "La siguiente representación gráfica corresponde a la forma que tiene la superficie interna de una pared de un gimnasio de baloncesto: <span data-fig=\"8\"></span> De acuerdo con la información anterior, si para decorar esa superficie se requiere colocar una cinta adhesiva alrededor de la totalidad del borde, entonces la cantidad de metros que se requieren colocar es mayor que",
    "options": [
      "475 y menor que 575.",
      "190 y menor que 290.",
      "75 y menor que 175."
    ]
  },
  {
    "sourceNumber": 9,
    "lead": "La siguiente representación gráfica, cuyas unidades están en metros, muestra el polígono ABCDEF que representa la superficie del patio de una casa: <span data-fig=\"9\"></span> De acuerdo con la información anterior, si se requiere cubrir con una capa de cemento la totalidad de la superficie de ese patio, entonces, ¿cuántos metros cuadrados se requieren cubrir?",
    "options": [
      "57",
      "104",
      "208"
    ]
  },
  {
    "sourceNumber": 10,
    "lead": "Un tronco de árbol, con forma de cilindro circular recto, debe ser cortado para obtener dos piezas más pequeñas. Para ello, se le realizó al tronco un corte plano que pasa por el centro de cada base. La sección plana que se obtuvo en cada una de las piezas, producto del corte realizado a ese tronco, corresponde a",
    "options": [
      "una elipse.",
      "un rectángulo.",
      "una circunferencia."
    ]
  },
  {
    "sourceNumber": 11,
    "lead": "Un jarrón se fabrica a partir de una esfera de vidrio a la cual se le realizan dos cortes para obtener dos secciones planas, paralelas y del mismo tamaño, que representan la base y la abertura. La medida del radio de esa esfera es 10 cm. Además, cuando se realizan los cortes, la distancia entre los centros de esas secciones es 12 cm. La siguiente figura muestra ese jarrón y la distancia entre los centros de las secciones planas: <span data-fig=\"11\"></span> De acuerdo con la información anterior, ¿cuál es la medida del diámetro de la abertura de ese jarrón?",
    "options": [
      "4 cm",
      "13 cm",
      "16 cm"
    ]
  },
  {
    "sourceNumber": 12,
    "lead": "¿Cuál fue el volumen, en millones de metros cúbicos, contenido en el embalse transcurridos 15 días desde el inicio de ese estudio?",
    "options": [
      "15",
      "30",
      "60"
    ]
  },
  {
    "sourceNumber": 13,
    "lead": "Durante todo ese tiempo, ¿en cuántas ocasiones el volumen de ese embalse fue igual a cuarenta y cinco millones de metros cúbicos?",
    "options": [
      "Ninguna ocasión.",
      "Dos ocasiones.",
      "Una ocasión."
    ]
  },
  {
    "sourceNumber": 14,
    "lead": "Considere la siguiente información: La función f, que determina el ingreso mensual “f(p)”, en colones, obtenido en una cafetería, está dada por f(p) = 2500p, donde “p” representa la cantidad mensual de paquetes de café vendidos en esa cafetería, con 12 ≤ p ≤ 22. Asimismo, la función p, que determina la cantidad mensual “p(t)” de paquetes de café vendidos, está dada por p(t) = 2t + 10, donde “t” representa el tiempo, en meses cumplidos, transcurrido desde que esa cafetería inició labores, con 1 ≤ t ≤ 6. De acuerdo con la información anterior, si para un estudio de mercado en la cafetería se requiere conocer el criterio de la función (f ∘ p), entonces, ¿cuál de las siguientes opciones corresponde a ese criterio?",
    "options": [
      "(f ∘ p) (t) = 2500t",
      "(f ∘ p) (t) = 5000t + 10",
      "(f ∘ p) (t) = 5000t + 25 000"
    ]
  },
  {
    "sourceNumber": 15,
    "lead": "Considere la siguiente información: Un ingeniero establece que la función m, la cual determina la cantidad de material “m(d)”, en kilogramos, que una fábrica produce, está dada por m(d) = 30 (d + 5), donde “d” representa el tiempo, en días transcurridos desde que la fábrica ha estado operando, con 1 ≤ d ≤ 15. De acuerdo con la información anterior, si para un estudio el ingeniero requiere determinar el criterio de la función d, la cual corresponde a la función inversa de m, entonces, ¿cuál de las siguientes opciones corresponde a ese criterio?",
    "options": [
      "<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>d</mi><mo>(</mo><mi>m</mi><mo>)</mo><mo>=</mo><mfrac><mrow><mi>m</mi><mo>−</mo><mn>5</mn></mrow><mrow><mn>30</mn></mrow></mfrac></math>",
      "<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>d</mi><mo>(</mo><mi>m</mi><mo>)</mo><mo>=</mo><mfrac><mrow><mi>m</mi><mo>−</mo><mn>150</mn></mrow><mrow><mn>30</mn></mrow></mfrac></math>",
      "<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>d</mi><mo>(</mo><mi>m</mi><mo>)</mo><mo>=</mo><mfrac><mrow><mi>m</mi></mrow><mrow><mn>30</mn></mrow></mfrac><mo>−</mo><mn>150</mn></math>"
    ]
  },
  {
    "sourceNumber": 16,
    "lead": "Considere la siguiente información: Una empresa de mudanzas establece que la función t, la cual determina la tarifa “t(b)”, en colones, que se cobra por el transporte de una cama en un camión desde el almacén de la empresa hasta una vivienda, está dada por t(b) = 20b<sup>2</sup> + 15 000, donde “b” representa la distancia, en kilómetros, recorrida por ese camión, con 10 ≤ b ≤ 15. De acuerdo con la información anterior, si para un estudio financiero la empresa requiere determinar el criterio de la función b, la cual corresponde a la función inversa de t, entonces, ¿cuál de las siguientes opciones corresponde a ese criterio?",
    "options": [
      "<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>b</mi><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo><msqrt><mrow><mfrac><mrow><mi>t</mi><mo>−</mo><mn>20</mn></mrow><mrow><mn>15 000</mn></mrow></mfrac></mrow></msqrt></math>",
      "<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>b</mi><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo><msqrt><mrow><mfrac><mrow><mi>t</mi><mo>−</mo><mn>15 000</mn></mrow><mrow><mn>20</mn></mrow></mfrac></mrow></msqrt></math>",
      "<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>b</mi><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo><msqrt><mrow><mfrac><mrow><mi>t</mi></mrow><mrow><mn>20</mn></mrow></mfrac><mo>−</mo><mn>15 000</mn></mrow></msqrt></math>"
    ]
  },
  {
    "sourceNumber": 17,
    "lead": "La siguiente representación gráfica corresponde a la función f, que determina la longitud total “y”, en centímetros, del cabello de una persona, en función del tiempo “x”, en meses transcurridos desde el último corte de cabello, con 1 ≤ x ≤ 5: <span data-fig=\"17\"></span> De acuerdo con la información anterior, la representación gráfica de f <sup>–1</sup> corresponde a",
    "options": [
      "<span data-fig=\"17A\"></span>",
      "<span data-fig=\"17B\"></span>",
      "<span data-fig=\"17C\"></span>"
    ]
  },
  {
    "sourceNumber": 18,
    "lead": "La siguiente representación gráfica corresponde a la función v, que determina la rapidez “v(x)” en kilómetros por hora, de un ciclista durante una competencia, en función del tiempo “x”, en minutos transcurridos desde el inicio de esa competencia, con 0 ≤ x ≤ 15: <span data-fig=\"18\"></span> De acuerdo con la información anterior, si para registrar con precisión el tiempo del ciclista en función de su rapidez, se requiere determinar un posible intervalo del dominio de v tal que esta función tenga inversa, entonces, ¿cuál de las siguientes opciones corresponde a ese posible intervalo?",
    "options": [
      "[3, 9]",
      "[0, 6]",
      "[7, 15]"
    ]
  },
  {
    "sourceNumber": 19,
    "lead": "Considere la siguiente información: Bajo ciertas condiciones se establece que la función m, la cual determina el brillo “m(d)”, en luxes, medido por una persona ubicada a cierta distancia de una lámpara, está dada por m(d) = – 6<math><msqrt><mrow><mi>d</mi><mo>−</mo><mn>1</mn></mrow></msqrt></math> + 60, donde “d” representa la distancia, en metros, a la que se ubica esa persona con respecto a la lámpara, con 1 ≤ d ≤ 37. De acuerdo con la información anterior, si la persona se ubica a una distancia de 26 m con respecto a esa lámpara, entonces, ¿cuál es el brillo, en luxes, medido por esa persona?",
    "options": [
      "28",
      "30",
      "90"
    ]
  },
  {
    "sourceNumber": 20,
    "lead": "Considere la siguiente información: La cantidad de bloques de cemento colocados en la construcción de un muro está linealmente relacionada con el número de horas que trabajaron los albañiles. Si los albañiles trabajaron durante 3 h entonces colocaron 270 bloques. Además, si ellos trabajaron durante 6 h entonces colocaron 480 bloques. De acuerdo con la información anterior, ¿cuál es la ecuación de la recta que representa la cantidad de bloques de cemento &quot;y&quot; colocados en el muro, en función del número de horas “x” que trabajaron esos albañiles?",
    "options": [
      "y = 60 + 70x",
      "y = 70 + 60x",
      "y = 130x"
    ]
  },
  {
    "sourceNumber": 21,
    "lead": "Considere la siguiente información: La función q que determina el caudal “q(t)”, en litros por segundo, alcanzado por un río durante un día lluvioso, está dada por q(t) = –2t<sup>2</sup> + 24t + 80, donde “t” representa el tiempo en horas transcurridas desde el momento en que comenzó a llover, con 0 &lt; t ≤ 8. De acuerdo con la información anterior, durante ese tiempo, ¿cuántas horas transcurrieron, desde que comenzó a llover, para que ese río alcanzara el caudal máximo?",
    "options": [
      "4",
      "6",
      "8"
    ]
  },
  {
    "sourceNumber": 22,
    "lead": "Considere la siguiente información: La función s que determina la cantidad “s(x)” en gramos, de una sustancia radioactiva que hay en un laboratorio, está dada por s(x) = <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mn>32</mn><mo>·</mo><msup><mrow><mo>(</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn></mrow></mfrac><mo>)</mo></mrow><mi>x</mi></msup></math>, donde “x” representa el tiempo, en meses transcurridos desde el inicio de un experimento, con 0 ≤ x ≤ 6. De acuerdo con la información anterior, ¿cuántos gramos de esa sustancia hay en el laboratorio transcurridos cuatro meses desde el inicio de ese experimento?",
    "options": [
      "2",
      "3",
      "4"
    ]
  },
  {
    "sourceNumber": 23,
    "lead": "Considere la siguiente información: La función b que determina la cantidad diaria de pacientes “b(x)”, que utilizan una aplicación de monitoreo de salud en un hospital, está dada por b(x) = 8 • log<sub>2</sub>(x), donde “x” representa el tiempo en días desde que esa aplicación comenzó a implementarse, con 2 ≤ x ≤ 64. De acuerdo con la información anterior, ¿cuántos pacientes del hospital utilizan esa aplicación en el día 32 desde que comenzó a implementarse?",
    "options": [
      "16",
      "40",
      "128"
    ]
  },
  {
    "sourceNumber": 24,
    "lead": "La función h que determina la altura &quot;h(x)&quot;, en metros, de un tipo de árbol en crecimiento, está dada por h(x) = 2x + 1, donde “x” representa el tiempo en años transcurridos desde el momento en que ese árbol fue plantado, con 0 ≤ x ≤ 3. De acuerdo con la información anterior, ¿cuál es la representación gráfica de h?",
    "options": [
      "<span data-fig=\"24A\"></span>",
      "<span data-fig=\"24B\"></span>",
      "<span data-fig=\"24C\"></span>"
    ]
  },
  {
    "sourceNumber": 25,
    "lead": "La siguiente representación gráfica corresponde a la función cuadrática k que determina la altura “k(x)”, en metros desde el suelo, que alcanzó una pelota lanzada por una persona, en función del tiempo “x” en segundos transcurridos a partir del momento en que esa pelota fue lanzada, con 0 &lt; x ≤ 2: <span data-fig=\"25\"></span> De acuerdo con la información anterior, ¿cuál fue la mayor altura, en metros desde el suelo, que alcanzó esa pelota durante todo ese tiempo?",
    "options": [
      "1",
      "2",
      "6"
    ]
  },
  {
    "sourceNumber": 26,
    "lead": "Considere la siguiente información: La función d que determina el diámetro “d(x)”, en centímetros, de la parte superior de un hongo en el bosque, está dada por d(x) = (1,5)<sup>x</sup>, donde “x” representa el tiempo, en días, transcurrido a partir de una observación, con 1 ≤ x ≤ 5. De acuerdo con la información anterior, ¿cuál es el diámetro, en centímetros, de la parte superior de ese hongo transcurridos dos días desde el inicio de la observación?",
    "options": [
      "1,71",
      "2,25",
      "3,00"
    ]
  },
  {
    "sourceNumber": 27,
    "lead": "Considere la siguiente información: La función c que determina la cantidad “c(p)” de casas que utilizan energía eléctrica obtenida de paneles solares, está dada por c(p) = 64 • log<sub>4</sub>(p), donde “p” representa la cantidad de paneles solares instalados por una empresa que brinda el servicio de electricidad, con 4 ≤ p ≤ 1024. De acuerdo con la información anterior, si la empresa instaló 64 paneles solares, entonces, ¿cuántas casas utilizan ese tipo de energía eléctrica?",
    "options": [
      "4",
      "192",
      "1024"
    ]
  },
  {
    "sourceNumber": 28,
    "lead": "Considere la siguiente información: En una panadería se preparan únicamente queques de vainilla y pan de banano. Para la preparación, cada queque de vainilla requiere 30 min de batido y 40 min de horneado. Asimismo, cada pan de banano requiere 20 min de batido y 50 min de horneado. De acuerdo con la información anterior, si para la preparación de queques de vainilla y pan de banano se utilizaron 600 min de batido y 1150 min de horneado, entonces, ¿cuántos queques de vainilla se prepararon en total?",
    "options": [
      "10",
      "12",
      "32"
    ]
  },
  {
    "sourceNumber": 29,
    "lead": "Diana compró dos botellas de aceite de oliva y tres bolsas de arroz integral, por los cuales pagó ₡21 312. Cristina compró una botella de aceite de oliva y seis bolsas de arroz integral, por los cuales pagó ₡21 069. Si cada botella de aceite tenía el mismo precio y cada bolsa de arroz integral tenía el mismo precio, entonces, ¿cuál fue el precio de cada botella de aceite de oliva?",
    "options": [
      "₡2395",
      "₡6942",
      "₡7185"
    ]
  },
  {
    "sourceNumber": 30,
    "lead": "La siguiente tabla muestra la función h que determina la cantidad diaria “h(t)” de partículas de polen desprendidas en un cultivo controlado, en función del tiempo “t” en días transcurridos desde el inicio de un experimento, con 0 ≤ t ≤ 5: <div class=\"table-wrap\"><table class=\"exam-table\"><tr><th>t</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr><tr><td>h(t)</td><td>800</td><td>1200</td><td>1800</td><td>2700</td><td>4050</td><td>6075</td></tr></table></div> De acuerdo con la información anterior, ¿cuál opción corresponde al tipo de función que se adapta mejor para modelar h?",
    "options": [
      "Función lineal",
      "Función logarítmica",
      "Función exponencial"
    ]
  },
  {
    "sourceNumber": 31,
    "lead": "La siguiente tabla muestra la función c que determina la cantidad diaria &quot;c(x)&quot; de botellas de agua vendidas en una tienda, en función del tiempo &quot;x&quot; en días transcurridos desde el inicio de un mes, con 1 ≤ x ≤ 5: <div class=\"table-wrap\"><table class=\"exam-table\"><tr><th>x</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr><tr><td>c(x)</td><td>30</td><td>65</td><td>105</td><td>150</td><td>200</td></tr></table></div> De acuerdo con la información anterior, ¿cuál opción corresponde al tipo de función que se adapta mejor para modelar c?",
    "options": [
      "Función lineal",
      "Función cuadrática",
      "Función exponencial"
    ]
  },
  {
    "sourceNumber": 32,
    "lead": "La siguiente representación gráfica muestra la distribución de los datos correspondiente a la distancia diaria, en kilómetros, recorrida por una persona ciclista durante un mes. Además, muestra el promedio de esos datos: <span data-fig=\"32\"></span> De acuerdo con la información anterior, la mediana de esos datos es",
    "options": [
      "mayor que 45 km.",
      "menor que 45 km.",
      "igual que 45 km."
    ]
  },
  {
    "sourceNumber": 33,
    "lead": "La cantidad total de agua consumida en cada una de al menos 120 de esas casas, al finalizar el día, fue mayor o igual que",
    "options": [
      "140 L.",
      "180 L.",
      "250 L."
    ]
  },
  {
    "sourceNumber": 34,
    "lead": "Con certeza, ¿cuál de las siguientes opciones corresponde a una cantidad total de agua que en ninguna de las 160 casas pudo haberse consumido al finalizar ese día?",
    "options": [
      "170 L",
      "220 L",
      "450 L"
    ]
  },
  {
    "sourceNumber": 35,
    "lead": "La siguiente tabla muestra el porcentaje de cada uno de los tres componentes que se consideraron al calificar el desempeño de cada una de las personas trabajadoras de una empresa de tecnología. Asimismo, se muestra la calificación obtenida por componente, en una escala de 1 a 100, del desempeño de Laura: <div class=\"table-wrap\"><table class=\"exam-table\"><tr><th>Componente</th><th>Porcentaje</th><th>Calificación del desempeño de Laura</th></tr><tr><td>Productividad</td><td>40 %</td><td>78</td></tr><tr><td>Trabajo en equipo</td><td>35 %</td><td>85</td></tr><tr><td>Innovación</td><td>25 %</td><td>90</td></tr></table></div> Además, la nota final de ese desempeño corresponde a la media aritmética ponderada de los tres componentes calificados. De acuerdo con la información anterior, ¿cuál es la nota final del desempeño de Laura en esa empresa?",
    "options": [
      "83,45",
      "84,33",
      "85,00"
    ]
  },
  {
    "sourceNumber": 36,
    "lead": "La superficie de un reloj de pared tiene forma de hexágono regular. Si la medida de un radio del hexágono que representa esa superficie es 12 cm, entonces, ¿cuál es la medida del perímetro de ese hexágono?",
    "options": [
      "36 cm",
      "72 cm",
      "144 cm"
    ]
  },
  {
    "sourceNumber": 37,
    "lead": "Considere la siguiente información: La cantidad “c” de suscriptores, en miles, que tuvo una plataforma de videos, está dada por c(x) = x<sup>3</sup>+ 4, donde “x” representa el tiempo en años, desde la creación de esa plataforma, con 0 &lt; x ≤ 6. De acuerdo con la información anterior, ¿cuántos suscriptores, en miles, tuvo la plataforma de videos transcurridos cinco años desde su creación?",
    "options": [
      "1",
      "19",
      "129"
    ]
  },
  {
    "sourceNumber": 38,
    "lead": "Considere la siguiente información: Un estudio científico determina que la cantidad de energía “q” en kilovatios-hora, generada por un panel solar, está dada por q(t) = 0,2 + 0,7 <math><msqrt><mrow><mi>t</mi><mo>+</mo><mn>3</mn></mrow></msqrt></math>, donde “t” representa el tiempo en horas, que ese panel estuvo expuesto a la luz del sol, con 4 ≤ t ≤ 8. De acuerdo con la información anterior, ¿cuál es la cantidad de energía, en kilovatios-hora, generada por ese panel si estuvo expuesto a la luz del sol durante 6 h?",
    "options": [
      "2,3",
      "2,7",
      "4,9"
    ]
  },
  {
    "sourceNumber": 39,
    "lead": "Considere la siguiente información referente al precio &quot;p(x)&quot;, en miles de colones, que se debe pagar para transportar un mueble de madera en un vehículo, en función de la distancia recorrida &quot;x&quot;, en kilómetros, a partir del inicio de un viaje en ese vehículo, con 1 ≤ x ≤ 6: <div class=\"table-wrap\"><table class=\"exam-table\"><tr><th>x</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr><tr><td>p(x)</td><td>14</td><td>28</td><td>42</td><td>56</td><td>70</td><td>84</td></tr></table></div> De acuerdo con la información anterior, ¿cuál de las siguientes opciones corresponde al tipo de función que se adapta mejor para modelar el precio, en miles de colones, que se debe pagar para transportar el mueble de madera en el vehículo, en función de la distancia recorrida, en kilómetros, a partir del inicio de un viaje en ese vehículo?",
    "options": [
      "Función lineal",
      "Función cuadrática",
      "Función exponencial"
    ]
  },
  {
    "sourceNumber": 40,
    "lead": "La siguiente tabla muestra algunas medidas de posición referentes al tiempo, en minutos, que tardó cada día una persona en realizar ejercicio físico, durante un mes: <div class=\"table-wrap\"><table class=\"exam-table\"><tr><th>Medida de posición</th><th>Valor</th></tr><tr><td>Mínimo</td><td>45</td></tr><tr><td>Moda</td><td>55</td></tr><tr><td>Máximo</td><td>65</td></tr></table></div> De acuerdo con la información anterior, ¿cuál fue el mayor tiempo que tardó la persona en realizar ejercicio físico en al menos un día de ese mes?",
    "options": [
      "65 min",
      "55 min",
      "45 min"
    ]
  }
];
const SHARED={
  "12": {
    "lead": "La siguiente representación gráfica corresponde a la función v que determina el volumen “v(x)”, en millones de metros cúbicos, contenido en el embalse de una represa hidroeléctrica, en función del tiempo “x” en días transcurridos desde el inicio de un estudio científico, con 0 &lt; x ≤ 60: <span data-fig=\"12\"></span>"
  },
  "33": {
    "lead": "La siguiente tabla muestra algunas medidas de posición referentes a la cantidad total de agua, en litros, consumida en cada una de 160 casas de una ciudad al finalizar un mismo día: <div class=\"table-wrap\"><table class=\"exam-table\"><tr><th>Medida de posición</th><th>Valor</th></tr><tr><td>Mínimo</td><td>80</td></tr><tr><td>Máximo</td><td>400</td></tr><tr><td>Moda</td><td>150</td></tr><tr><td>Mediana</td><td>180</td></tr><tr><td>Promedio</td><td>200</td></tr><tr><td>Primer cuartil</td><td>140</td></tr><tr><td>Tercer cuartil</td><td>250</td></tr></table></div>"
  }
};
