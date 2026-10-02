// Texto cotejado con el cuadernillo sumativo 2023-D01.
const QUESTIONS=[
  {
    "lead": "La siguiente representación gráfica, en la que las unidades están en kilómetros, muestra la ubicación de la entrada de un parque nacional (E), de un dispositivo transmisor-receptor (T) y de la circunferencia que corresponde al alcance máximo de la señal que emite ese dispositivo:",
    "options": [
      "(x − 4)<sup>2</sup> + (y − 3)<sup>2</sup> = 4",
      "(x − 4)<sup>2</sup> + (y + 3)<sup>2</sup> = 4",
      "(x + 4)<sup>2</sup> + (y + 3)<sup>2</sup> = 4"
    ],
    "fig": "1",
    "ask": "De acuerdo con la información anterior, ¿cuál de las siguientes representaciones algebraicas, en la que las unidades están en kilómetros, corresponde al alcance máximo de la señal que emite ese dispositivo?"
  },
  {
    "lead": "En un centro educativo se instaló un dispositivo electrónico que emite una señal cuyo alcance máximo es 10 m a su alrededor. La ubicación de ese dispositivo electrónico (T) es 30 m al este y 15 m al norte de la ubicación de una biblioteca (L), la cual se considera como origen. ¿Cuál es la representación gráfica, en la que las unidades están en metros, de la circunferencia que corresponde al alcance máximo de la señal que emite ese dispositivo?",
    "options": [
      "<span data-fig=\"2A\"></span>",
      "<span data-fig=\"2B\"></span>",
      "<span data-fig=\"2C\"></span>"
    ]
  },
  {
    "lead": "A continuación, se muestra la representación gráfica, en la que las unidades están en kilómetros, de la ubicación (S) de un puerto, (R) de un barco y de la circunferencia que corresponde al alcance máximo de la señal que emite el radar de ese barco:",
    "options": [
      "<span data-fig=\"3A\"></span>",
      "<span data-fig=\"3B\"></span>",
      "<span data-fig=\"3C\"></span>"
    ],
    "fig": "3",
    "ask": "De acuerdo con la información anterior, si una hora después la nueva ubicación (W) del barco es 5 km al oeste de (R), entonces, ¿cuál es la representación gráfica, en la que las unidades están en kilómetros, de la circunferencia que corresponde al alcance máximo de la señal que emite el radar de ese barco en su nueva ubicación?"
  },
  {
    "lead": "Dos barcos navegaron siguiendo, cada uno de ellos, una trayectoria distinta en línea recta. Un radar, ubicado en una pequeña isla, emite una señal que detectó a ambos barcos en una sola ocasión y simultáneamente durante sus respectivas trayectorias. La distancia entre esos barcos era 4 km en el momento en que ese radar los detectó.",
    "options": [
      "perpendiculares entre sí.",
      "concurrentes entre sí.",
      "paralelas entre sí."
    ],
    "pre": "A continuación, se muestra la representación gráfica, en la que las unidades están en kilómetros, de la ubicación del radar (R), de la circunferencia que corresponde al alcance máximo de la señal que emite ese radar y de la recta n que corresponde a la trayectoria de uno de esos barcos:",
    "fig": "4",
    "ask": "De acuerdo con la información anterior, las rectas que corresponden a las trayectorias de esos barcos fueron"
  },
  {
    "lead": "El tiro con arco es un deporte olímpico en el cual se utiliza un arco para lanzar flechas a un objetivo (diana). La diana tiene forma circular y la medida de su diámetro es 122 cm. A continuación, se muestra la representación gráfica, en la que las unidades están en centímetros, de una diana utilizada en unos Juegos Olímpicos:",
    "options": [
      "R",
      "S",
      "T"
    ],
    "fig": "5",
    "ask": "De acuerdo con la información anterior, si durante esos Juegos Olímpicos una persona deportista lanzó tres flechas R, S y T las cuales impactaron, respectivamente, en los puntos que corresponden a (61, 133), (61, 123) y (61, 113), entonces, ¿cuál de esas flechas impactó en el interior de la diana?"
  },
  {
    "lead": "Alejandra elaborará un rótulo, con forma de triángulo equilátero, a partir de una lámina de metal cuadrada. Para ello, Alejandra dibuja el triángulo sobre la lámina que posteriormente recortará por el borde. La medida de un lado del rótulo debe ser igual que la medida de un lado de la lámina. A continuación, se muestra esa lámina y el triángulo que representa el rótulo:",
    "options": [
      "igual que el área de la parte de la lámina que sobrará.",
      "mayor que el área de la parte de la lámina que sobrará.",
      "menor que el área de la parte de la lámina que sobrará."
    ],
    "fig": "6",
    "ask": "De acuerdo con la información anterior, el área del rótulo, que elaborará Alejandra, será"
  },
  {
    "lead": "Una persona tiene dos espejos del mismo tamaño y cada uno de ellos tiene forma de hexágono regular. Esa persona, algunas veces coloca los espejos separados y otras veces juntos donde comparten uno de los lados, tal y como se muestra a continuación:",
    "options": [
      "igual que la suma de los perímetros de los espejos separados.",
      "mayor que la suma de los perímetros de los espejos separados.",
      "menor que la suma de los perímetros de los espejos separados."
    ],
    "fig": "7",
    "ask": "De acuerdo con la información anterior, el perímetro de la figura formada por los espejos, cuando esa persona los coloca juntos, es"
  },
  {
    "lead": "A continuación, se muestra la representación gráfica, en la que las unidades están en metros, del piso del balcón diseñado por una arquitecta para la casa de un cliente:",
    "options": [
      "le faltó cerámica.",
      "le sobró cerámica.",
      "no le sobró ni le faltó cerámica."
    ],
    "fig": "8",
    "ask": "De acuerdo con la información anterior, si el cliente compró 12 m<sup>2</sup> de cerámica para colocarle a la totalidad del piso de ese balcón, entonces al cliente"
  },
  {
    "lead": "Kansas es uno de los cincuenta estados que conforman los Estados Unidos de América. A continuación, se muestra una representación gráfica del territorio de ese estado:",
    "options": [
      "1800 y menor que 2200.",
      "180 000 y menor que 280 000.",
      "320 000 y menor que 400 000."
    ],
    "fig": "9",
    "ask": "De acuerdo con la información anterior, el área, en kilómetros cuadrados, del estado de Kansas, es mayor que"
  },
  {
    "lead": "Un tronco de madera, que tiene forma de cilindro circular recto, se utilizó para elaborar un par de artesanías. Para ello, a ese tronco se le realizó un corte plano oblicuo con respecto a sus bases sin intersecarlas, tal y como se muestra en la siguiente figura:",
    "options": [
      "una elipse.",
      "un rectángulo.",
      "una circunferencia."
    ],
    "fig": "10",
    "ask": "De acuerdo con la información anterior, en la artesanía 2, la forma que tiene la sección plana obtenida producto del corte realizado a ese tronco corresponde a"
  },
  {
    "lead": "Considere la siguiente información:",
    "options": [
      "M",
      "N",
      "P"
    ],
    "pre": "En una actividad cultural se utilizó papel reciclado para elaborar máscaras. Cada una de ellas tiene forma esférica y todas tienen el mismo tamaño. Posteriormente, a cada una de las máscaras se le realizó un corte plano (abertura) para que una persona pueda introducir la cabeza.<br><br>En la siguiente tabla, se muestra la medida del diámetro de la abertura realizada a cada una de tres máscaras:<div class=\"table-wrap\"><table class=\"exam-table\"><tr><th>Máscara</th><th>Medida del diámetro de la abertura de la máscara</th></tr><tr><td>M</td><td>20 cm</td></tr><tr><td>N</td><td>22 cm</td></tr><tr><td>P</td><td>24 cm</td></tr></table></div>",
    "ask": "De acuerdo con la información anterior, ¿en cuál de las máscaras se realizó la abertura a una menor distancia del centro de la máscara?"
  },
  {
    "lead": "Conforme avanzó el tiempo entre los minutos 50 y 90, desde el inicio de ese viaje, la rapidez del helicóptero fue",
    "options": [
      "disminuyendo.",
      "aumentando.",
      "constante."
    ]
  },
  {
    "lead": "Durante todo ese viaje, ¿en cuántas ocasiones la rapidez del helicóptero fue 54 km/h?",
    "options": [
      "En una ocasión",
      "En dos ocasiones",
      "En tres ocasiones"
    ]
  },
  {
    "lead": "La cantidad “C” de suscriptores que tuvo una plataforma de vídeos, está dada por C(x) = 1000x<sup>3</sup> + 4000, donde “x” representa el tiempo, en años, transcurrido desde su creación, con 0 < x ≤ 3. ¿Cuántos suscritores tuvo esa plataforma de vídeos dos años después de su creación?",
    "options": [
      "10 000",
      "12 000",
      "13 000"
    ]
  },
  {
    "lead": "Considere la siguiente información: La función que relaciona el perímetro “p” en centímetros, de una pieza de cerámica cuadrada, está dada por p(h) = 4h, donde “h” representa la medida en centímetros de uno de los lados de esa pieza. De acuerdo con la información anterior, ¿cuál de los siguientes criterios de funciones relaciona la medida “h(p)” del lado del cuadrado de esa pieza, en función de su perímetro “p”?",
    "options": [
      "h(p) = p + 4",
      "h(p) = p − 4",
      "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" displaystyle=\"true\"><mi>h</mi><mo>(</mo><mi>p</mi><mo>)</mo><mo>=</mo><mfrac><mrow><mi>p</mi></mrow><mrow><mn>4</mn></mrow></mfrac></math>"
    ]
  },
  {
    "lead": "El ingeniero de una empresa debe elaborar medallas con forma circular. El área “a” en centímetros cuadrados de la superficie de cada medalla está dada por a(r) = πr<sup>2</sup>, donde “r” representa la medida en centímetros de su radio. Si el ingeniero necesita conocer la medida del radio de cada una de las medallas, entonces la medida del radio “r(a)” en función del área “a” es",
    "options": [
      "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" displaystyle=\"true\"><mi>r</mi><mo>(</mo><mi>a</mi><mo>)</mo><mo>=</mo><mfrac><mrow><msqrt><mrow><mi>a</mi></mrow></msqrt></mrow><mrow><mi>π</mi></mrow></mfrac></math>",
      "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" displaystyle=\"true\"><mi>r</mi><mo>(</mo><mi>a</mi><mo>)</mo><mo>=</mo><msqrt><mrow><mfrac><mrow><mi>a</mi></mrow><mrow><mi>π</mi></mrow></mfrac></mrow></msqrt></math>",
      "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" displaystyle=\"true\"><mi>r</mi><mo>(</mo><mi>a</mi><mo>)</mo><mo>=</mo><msqrt><mrow><mi>a</mi><mo>−</mo><mi>π</mi></mrow></msqrt></math>"
    ]
  },
  {
    "lead": "La siguiente representación gráfica corresponde a la de la función que relaciona la temperatura “f(c)”, en grados Fahrenheit, con la temperatura “c”, en grados Celsius:",
    "options": [
      "<span data-fig=\"17A\"></span>",
      "<span data-fig=\"17B\"></span>",
      "<span data-fig=\"17C\"></span>"
    ],
    "fig": "17",
    "ask": "De acuerdo con la información anterior, ¿cuál de las siguientes representaciones gráficas corresponde a la de la función que relaciona la temperatura “c(f)”, en grados Celsius, con la temperatura “f”, en grados Fahrenheit?"
  },
  {
    "lead": "La siguiente representación gráfica corresponde a la de la función cuadrática h que relaciona la altura “h(t)”, en metros desde el suelo, que tuvo una piedra, con el tiempo “t” en segundos, transcurrido desde que esa piedra fue lanzada:",
    "options": [
      "]0, 3[",
      "]1, 4[",
      "]3, 4["
    ],
    "fig": "18",
    "ask": "De acuerdo con la información anterior, si se debe determinar la función inversa de h, entonces, ¿cuál de los siguientes intervalos podría corresponder a los valores del tiempo de la función h?"
  },
  {
    "lead": "Considere la siguiente información: La longitud “M” en metros que tiene una planta, está dada por <math xmlns=\"http://www.w3.org/1998/Math/MathML\" displaystyle=\"true\"><mi>M</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msqrt><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow></msqrt></math>, donde “x” representa el tiempo en semanas, transcurrido desde que se sembró esa planta, con 1 < x ≤ 6. De acuerdo con la información anterior, desde que se sembró la planta, ¿cuántas semanas deben transcurrir para que esa planta tenga una longitud de 2 m?",
    "options": [
      "2",
      "3",
      "4"
    ]
  },
  {
    "lead": "Considere la siguiente información: En cierto lugar el monto que se debe pagar, por cada kilómetro recorrido en un taxi, es ₡700. Además, se debe pagar ₡500 independientemente de la cantidad de kilómetros recorridos en ese taxi. De acuerdo con la información anterior, la ecuación de la recta que corresponde al monto total “y” en colones por pagar, en función de la distancia “x” en kilómetros recorridos en ese taxi, es",
    "options": [
      "y = 1200x",
      "y = 500x + 700",
      "y = 700x + 500"
    ]
  },
  {
    "lead": "Considere la siguiente información:",
    "options": [
      "<span data-fig=\"21A\"></span>",
      "<span data-fig=\"21B\"></span>",
      "<span data-fig=\"21C\"></span>"
    ],
    "pre": "La estatura “E” en centímetros que tienen algunas personas, está dada por E(x) = 3x + 64, donde “x” representa la medida en centímetros del largo de uno de los huesos de su cuerpo, con 28 ≤ x ≤ 42.",
    "ask": "De acuerdo con la información anterior, ¿cuál de las siguientes representaciones gráficas corresponde a la estatura en centímetros que tienen esas personas, en función de la medida en centímetros del largo de ese hueso?"
  },
  {
    "lead": "Considere la siguiente información: La cantidad “C” de manzanas que por temporada se obtendría de cada uno de los árboles que se sembrarían en un terreno, está dada por C(x) = −x<sup>2</sup> + 16x + 400, donde “x” representa el número de árboles por sembrar en ese terreno, con 0 ˂ x ≤ 20. De acuerdo con la información anterior, si en una temporada se obtuvo la mayor cantidad de manzanas de cada uno de esos árboles, entonces, ¿cuántos de estos fueron sembrados en ese terreno?",
    "options": [
      "8",
      "10",
      "16"
    ]
  },
  {
    "lead": "A continuación, se muestra la representación gráfica de la función cuadrática p que corresponde al precio “p(x)”, en dólares, que tuvo cada una de las acciones de una empresa, en función del tiempo “x”, en años, trascurrido desde la fundación de esa empresa, con 0 &lt; x ≤ 8:",
    "options": [
      "4",
      "8",
      "34"
    ],
    "fig": "23",
    "ask": "De acuerdo con la información anterior, ¿cuántos años transcurrieron desde la fundación de esa empresa para que el precio de cada una de sus acciones fuera el máximo posible?"
  },
  {
    "lead": "Considere la siguiente información: La cantidad “C” de bacterias en miles, que había en un cultivo está dada por C(x) = 2<sup>x</sup>, donde “x” representa el tiempo en horas, transcurrido desde el inicio de la observación de ese cultivo, con 0 ≤ x ≤ 10. De acuerdo con la información anterior, ¿cuál fue la cantidad de bacterias, en miles, que había en ese cultivo al inicio de su observación?",
    "options": [
      "0",
      "1",
      "2"
    ]
  },
  {
    "lead": "En la siguiente tabla se muestra el criterio de la función que representa el monto en dólares, que una persona obtendrá en cada una de tres empresas, al invertir 1000 dólares en acciones y venderlas “x” cantidad de años después de adquiridas:",
    "options": [
      "M",
      "S",
      "T"
    ],
    "pre": "<div class=\"table-wrap\"><table class=\"exam-table\"><tr><th>Empresa</th><th>Criterio</th></tr><tr><td>M</td><td>M(x) = (9/10)<sup>x</sup></td></tr><tr><td>S</td><td>S(x) = (6/5)<sup>x</sup></td></tr><tr><td>T</td><td>T(x) = (3/4)<sup>x</sup></td></tr></table></div>",
    "ask": "De acuerdo con la información anterior, si la persona invierte 1000 dólares en acciones, de una de esas empresas, para venderlas un año después de adquiridas, entonces, ¿en cuál de esas empresas obtendrá un monto mayor al invertido?"
  },
  {
    "lead": "Considere la siguiente información: Un recipiente contiene 2 L de agua y a partir de cierto instante, se le realizó un orificio en su parte inferior. La cantidad “C” de litros de agua que pierde ese recipiente, está dada por C(x) = log(x), donde “x” representa el tiempo en segundos, transcurrido desde que se le realizó ese orificio, con 3 ≤ x ≤ 100. De acuerdo con la información anterior, ¿cuántos segundos transcurrieron, desde que se le realizó el orificio, para que ese recipiente perdiera 1 L de agua?",
    "options": [
      "3",
      "7",
      "10"
    ]
  },
  {
    "lead": "Considere la siguiente información: El número “R” de relojes adicionales a los que usualmente vende una empresa, en cada mes, está dado por R(x) = log<sub>3</sub>(x), donde “x” representa la cantidad de dólares que la empresa invierte en publicidad en ese mes, con 81 ≤ x ≤ 2187. De acuerdo con la información anterior, si en un mes la empresa invirtió 243 dólares en publicidad, entonces, ¿cuántos relojes adicionales vendió en ese mes?",
    "options": [
      "5",
      "81",
      "125"
    ]
  },
  {
    "lead": "Considere la siguiente información: Miguel compró tres helados y dos confites y pagó ₡1830. Natalia compró un helado y cinco confites, a los mismos precios que Miguel y pagó ₡935. ¿Cuál es el precio que tenía cada helado? De acuerdo con la información anterior, si “x” representa el precio, en colones, que tenía cada uno de esos helados y “y” el precio, en colones, que tenía cada uno de esos confites, entonces un sistema de ecuaciones lineales con dos incógnitas que permite resolver el problema anterior corresponde a",
    "options": [
      "<div class=\"system\">{<div>3x + 2y = 1830<br>x + 5y = 935</div></div>",
      "<div class=\"system\">{<div>2x + 3y = 1830<br>5x + y = 935</div></div>",
      "<div class=\"system\">{<div>3x + 2y = 935<br>x + 5y = 1830</div></div>"
    ]
  },
  {
    "lead": "Las empresas W y H cobran a sus respectivos usuarios un monto total en colones por el alquiler de una bicicleta. Ese monto total “y” se compone de un monto fijo, más un monto correspondiente al tiempo “x” en horas, por el que se alquile la bicicleta, con 0 &lt; x ≤ 6.",
    "options": [
      "igual al que pagará si la alquila en H.",
      "mayor al que pagará si la alquila en H.",
      "menor al que pagará si la alquila en H."
    ],
    "pre": "A continuación, se muestra el rótulo de cada una de esas empresas, el cual contiene la ecuación que se utiliza para cobrar a los clientes por el alquiler de la bicicleta:<div class=\"table-wrap\"><table class=\"exam-table\"><tr><th>Empresa W</th><th>Empresa H</th></tr><tr><td>y − 1000x = 1500</td><td>2y − 2000x = 3000</td></tr></table></div>",
    "ask": "De acuerdo con la información anterior, si un usuario alquilará una bicicleta por un tiempo determinado, entonces el monto total que pagará en W será"
  },
  {
    "lead": "Considere la siguiente información referente a la cantidad “P(x)” de artículos que produce una máquina en función del tiempo “x” en minutos, transcurrido desde que la máquina empezó a funcionar, con 0 &lt; x ≤ 13:",
    "options": [
      "Función lineal",
      "Función cuadrática",
      "Función exponencial"
    ],
    "pre": "<div class=\"table-wrap\"><table class=\"exam-table\"><tr><th>x</th><th>1</th><th>4</th><th>7</th><th>10</th><th>13</th></tr><tr><td>P(x)</td><td>10</td><td>40</td><td>70</td><td>100</td><td>130</td></tr></table></div>",
    "ask": "De acuerdo con la información anterior, ¿cuál de los siguientes tipos de funciones es el que mejor se adapta para modelar la cantidad de artículos producidos, en función del tiempo transcurrido, desde que esa máquina empezó a funcionar?"
  },
  {
    "lead": "En la siguiente tabla se muestra la cantidad “N(x)” de personas que nacieron cada año en una comunidad, en función del tiempo “x” en años, transcurrido desde el año 2000, con 1 ≤ x ≤ 6:",
    "options": [
      "N(x) = x<sup>2</sup>",
      "N(x) = 2<sup>x</sup>",
      "N(x) = log<sub>2</sub>(x)"
    ],
    "pre": "<div class=\"table-wrap\"><table class=\"exam-table\"><tr><th>x</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr><tr><td>N(x)</td><td>2</td><td>4</td><td>8</td><td>16</td><td>32</td><td>64</td></tr></table></div>",
    "ask": "De acuerdo con la información anterior, ¿cuál de los siguientes criterios de funciones relaciona la cantidad de personas que nacieron en cada uno de esos años, en función del tiempo, en años, transcurrido desde el año 2000?"
  },
  {
    "lead": "Si la distribución de los datos referentes a las masas en kilogramos, de los niños que nacieron en un hospital durante un mes, presentó una asimetría positiva y al menos la mitad del total de esos niños tenía, cada uno de ellos, una masa mayor o igual que 3,08 kg, entonces la masa promedio de esos niños fue",
    "options": [
      "igual que 3,08 kg.",
      "mayor que 3,08 kg.",
      "menor que 3,08 kg."
    ]
  },
  {
    "lead": "¿Cuál fue la mayor cantidad de puntos anotados por ese equipo, en al menos un partido de ese campeonato?",
    "options": [
      "110",
      "121",
      "137"
    ]
  },
  {
    "lead": "Con certeza, ¿cuál fue la cantidad de puntos anotados por ese equipo, en al menos dos partidos de ese campeonato?",
    "options": [
      "86",
      "99",
      "108"
    ]
  },
  {
    "lead": "Considere la siguiente tabla en la que se presentan algunas medidas de posición referentes a la edad, en meses cumplidos, a la que aprendieron a caminar un grupo de niñas:",
    "options": [
      "menor edad a la que aprendió a caminar una niña fue 9 meses.",
      "mayor edad a la que aprendió a caminar una niña fue 11 meses.",
      "mayoría de las niñas aprendió a caminar a la edad de 10 meses."
    ],
    "pre": "<div class=\"table-wrap\"><table class=\"exam-table\"><tr><th>Medida de posición</th><th>Valor</th></tr><tr><td>Mínimo</td><td>9</td></tr><tr><td>Máximo</td><td>15</td></tr><tr><td>Moda</td><td>10</td></tr><tr><td>Mediana</td><td>11</td></tr></table></div>",
    "ask": "De acuerdo con la información anterior, con certeza se cumple que la"
  }
];
const SHARED={
  "12": {
    "lead": "Para responder los ítems 12 y 13 considere la siguiente información:",
    "pre": "La siguiente representación gráfica corresponde a la rapidez “R(x)”, en kilómetros por hora a la cual viajó un helicóptero, en función del tiempo “x” en minutos, transcurrido desde el inicio de un viaje, con 0 &lt; x ≤ 90:",
    "fig": "12"
  },
  "33": {
    "lead": "Para responder los ítems 33 y 34 considere la siguiente información:",
    "pre": "En la siguiente tabla se presentan algunas medidas de posición referentes a la cantidad de puntos anotados, en cada partido, por un equipo de baloncesto durante un campeonato:<div class=\"table-wrap\"><table class=\"exam-table\"><tr><th>Medida de posición</th><th>Valor</th></tr><tr><td>Mínimo</td><td>86</td></tr><tr><td>Máximo</td><td>137</td></tr><tr><td>Moda</td><td>108</td></tr><tr><td>Primer cuartil</td><td>99</td></tr><tr><td>Mediana</td><td>110</td></tr><tr><td>Tercer cuartil</td><td>121</td></tr></table></div>"
  }
};
if(QUESTIONS.length!==35||QUESTIONS.some(q=>q.options.length!==3))throw Error("Transcripción incompleta");
