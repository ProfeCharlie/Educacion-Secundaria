const QUESTIONS=[
  {
    "lead": "Un lago artificial, ubicado en un complejo turístico, tiene forma circular. El centro de la superficie de ese lago está ubicado en el punto correspondiente a (14,5), cuyas unidades están en metros, con respecto a la ubicación J de la entrada principal del complejo, el cual se considera como el origen. Además, la medida del radio de la circunferencia que representa el borde de esa superficie es 7 m. De acuerdo con la información anterior, con respecto a J, ¿cuál es la representación algebraica, cuyas unidades están en metros, de la circunferencia correspondiente al borde de la superficie de ese lago?",
    "options": [
      "(x−14)<sup>2</sup> + (y−5)<sup>2</sup> = 49",
      "(x+14)<sup>2</sup> + (y+5)<sup>2</sup> = 49",
      "(x−14)<sup>2</sup> + (y−5)<sup>2</sup> = 7"
    ]
  },
  {
    "lead": "En un terreno se construyó un estanque para peces, cuya superficie tiene forma circular. La medida del radio de la circunferencia que representa el borde de la superficie de ese estanque es 8 m. La ubicación M del centro de esa superficie corresponde a 20 m al norte y 10 m al este de la ubicación Q de una casa. ¿Cuál de las siguientes opciones corresponde a la representación gráfica, cuyas unidades están en metros, de la circunferencia que representa el borde de la superficie de ese estanque?",
    "options": [
      "<span data-fig=\"2A\"></span>",
      "<span data-fig=\"2B\"></span>",
      "<span data-fig=\"2C\"></span>"
    ]
  },
  {
    "lead": "Un rociador de agua se ubica a 56 m al este y 28 m al norte de la ubicación K correspondiente al centro de un terreno. El chorro de agua que sale del rociador tiene un alcance máximo de 56 m a su alrededor. De acuerdo con la información anterior, si desde su ubicación actual el rociador se traslada 28 m al norte, entonces ¿cuál es la representación gráfica, cuyas unidades están en metros, de la circunferencia correspondiente al alcance máximo del chorro de agua del rociador en la nueva ubicación H?",
    "options": [
      "<span data-fig=\"3A\"></span>",
      "<span data-fig=\"3B\"></span>",
      "<span data-fig=\"3C\"></span>"
    ]
  },
  {
    "lead": "Un juego consiste en lanzar una pequeña bola metálica, desde cierta distancia, a un objetivo circular ubicado en la arena de una playa. La medida del radio de ese objetivo es 6 m. La siguiente representación gráfica, cuyas unidades están en metros, muestra la circunferencia que representa el borde del objetivo:",
    "options": [
      "Lucía",
      "Javier",
      "Gabriela"
    ],
    "fig": "4",
    "ask": "Además, durante el juego:<ul><li>Lucía lanzó una bola y esta se ubicó en el punto correspondiente a (11,12).</li><li>Javier lanzó una bola y esta se ubicó en el punto correspondiente a (15,14).</li><li>Gabriela lanzó una bola y esta se ubicó en el punto correspondiente a (6,17).</li></ul>De acuerdo con la información anterior, ¿cuál de esas personas lanzó la bola que se ubicó en el exterior de ese objetivo?"
  },
  {
    "lead": "En un parque infantil hay una pista de patinaje, un vestidor y una caseta de vigilancia. La pista tiene forma circular, cuya medida del diámetro es 6 m. La siguiente representación gráfica, cuyas unidades están en metros, muestra la ubicación P de la caseta, M del vestidor y C de la circunferencia correspondiente al borde de esa pista:",
    "options": [
      "exterior.",
      "secante.",
      "tangente."
    ],
    "fig": "5",
    "ask": "Además, se desea construir un camino con forma de recta y que pase por la caseta y el vestidor. De acuerdo con la información anterior, la recta que representará ese camino, con respecto a la circunferencia correspondiente al borde de la pista, será"
  },
  {
    "lead": "Ricardo elaborará un adorno con forma de triángulo, a partir de una lámina cuadrada de cartulina. Para ello, Ricardo dibuja un triángulo sobre la lámina y luego lo recortará por el borde. A continuación, se muestra esa lámina y el triángulo ABC que representa el adorno:",
    "options": [
      "igual.",
      "mayor.",
      "menor."
    ],
    "fig": "6",
    "ask": "De acuerdo con la información anterior, el área del adorno que elaborará Ricardo, con respecto al área de la parte de la lámina que sobrará, será"
  },
  {
    "lead": "Marcela es arquitecta y debe diseñar un quiosco y un salón para una comunidad. Para esos diseños se debe tener en cuenta lo siguiente:<ul><li>La forma que tendrá el piso del quiosco corresponde a un pentágono regular.</li><li>La forma que tendrá el piso del salón corresponde a un cuadrado.</li><li>La medida del lado del quiosco es la mitad de la medida del lado del piso del salón.</li></ul>De acuerdo con la información anterior, si el perímetro del piso de ese quiosco debe ser 30 m, entonces ¿cuál será el perímetro del piso del salón que debe diseñar Marcela?",
    "options": [
      "12 m",
      "48 m",
      "60 m"
    ]
  },
  {
    "lead": "Un reloj de pared tiene forma de hexágono regular. Si la medida de un radio del hexágono que representa el reloj es 10 cm, entonces ¿cuál es la medida del perímetro de ese hexágono?",
    "options": [
      "30 cm",
      "60 cm",
      "120 cm"
    ]
  },
  {
    "lead": "La siguiente representación gráfica muestra la forma que tiene el piso de la habitación principal de una casa:",
    "options": [
      "8",
      "10",
      "12"
    ],
    "fig": "9",
    "ask": "De acuerdo con la información anterior, si se requiere colocar cerámica a la totalidad del piso de esa habitación, entonces ¿cuántos metros cuadrados de cerámica se requieren colocar?"
  },
  {
    "lead": "La siguiente representación gráfica corresponde a la forma que tiene el techo de un supermercado:",
    "options": [
      "550 y menor que 650.",
      "650 y menor que 750.",
      "750 y menor que 850."
    ],
    "fig": "10",
    "ask": "De acuerdo con la información anterior, si se requiere pintar la totalidad del techo de ese supermercado, entonces la cantidad de metros cuadrados que se requieren pintar es mayor que"
  },
  {
    "lead": "La siguiente representación gráfica muestra el trapecio que corresponde a la superficie de un escritorio:",
    "options": [
      "240",
      "288",
      "300"
    ],
    "fig": "11",
    "ask": "De acuerdo con la información anterior, si una persona requiere colocar una cinta adhesiva alrededor de todo el borde de la superficie de ese escritorio, entonces ¿cuál es la cantidad mínima de centímetros de cinta que esa persona requiere?"
  },
  {
    "lead": "Una máquina fabrica copas a partir de esferas de vidrio. La medida del radio de cada una de esas esferas es 5 cm. Para elaborar cada copa la máquina le realiza un corte, a cada esfera, para obtener así una sección plana que representa la abertura de la copa. Si el centro de esa sección plana está a 3 cm del centro de cada esfera de vidrio, entonces ¿cuál es la medida del radio de la abertura de cada copa fabricada?",
    "options": [
      "2 cm",
      "4 cm",
      "6 cm"
    ]
  },
  {
    "lead": "Una barra de plástico, con forma de cilindro circular recto, se utilizó para elaborar un par de artesanías. Para ello, a la barra se le realizó un corte oblicuo a sus bases y sin intersecarlas. La sección plana que se obtuvo en cada artesanía, producto del corte realizado a esa barra de plástico, corresponde a",
    "options": [
      "una elipse.",
      "un rectángulo.",
      "una circunferencia."
    ]
  },
  {
    "lead": "Una lámpara se fabricó a partir de una esfera de cerámica, a la cual se le realizó un corte plano para obtener así la abertura de esa lámpara. La medida del radio de la esfera es 25 cm. Además, al momento de realizar ese corte, el centro de la abertura de la lámpara está a 24 cm del centro de la esfera. ¿Cuál es la medida del radio de la abertura de esa lámpara?",
    "options": [
      "1 cm",
      "7 cm",
      "24 cm"
    ]
  },
  {
    "lead": "¿Cuál fue la distancia recorrida por ese ciclista transcurridas 6 h desde que inició ese viaje?",
    "options": [
      "0 km",
      "50 km",
      "70 km"
    ]
  },
  {
    "lead": "Conforme transcurrió el tiempo entre las 2 h y las 4 h, desde que inició ese viaje, la distancia recorrida por ese ciclista fue",
    "options": [
      "disminuyendo.",
      "aumentando.",
      "constante."
    ]
  },
  {
    "lead": "La función v que determina la cantidad de vehículos v(x), en miles, producidos en una fábrica está dada por v(x)=1+2x<sup>3</sup>, donde x representa el tiempo en años transcurridos desde que la fábrica inició labores, con 0 &lt; x ≤ 5. ¿Cuál fue la cantidad de vehículos, en miles, producidos en esa fábrica transcurridos tres años desde que inició labores?",
    "options": [
      "1",
      "55",
      "81"
    ]
  },
  {
    "lead": "La función m que determina la rapidez m(x), en kilómetros por hora, a la que viajó una motocicleta luego de x minutos de haber iniciado un recorrido está dada por m(x)=45+x<sup>3</sup>, con 1 ≤ x ≤ 4. De acuerdo con la información anterior, ¿cuál fue la rapidez en kilómetros por hora de la motocicleta luego de 2 min de haber iniciado ese recorrido?",
    "options": [
      "51",
      "53",
      "54"
    ]
  },
  {
    "lead": "Desde el inicio de ese viaje, ¿cuántos minutos transcurrieron para que el helicóptero alcanzara la mayor rapidez durante todo ese viaje?",
    "options": [
      "15",
      "50",
      "90"
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
    "lead": "La función c que determina la cantidad c(x) de suscriptores que tuvo una plataforma de videos está dada por c(x)=1000x<sup>3</sup>+4000, donde x representa el tiempo en años transcurrido desde su creación, con 0 &lt; x ≤ 3. ¿Cuántos suscriptores tuvo esa plataforma de videos transcurridos dos años después de su creación?",
    "options": [
      "10 000",
      "12 000",
      "13 000"
    ]
  },
  {
    "lead": "El ingreso total mensual, en colones, que obtiene Sofía por la venta de arreglos florales está relacionado linealmente con la cantidad de arreglos que ella vende en cada mes de un año. En la siguiente tabla se muestra la cantidad de arreglos florales vendidos por Sofía y el ingreso total mensual obtenido por ella en cada uno de dos meses de ese año:<div class=\"table-wrap\"><table class=\"exam-table\"><tr><th>Mes</th><th>Cantidad de arreglos</th><th>Ingreso total mensual</th></tr><tr><td>Febrero</td><td>25</td><td>₡700 000</td></tr><tr><td>Agosto</td><td>15</td><td>₡540 000</td></tr></table></div>",
    "options": [
      "y=316 000x",
      "y=300 000x+16 000",
      "y=16 000x+300 000"
    ],
    "ask": "De acuerdo con la información anterior, ¿cuál es la ecuación de la recta que representa el ingreso total mensual y, en colones, obtenido por Sofía, en función de la cantidad x de arreglos vendidos por ella en cada mes de ese año?"
  },
  {
    "lead": "La función h que determina la altura h(x), en metros desde el suelo, de una piedra lanzada verticalmente hacia arriba está dada por h(x)=−2x<sup>2</sup>+15x+10, donde x representa el tiempo en segundos transcurridos desde que la piedra fue lanzada, con 0 &lt; x ≤ 6. De acuerdo con la información anterior, ¿cuál fue la altura en metros desde el suelo alcanzada por la piedra transcurridos 2 s desde que fue lanzada?",
    "options": [
      "8",
      "32",
      "48"
    ]
  },
  {
    "lead": "En cierto lugar el monto que se debe pagar por cada kilómetro recorrido en un taxi es ₡500. Además, se debe pagar ₡700 adicionales, independientemente de la cantidad de kilómetros recorridos en ese taxi. De acuerdo con la información anterior, la ecuación de la recta correspondiente al monto total y en colones por pagar, en función de la distancia x en kilómetros recorridos en ese taxi, es",
    "options": [
      "y=1200x",
      "y=500x+700",
      "y=700x+500"
    ]
  },
  {
    "lead": "En una empresa de camisetas se determina que el costo de fabricar cada camiseta es ₡3000. Además, se debe pagar ₡50 000 mensuales de otros costos, independientemente de la cantidad mensual de camisetas fabricadas. De acuerdo con la información anterior, la ecuación de la recta correspondiente al costo total mensual y en colones que en esa empresa se paga para fabricar camisetas, en función de la cantidad mensual x de camisetas fabricadas, corresponde a",
    "options": [
      "y=53 000x",
      "y=50 000x+3000",
      "y=3000x+50 000"
    ]
  },
  {
    "lead": "La función p que determina la cantidad p(x) de peces de cierta especie que había en una laguna está dada por p(t)=−t<sup>2</sup>+10t+50, donde t representa el tiempo en meses transcurridos a partir del inicio de una observación, con 0 &lt; t ≤ 8. De acuerdo con la información anterior, ¿cuántos meses transcurrieron a partir del inicio de la observación para que en el estanque hubiera la mayor cantidad de peces durante todo ese tiempo?",
    "options": [
      "5",
      "8",
      "75"
    ]
  },
  {
    "lead": "El dueño de un restaurante determina que el costo de preparar cada almuerzo es ₡2750. Además, se debe pagar ₡80 000 mensuales de otros costos, independientemente de la cantidad mensual de almuerzos preparados. De acuerdo con la información anterior, la ecuación de la recta correspondiente al costo total mensual y en colones que el dueño de ese restaurante paga por la preparación de almuerzos, en función de la cantidad mensual x de almuerzos preparados, corresponde a",
    "options": [
      "y=80 000+2750x",
      "y=80 000x+2750",
      "y=82 750x"
    ]
  },
  {
    "lead": "La función k que determina la cantidad de personas k(t) que visitan una feria escolar durante un día está dada por k(t)=−3t<sup>2</sup>+24t+30, donde t representa el tiempo en horas desde el momento en que la feria inició, con 0 &lt; t ≤ 8. De acuerdo con la información anterior, ¿cuál fue la mayor cantidad de personas que visitaron la feria durante todo el tiempo que se realizó la actividad?",
    "options": [
      "174",
      "102",
      "78"
    ]
  },
  {
    "lead": "La función c que determina el monto total mensual c(x), en miles de colones, que se paga en una casa por el consumo de agua está dada por c(x)=5+3x, donde x representa la cantidad de metros cúbicos de agua consumidos en esa casa, con 1 ≤ x ≤ 5. De acuerdo con la información anterior, ¿cuál es la representación gráfica de c?",
    "options": [
      "<span data-fig=\"29A\"></span>",
      "<span data-fig=\"29B\"></span>",
      "<span data-fig=\"29C\"></span>"
    ]
  },
  {
    "lead": "La función q que determina la cantidad q de libros vendidos en una librería está dada por q(t)=−t<sup>2</sup>+4t+10, donde t representa el tiempo en días transcurridos desde el inicio de las ventas, con 1 ≤ t ≤ 5. De acuerdo con la información anterior, ¿cuál fue la cantidad de libros vendidos en esa librería en el día cuatro desde el inicio de las ventas?",
    "options": [
      "5",
      "10",
      "42"
    ]
  },
  {
    "lead": "José Pablo compró, en una tienda de ropa deportiva, cinco pares de medias y una pantaloneta, por los cuales pagó en total ₡27 530. Hugo compró, en la misma tienda, un par de medias y dos pantalonetas, por los cuales pagó en total ₡28 780. Si cada par de medias tiene el mismo precio y cada pantaloneta tiene el mismo precio, entonces ¿cuál es el precio de cada par de medias?",
    "options": [
      "₡2920",
      "₡3332",
      "₡4588"
    ]
  },
  {
    "lead": "El ingreso diario y en colones obtenido por cada una de dos librerías, M y N, está en función de la cantidad diaria x de libros vendidos en cada una de ellas, con 1 ≤ x ≤ 40. El siguiente sistema de ecuaciones modela la información anterior, en el que d y h representan números reales:<div class=\"pre\">Librería M: y=4500x+d<br>Librería N: y=5000+hx</div>De acuerdo con la información anterior, si durante una misma semana ambas librerías vendieron la misma cantidad diaria de libros y obtuvieron el mismo ingreso diario, entonces se cumple que",
    "options": [
      "d=5000, h=5000",
      "d=4500, h=5000",
      "d=5000, h=4500"
    ]
  },
  {
    "lead": "Las empresas W y H cobran a sus respectivos usuarios un monto total en colones por el alquiler de una bicicleta. Ese monto total y se compone de un monto fijo más un monto correspondiente al tiempo x en horas por el que se alquile la bicicleta, con 0 &lt; x ≤ 6. A continuación, se muestra el rótulo de cada una de esas empresas, el cual contiene la ecuación que se utiliza para cobrar a los clientes por el alquiler de la bicicleta:<div class=\"table-wrap\"><table class=\"exam-table\"><tr><th>Empresa W</th><th>Empresa H</th></tr><tr><td>2y−2000x=3000</td><td>y−1000x=1500</td></tr></table></div>",
    "options": [
      "menor al que pagará si la alquilara en H.",
      "mayor al que pagará si la alquilara en H.",
      "igual al que pagará si la alquilara en H."
    ],
    "ask": "De acuerdo con la información anterior, si un usuario alquila una bicicleta por un tiempo determinado, entonces el monto total que pagará en W será"
  },
  {
    "lead": "Jorge compró 3 kg de café y 4 kg de azúcar, por los cuales pagó en total ₡18 000. Elizabeth compró 4 kg de café y 2 kg de azúcar, por los cuales pagó en total ₡19 000. Si cada kilogramo de café tenía el mismo precio y cada kilogramo de azúcar tenía el mismo precio, entonces ¿cuál era el precio que tenía cada kilogramo de café?",
    "options": [
      "₡3400",
      "₡4000",
      "₡8500"
    ]
  },
  {
    "lead": "En la siguiente tabla se presentan algunas medidas de posición referentes al tiempo en minutos que tardó cada día una persona en realizar ejercicio físico durante un mes:<div class=\"table-wrap\"><table class=\"exam-table\"><tr><th>Medida de posición</th><th>Valor</th></tr><tr><td>Mínimo</td><td>50</td></tr><tr><td>Moda</td><td>60</td></tr><tr><td>Máximo</td><td>70</td></tr></table></div>",
    "options": [
      "50 min",
      "60 min",
      "70 min"
    ],
    "ask": "De acuerdo con la información anterior, ¿cuál fue el mayor tiempo que tardó la persona en realizar ejercicio físico en al menos un día de ese mes?"
  },
  {
    "lead": "Si la distribución de los datos correspondientes a las estaturas, en centímetros, de las personas trabajadoras de una oficina presenta una asimetría negativa y la mediana de esos datos es 165 cm, entonces la altura promedio de las personas trabajadoras de esa oficina es",
    "options": [
      "igual que 165 cm.",
      "menor que 165 cm.",
      "mayor que 165 cm."
    ]
  },
  {
    "lead": "Al menos la mitad de las personas integrantes de ese club ahorró una cantidad de dinero menor o igual que",
    "options": [
      "₡820 000",
      "₡900 000",
      "₡915 000"
    ]
  },
  {
    "lead": "¿Cuál es la cantidad de dinero que con mayor frecuencia han ahorrado las personas integrantes de ese club?",
    "options": [
      "₡875 000",
      "₡1 000 000",
      "₡1 200 000"
    ]
  },
  {
    "lead": "Con certeza, ¿cuál de las siguientes opciones corresponde a una cantidad de dinero que es imposible que la haya ahorrado una persona integrante de ese club?",
    "options": [
      "₡950 000",
      "₡800 000",
      "₡1 300 000"
    ]
  },
  {
    "lead": "La siguiente tabla muestra el valor porcentual de cada uno de los tres componentes que se consideraron al calificar proyectos de reciclaje de las personas participantes de un concurso. Asimismo, se muestra la calificación obtenida por componente, en una escala de 1 a 100, del proyecto de reciclaje presentado por Cristian:<div class=\"table-wrap\"><table class=\"exam-table\"><tr><th>Componente</th><th>Porcentaje</th><th>Calificación del proyecto de Cristian</th></tr><tr><td>Innovación</td><td>45 %</td><td>89</td></tr><tr><td>Impacto ambiental</td><td>35 %</td><td>85</td></tr><tr><td>Creatividad</td><td>20 %</td><td>73</td></tr></table></div>",
    "options": [
      "82,33",
      "84,40",
      "85,00"
    ],
    "ask": "Además, la nota final de ese proyecto corresponde a la media aritmética ponderada de los tres componentes evaluados. De acuerdo con la información anterior, ¿cuál es la nota final del proyecto de reciclaje presentado por Cristian en ese concurso?"
  }
];
const SHARED={
  "15": {
    "lead": "La siguiente representación gráfica corresponde a la función d que determina la distancia d(x), en kilómetros, recorrida por un ciclista durante un viaje, en función del tiempo x en horas transcurridas desde que inició ese viaje, con 0 &lt; x ≤ 10:",
    "fig": "15"
  },
  "19": {
    "lead": "La siguiente representación gráfica corresponde a la función r que determina la rapidez r(x), en kilómetros por hora, a la cual viajó un helicóptero, en función del tiempo x en minutos transcurridos desde el inicio de un viaje, con 0 &lt; x ≤ 90:",
    "fig": "19"
  },
  "37": {
    "lead": "En la siguiente tabla se presentan algunas medidas de posición referentes a las cantidades de dinero, en colones, ahorradas por las personas integrantes de un club social:<div class=\"table-wrap\"><table class=\"exam-table\"><tr><th>Medida de posición</th><th>Valor</th></tr><tr><td>Mínimo</td><td>700 000</td></tr><tr><td>Máximo</td><td>1 200 000</td></tr><tr><td>Moda</td><td>875 000</td></tr><tr><td>Mediana</td><td>900 000</td></tr><tr><td>Promedio</td><td>915 000</td></tr><tr><td>Primer cuartil</td><td>820 000</td></tr><tr><td>Tercer cuartil</td><td>1 000 000</td></tr></table></div>"
  }
};