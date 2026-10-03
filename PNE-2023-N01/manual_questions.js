// Transcripción cotejada con 2023-N01.
const QUESTIONS=[
  {
    "lead": "Los guardaparques de un parque nacional instalaron una antena que emite una señal, la cual permite a tres estaciones de vigilancia de ese parque comunicarse entre sí. La siguiente representación gráfica, en la que las unidades están en kilómetros, muestra la ubicación de las tres estaciones de vigilancia (R, S y T), de la antena (A) y de la circunferencia que corresponde al alcance máximo de la señal que emite esa antena:",
    "options": [
      "(x + 10)<sup>2</sup> + (y + 10)<sup>2</sup> = 100",
      "(x − 20)<sup>2</sup> + (y − 20)<sup>2</sup> = 100",
      "(x − 10)<sup>2</sup> + (y − 10)<sup>2</sup> = 100"
    ],
    "fig": "1",
    "ask": "De acuerdo con la información anterior, ¿cuál de las siguientes representaciones algebraicas, en las que las unidades están en kilómetros, corresponde al alcance máximo de la señal que emite esa antena?"
  },
  {
    "lead": "El alcance máximo de la señal inalámbrica que emite un teléfono celular es 10 m a su alrededor. La ubicación de ese teléfono (T) es 20 m al este y 15 m al norte de la ubicación del dormitorio principal (D) de una casa, el cual se considera como origen. ¿Cuál es la representación gráfica, en la que las unidades están en metros, de la circunferencia que corresponde al alcance máximo de la señal que emite ese celular?",
    "options": [
      "<span data-fig=\"2A\"></span>",
      "<span data-fig=\"2B\"></span>",
      "<span data-fig=\"2C\"></span>"
    ]
  },
  {
    "lead": "A continuación, se muestra la representación gráfica, en la que las unidades están en kilómetros, de la ubicación (P) de un puerto, (R) de un barco y de la circunferencia que corresponde al alcance máximo de la señal que emite el radar de ese barco:",
    "options": [
      "<span data-fig=\"3A\"></span>",
      "<span data-fig=\"3B\"></span>",
      "<span data-fig=\"3C\"></span>"
    ],
    "fig": "3",
    "ask": "De acuerdo con la información anterior, si dos horas después la nueva ubicación (S) del barco es 1 km al sur de (R), entonces, ¿cuál es la representación gráfica, en la que las unidades están en kilómetros, de la circunferencia que corresponde al alcance máximo de la señal que emite el radar de ese barco en su nueva ubicación?"
  },
  {
    "lead": "Un parque tiene forma circular y la medida de su diámetro es 32 m. Las rectas h y k representan aceras que pasan por el centro de ese parque. Las rectas j y n representan dos aceras paralelas entre sí. La siguiente representación gráfica, en la que las unidades están en metros, muestra el parque y esas aceras:",
    "options": [
      "j y k",
      "h y j",
      "k y n"
    ],
    "fig": "4",
    "ask": "De acuerdo con la información anterior, ¿cuáles de esas rectas, que representan aceras, son perpendiculares entre sí?"
  },
  {
    "lead": "Una antena de telecomunicaciones emite una señal que permite a los teléfonos celulares, que se encuentran a 5 km o menos alrededor de esa antena, realizar y recibir llamadas. A continuación, se muestra la representación gráfica, en la que las unidades están en kilómetros, de la circunferencia que corresponde al alcance máximo de la señal que emite esa antena:",
    "options": [
      "W",
      "K",
      "L"
    ],
    "fig": "5",
    "ask": "De acuerdo con la información anterior, si las ubicaciones que tienen los teléfonos celulares W, K y L corresponden, respectivamente, a los puntos (8, 5), (8, 11) y (11, 5), entonces, ¿en cuál de esos teléfonos se puede realizar y recibir llamadas por medio de la señal de esa antena?"
  },
  {
    "lead": "Fernando debe elaborar una tarjeta de regalo que tenga forma de hexágono regular. Si él requiere que la medida del radio del hexágono, que representa esa tarjeta, sea 6 cm, entonces, ¿cuál será el perímetro de la tarjeta que elaborará Fernando?",
    "options": [
      "18 cm",
      "36 cm",
      "94 cm"
    ]
  },
  {
    "lead": "Una persona tiene dos espejos del mismo tamaño y cada uno de ellos tiene forma de hexágono regular. Esa persona, algunas veces coloca los espejos separados y otras veces juntos donde comparten uno de los lados, tal y como se muestra a continuación:",
    "options": [
      "igual que la suma de las áreas de los espejos separados.",
      "mayor que la suma de las áreas de los espejos separados.",
      "menor que la suma de las áreas de los espejos separados."
    ],
    "fig": "7",
    "ask": "De acuerdo con la información anterior, el área de la figura formada por los espejos, cuando esa persona los coloca juntos, es"
  },
  {
    "lead": "Andrea es ingeniera en una empresa que produce paneles solares para generar energía limpia. A continuación, se muestra la representación gráfica, en la que las unidades están en metros, de un panel solar diseñado por ella:",
    "options": [
      "2",
      "3",
      "6"
    ],
    "fig": "8",
    "ask": "De acuerdo con la información anterior, si Andrea desea colocar una cinta metálica alrededor de todo el borde de ese panel, entonces, ¿cuál es la menor cantidad de metros que ella necesita de esa cinta?"
  },
  {
    "lead": "Un arquitecto diseñó un tipo de ventana como el que se muestra en la siguiente representación gráfica:",
    "options": [
      "12 pero menor que 14.",
      "8 pero menor que 10.",
      "6 pero menor que 7."
    ],
    "fig": "9",
    "ask": "De acuerdo con la información anterior, el perímetro, en metros, de esa ventana es mayor que"
  },
  {
    "lead": "Un estañón de metal, con forma de cilindro circular recto, se utilizó para fabricar dos recipientes. Para ello, se le realizó un corte plano a ese estañón, de forma perpendicular a sus bases, tal y como se muestra en la siguiente figura:",
    "options": [
      "Una elipse",
      "Un rectángulo",
      "Una circunferencia"
    ],
    "fig": "10",
    "ask": "De acuerdo con la información anterior, ¿cuál de las siguientes secciones planas corresponde a la que se obtuvo en cada recipiente producto de ese corte?"
  },
  {
    "lead": "Un trozo de árbol (tuca) con forma de cilindro circular recto, se utilizó para fabricar la parte superior de una mesa. Para ello, se le realizaron dos cortes planos a esa tuca, de forma oblicua a sus bases y sin intersecarlas, tal y como se muestra en la siguiente figura:",
    "options": [
      "elipses.",
      "rectángulos.",
      "circunferencias."
    ],
    "fig": "11",
    "ask": "De acuerdo con la información anterior, las secciones planas que se obtuvieron en esa tuca, producto de los cortes realizados, corresponden a"
  },
  {
    "lead": "Desde el inicio de ese viaje, ¿cuántos minutos transcurrieron para que el helicóptero alcanzara la mayor rapidez durante todo ese viaje?",
    "options": [
      "15 min",
      "50 min",
      "90 min"
    ]
  },
  {
    "lead": "¿Cuál fue la rapidez del helicóptero a los 90 min desde el inicio de ese viaje?",
    "options": [
      "0 km/h",
      "15 km/h",
      "65 km/h"
    ]
  },
  {
    "lead": "La siguiente representación gráfica corresponde al monto “M(x)” en colones que se debe pagar, en función de la masa “x” en kilogramos, de un paquete que se enviará por medio de un servicio de encomienda:",
    "options": [
      "₡1500",
      "₡3000",
      "₡5000"
    ],
    "fig": "14",
    "ask": "De acuerdo con la información anterior, si por medio de ese servicio de encomienda se enviará un paquete cuya masa es 5 kg, entonces, ¿cuál es el monto que se deberá pagar por el envío de ese paquete?"
  },
  {
    "lead": "Considere la siguiente información: En una verdulería se determina que el monto total “w” en colones por cobrar a cada cliente, en función de la cantidad “n” de naranjas vendidas, está dado por w(n) = 150n. De acuerdo con la información anterior, ¿cuál de los siguientes criterios de funciones relaciona la cantidad “n(w)” de naranjas vendidas, en función del monto total “w” por cobrar a cada cliente?",
    "options": [
      "n(w) = w + 150",
      "n(w) = w − 150",
      "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" displaystyle=\"true\"><mi>n</mi><mo>(</mo><mi>w</mi><mo>)</mo><mo>=</mo><mfrac><mrow><mi>w</mi></mrow><mrow><mn>150</mn></mrow></mfrac></math>"
    ]
  },
  {
    "lead": "Considere la siguiente información: La distancia “n” en kilómetros a la que se encuentra un automóvil del parque de una ciudad, en función de la cantidad “k” de kilómetros recorridos por ese automóvil a partir del inicio de un viaje, está dada por n(k) = 120 + k. De acuerdo con la información anterior, ¿cuál de los siguientes criterios de funciones relaciona la cantidad “k(n)” de kilómetros recorridos por el automóvil, a partir del inicio de un viaje, en función de la distancia “n” a la que se encuentra ese automóvil del parque de la ciudad?",
    "options": [
      "k(n) = n + 120",
      "k(n) = n – 120",
      "k(n) = –n + 120"
    ]
  },
  {
    "lead": "La función f relaciona linealmente la temperatura “f(c)” en grados Fahrenheit, con la temperatura “c” en grados Celsius, donde 0 ≤ c ≤ 95. A continuación, se muestra la representación gráfica de la función inversa de f:",
    "options": [
      "35 grados Fahrenheit.",
      "95 grados Fahrenheit.",
      "203 grados Fahrenheit."
    ],
    "fig": "17",
    "ask": "De acuerdo con la información anterior, 95 grados Celsius equivalen a"
  },
  {
    "lead": "Una empresa fabricó adornos y cada uno de ellos tiene forma de prisma recto de base cuadrada. El volumen “v” en centímetros cúbicos de cada adorno, está dado por v(n) = 10n<sup>2</sup>, donde “n” representa la medida en centímetros del lado de la base de cada adorno. Si se necesita conocer la medida del lado de la base de cada adorno, para posteriormente acomodarlos en cajas, entonces la medida del lado “n(v)” en función del volumen “v” corresponde a",
    "options": [
      "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" displaystyle=\"true\"><mi>n</mi><mo>(</mo><mi>v</mi><mo>)</mo><mo>=</mo><mfrac><mrow><msqrt><mi>v</mi></msqrt></mrow><mrow><mn>10</mn></mrow></mfrac></math>",
      "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" displaystyle=\"true\"><mi>n</mi><mo>(</mo><mi>v</mi><mo>)</mo><mo>=</mo><msqrt><mfrac><mrow><mi>v</mi></mrow><mrow><mn>10</mn></mrow></mfrac></msqrt></math>",
      "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" displaystyle=\"true\"><mi>n</mi><mo>(</mo><mi>v</mi><mo>)</mo><mo>=</mo><msqrt><mi>v</mi><mo>−</mo><mn>10</mn></msqrt></math>"
    ]
  },
  {
    "lead": "Considere la siguiente información: La mayor cantidad “N” de árboles de cierta especie, que se puede sembrar en un terreno, está dada por <math xmlns=\"http://www.w3.org/1998/Math/MathML\" displaystyle=\"true\"><mi>N</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msqrt><mi>x</mi></msqrt><mo>+</mo><mn>1</mn></math>, donde “x” representa el área, en metros cuadrados, que tiene el terreno, con 10 < x ≤ 100. De acuerdo con la información anterior, ¿cuál es la mayor cantidad de árboles de esa especie que se puede sembrar en un terreno cuya área es 16 m<sup>2</sup>?",
    "options": [
      "4",
      "5",
      "17"
    ]
  },
  {
    "lead": "Considere la siguiente información: La cantidad total “C” de calorías que una persona quema cuando se ejercita en una caminadora eléctrica, durante un cierto periodo de tiempo, está dada por C(x) = 46x + 96, donde “x” representa la rapidez, en kilómetros por hora, con la que la persona se ejercita en todo ese periodo, con 1 ≤ x ≤ 12. De acuerdo con la información anterior, si Juan se ejercitó en esa caminadora con una rapidez de 1 km/h, durante todo ese periodo, entonces, ¿cuál fue la cantidad total de calorías que él quemó?",
    "options": [
      "46",
      "96",
      "142"
    ]
  },
  {
    "lead": "Considere la siguiente información: La cantidad “C” de litros de combustible que hay en el tanque de un vehículo, está dada por C(x) = 10 + x, donde “x” representa el tiempo, en segundos, transcurrido desde que una máquina comenzó a llenar el tanque con combustible, con 0 ≤ x ≤ 30. De acuerdo con la información anterior, ¿cuál de las siguientes representaciones gráficas corresponde a la cantidad de litros de combustible, que hay en el tanque del vehículo, en función del tiempo, en segundos, transcurrido desde que esa máquina comenzó a llenarlo?",
    "options": [
      "<span data-fig=\"21A\"></span>",
      "<span data-fig=\"21B\"></span>",
      "<span data-fig=\"21C\"></span>"
    ]
  },
  {
    "lead": "Considere la siguiente información: Al inicio de un experimento científico una planta tenía una altura de 6 cm. Además, se determinó que, por cada semana trascurrida desde el inicio del experimento, esa planta creció 3 cm. De acuerdo con la información anterior, la ecuación de la recta que corresponde a la altura “y” en centímetros de esa planta, en función de la cantidad “x” de semanas transcurridas desde el inicio del experimento, es",
    "options": [
      "y = 3x + 6",
      "y = 6x + 3",
      "y = 9x"
    ]
  },
  {
    "lead": "Considere la siguiente información: La altura “h”, en metros desde el suelo, que tuvo un objeto al ser lanzado desde un edificio, está dada por h(x) = −5x<sup>2</sup> + 20x + 60, donde “x” representa el tiempo, en segundos, transcurrido desde que ese objeto fue lanzado, con 0 ≤ x < 6. De acuerdo con la información anterior, ¿cuál fue la altura, en metros desde el suelo, que tuvo ese objeto a 1 s de haber sido lanzado?",
    "options": [
      "70",
      "75",
      "105"
    ]
  },
  {
    "lead": "Considere la siguiente información:",
    "options": [
      "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" displaystyle=\"true\"><mfrac><mrow><mn>1</mn></mrow><mrow><mn>9</mn></mrow></mfrac></math>",
      "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" displaystyle=\"true\"><mfrac><mrow><mn>1</mn></mrow><mrow><mn>8</mn></mrow></mfrac></math>",
      "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" displaystyle=\"true\"><mfrac><mrow><mn>1</mn></mrow><mrow><mn>6</mn></mrow></mfrac></math>"
    ],
    "pre": "La cantidad “C” de miligramos de un medicamento que hubo en el torrente sanguíneo de una persona, a las “x” horas desde que ese medicamento se le suministró vía oral, estuvo dada por <math xmlns=\"http://www.w3.org/1998/Math/MathML\" displaystyle=\"true\"><mi>C</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mrow><mo>(</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>2</mn></mrow></mfrac><mo>)</mo></mrow><mi>x</mi></msup></math>, con 0 ≤ x &lt; 6.",
    "ask": "De acuerdo con la información anterior, ¿cuál fue la cantidad de miligramos de ese medicamento, que hubo en el torrente sanguíneo de esa persona, a las 3 h desde que se le suministró vía oral?"
  },
  {
    "lead": "Considere la siguiente información: Un experto en monedas determina que el precio “P”, en miles de dólares, que tendrá una moneda de colección transcurridos “x” cantidad de años a partir del año 2030, estará dado por P(x) = (1,05)<sup>x</sup> con 0 ≤ x ≤ 8. De acuerdo con la información anterior, conforme avanza el tiempo a partir del año 2030 el precio de la moneda de colección",
    "options": [
      "irá aumentando.",
      "irá disminuyendo.",
      "se mantendrá igual."
    ]
  },
  {
    "lead": "Considere la siguiente información: El número “R” de relojes adicionales a los que usualmente vende una empresa, en cada mes, está dado por R(x) = log<sub>3</sub>(x), donde “x” representa la cantidad de dólares que la empresa invierte en publicidad durante el mes, con 81 ≤ x ≤ 2187. De acuerdo con la información anterior, conforme la empresa aumenta la cantidad de dólares que invierte en publicidad, el número de relojes adicionales a los que usualmente vende",
    "options": [
      "va aumentando.",
      "va disminuyendo.",
      "se mantiene constante."
    ]
  },
  {
    "lead": "Considere la siguiente información: La cantidad “C” de camisetas adicionales a las que usualmente vende una tienda, en cada mes, está dada por C(x) = log<sub>2</sub>(x), donde “x” representa el monto, en dólares que se descuenta al precio de cada camiseta durante el mes, con 2 ≤ x ≤ 16. De acuerdo con la información anterior, si durante un mes cada camiseta tuvo un descuento de ocho dólares en su precio, entonces, ¿cuántas camisetas adicionales vendió la tienda en ese mes?",
    "options": [
      "2",
      "3",
      "4"
    ]
  },
  {
    "lead": "Las empresas W y H cobran a sus respectivos clientes un monto por el alquiler de una bicicleta. En la siguiente representación gráfica se muestra el monto “y” en colones que cada empresa cobra a sus clientes, en función del tiempo “x” en horas, por el alquiler de la bicicleta:",
    "options": [
      "2",
      "4",
      "6"
    ],
    "fig": "28",
    "ask": "De acuerdo con la información anterior, si un cliente de W alquiló una bicicleta por el mismo tiempo que la alquiló un cliente de H y ambos pagaron el mismo monto, entonces, ¿cuántas horas alquiló, cada uno de los clientes, la respectiva bicicleta?"
  },
  {
    "lead": "Considere la siguiente información: Gerardo compró tres lapiceros y dos cuadernos y pagó ₡3300. Diana compró dos lapiceros y cuatro cuadernos, a los mismos precios que Gerardo y pagó ₡5400. ¿Cuál es el precio que tenía cada cuaderno? De acuerdo con la información anterior, si “x” representa el precio, en colones, que tenía cada uno de esos lapiceros y “y” el precio, en colones, que tenía cada uno de esos cuadernos, entonces un sistema de ecuaciones lineales con dos incógnitas que permite resolver el problema anterior corresponde a",
    "options": [
      "<div class=\"system\">{<div>3x + 2y = 5400<br>2x + 4y = 3300</div></div>",
      "<div class=\"system\">{<div>2x + 3y = 3300<br>4x + 2y = 5400</div></div>",
      "<div class=\"system\">{<div>3x + 2y = 3300<br>2x + 4y = 5400</div></div>"
    ]
  },
  {
    "lead": "La siguiente representación gráfica muestra la rapidez “R(x)”, en metros por segundo, a la que corrió Miguel en una carrera, en función del tiempo “x”, en minutos, transcurrido desde el inicio de esa carrera, con 0 ≤ x ≤ 4:",
    "options": [
      "R(x) = 2<sup>x</sup>",
      "R(x) = x<sup>2</sup>",
      "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" displaystyle=\"true\"><mi>R</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msqrt><mi>x</mi></msqrt></math>"
    ],
    "fig": "30",
    "ask": "De acuerdo con la información anterior, ¿cuál de los siguientes criterios de funciones podría modelar la rapidez, en metros por segundo, a la que corrió Miguel en esa carrera, en función del tiempo, en minutos, transcurrido desde el inicio de esa carrera?"
  },
  {
    "lead": "En la siguiente tabla se muestra la cantidad “C(x)” de miles de bacterias que hay en un cultivo, en función del tiempo “x”, en horas, transcurrido desde el inicio de un experimento, con 0 ≤ x ≤ 4:",
    "options": [
      "Función cuadrática",
      "Función logarítmica",
      "Función exponencial"
    ],
    "pre": "<div class=\"table-wrap\"><table class=\"exam-table\"><tr><th>x</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th></tr><tr><td>C(x)</td><td>1</td><td>2</td><td>4</td><td>8</td><td>16</td></tr></table></div>",
    "ask": "De acuerdo con la información anterior, ¿cuál de los siguientes tipos de funciones es el que mejor se adapta para modelar la cantidad de miles de bacterias que hay en ese cultivo, en función del tiempo, en horas, transcurrido desde el inicio de ese experimento?"
  },
  {
    "lead": "La distribución de los datos referidos a las edades en años, de las personas que conforman un equipo de ciclismo, presenta una asimetría negativa. Si la edad promedio de las personas de ese equipo es 28 años, entonces al menos la mitad de las personas que conforman ese equipo de ciclismo tiene una edad",
    "options": [
      "igual que 28 años.",
      "mayor que 28 años.",
      "menor que 28 años."
    ]
  },
  {
    "lead": "Si en la tienda W de esa ciudad, el precio de cada computadora de esa marca es menor que en las otras tiendas, entonces, ¿cuál es el precio en dólares, de cada computadora de esa marca, en la tienda W?",
    "options": [
      "745",
      "754",
      "790"
    ]
  },
  {
    "lead": "Con certeza, ¿cuál es el precio, en dólares, que tiene cada computadora de esa marca en al menos dos tiendas de esa ciudad?",
    "options": [
      "760",
      "770",
      "780"
    ]
  },
  {
    "lead": "En la siguiente tabla se presentan algunas medidas de posición referentes a la cantidad de helados que se vendió diariamente en una heladería durante un mes:",
    "options": [
      "110",
      "112",
      "120"
    ],
    "pre": "<div class=\"table-wrap\"><table class=\"exam-table\"><tr><th>Medida de posición</th><th>Valor</th></tr><tr><td>Moda</td><td>110</td></tr><tr><td>Máximo</td><td>120</td></tr><tr><td>Mediana</td><td>112</td></tr></table></div>",
    "ask": "De acuerdo con la información anterior, ¿cuál fue la mayor cantidad de helados que se vendió, en esa heladería, en al menos un día de ese mes?"
  }
];
const SHARED={
  "12": {
    "lead": "Para responder los ítems 12 y 13 considere la siguiente información:",
    "pre": "La siguiente representación gráfica corresponde a la rapidez “R(x)”, en kilómetros por hora, a la cual viajó un helicóptero, en función del tiempo “x”, en minutos, transcurrido desde el inicio de un viaje, con 0 &lt; x ≤ 90:",
    "fig": "12"
  },
  "33": {
    "lead": "Para responder los ítems 33 y 34 considere la siguiente información:",
    "pre": "En la siguiente tabla se presentan algunas medidas de posición referidas a los precios, en dólares, que tienen las computadoras de cierta marca en las tiendas de una ciudad:<div class=\"table-wrap\"><table class=\"exam-table\"><tr><th>Medida de posición</th><th>Valor</th></tr><tr><td>Mínimo</td><td>745</td></tr><tr><td>Máximo</td><td>790</td></tr><tr><td>Moda</td><td>780</td></tr><tr><td>Mediana</td><td>770</td></tr><tr><td>Promedio</td><td>760</td></tr><tr><td>Primer Cuartil</td><td>754</td></tr><tr><td>Tercer Cuartil</td><td>778</td></tr></table></div>"
  }
};
