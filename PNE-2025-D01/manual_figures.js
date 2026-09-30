// Figuras dibujadas a mano con coordenadas SVG. No se insertan recursos del PDF.
const ink='#101820';
function S(body,w=600,h=350,label='Representación gráfica'){
 return `<svg class="hand-figure" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}"><g fill="none" stroke="${ink}" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">${body}</g></svg>`;
}
const L=(x1,y1,x2,y2,dash=false)=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" ${dash?'stroke-dasharray="4 4" stroke-width="1.2"':''}/>`;
const T=(x,y,s,anchor='middle',size=18)=>`<text x="${x}" y="${y}" text-anchor="${anchor}" fill="${ink}" stroke="none" font-family="Arial,sans-serif" font-size="${size}">${s}</text>`;
const P=(x,y)=>`<circle cx="${x}" cy="${y}" r="4.2" fill="${ink}"/>`;
const O=(x,y)=>`<circle cx="${x}" cy="${y}" r="4.2" fill="white"/>`;
const A=(x=70,y=290,xmax=550,ymin=28,xx='x',yy='y')=>L(30,y,xmax,y)+L(x,y+27,x,ymin)+`<path d="M${xmax-10} ${y-5}l10 5-10 5M${x-5} ${ymin+10}l5-10 5 10" fill="${ink}"/>`+T(xmax+8,y+6,xx,'start')+T(x,ymin-7,yy);
function circlePlot({cx=210,cy=145,r=55,xlab='12',ylab='18',cLabel='Q',origin='P',xName='x (este)',yName='y (norte)',extra=''}) {
 return S(A(70,275,525,25,xName,yName)+`<circle cx="${cx}" cy="${cy}" r="${r}"/>`+L(70,cy,cx,cy,true)+L(cx,cy,cx,275,true)+P(70,275)+P(cx,cy)+T(65,298,origin,'end')+T(cx,299,xlab)+T(57,cy+5,ylab,'end')+T(cx+12,cy-10,cLabel,'start')+extra,560,365);
}
function table(headers,rows){return `<table class="question-table"><thead><tr>${headers.map(v=>`<th>${v}</th>`).join('')}</tr></thead><tbody>${rows.map(row=>`<tr>${row.map(v=>`<td>${v}</td>`).join('')}</tr>`).join('')}</tbody></table>`}
const FIGURES={
 '1':()=>circlePlot({cx:190,cy:145,r:55,xlab:'12',ylab:'18',extra:T(253,120,'C')}),
 '2A':()=>circlePlot({cx:155,cy:130,r:78,xlab:'5',ylab:'10',cLabel:'D',origin:'E',extra:P(233,130)+L(233,130,233,275,true)+T(233,298,'13')}),
 '2B':()=>circlePlot({cx:190,cy:170,r:50,xlab:'10',ylab:'5',cLabel:'D',origin:'E',extra:P(190,120)+L(70,120,190,120,true)+T(58,125,'9','end')}),
 '2C':()=>circlePlot({cx:150,cy:145,r:50,xlab:'5',ylab:'10',cLabel:'D',origin:'E',extra:P(200,145)+L(200,145,200,275,true)+T(200,298,'9')}),
 '3':()=>circlePlot({cx:270,cy:155,r:55,xlab:'20',ylab:'5',cLabel:'R',origin:'S',extra:P(270,100)+P(270,210)+L(70,100,270,100,true)+T(57,104,'10','end')+T(340,135,'C')}),
 '3A':()=>circlePlot({cx:220,cy:155,r:55,xlab:'15',ylab:'5',cLabel:'W',origin:'S',extra:P(220,100)+P(220,210)+L(70,100,220,100,true)+T(57,104,'10','end')}),
 '3B':()=>circlePlot({cx:270,cy:275,r:55,xlab:'20',ylab:'0',cLabel:'W',origin:'S',extra:P(270,220)+L(70,220,270,220,true)+T(57,225,'5','end')}),
 '3C':()=>circlePlot({cx:270,cy:155,r:55,xlab:'20',ylab:'10',cLabel:'W',origin:'S',extra:P(270,210)+L(70,210,270,210,true)+T(57,215,'5','end')}),
 '4':()=>S(A(90,280,520,12)+`<circle cx="220" cy="150" r="130"/>`+L(90,150,350,150,true)+L(220,150,220,280,true)+L(90,20,220,20,true)+L(350,150,350,280,true)+[P(90,150),P(220,280),P(350,150),P(220,20)].join('')+T(78,25,'122','end')+T(350,304,'122'),560,325),
 '5':()=>S(A(90,295,540,22)+L(50,105,500,105)+`<path d="M50 105l12-7v14ZM500 105l-12-7v14Z" fill="${ink}"/><circle cx="235" cy="155" r="50"/>`+L(90,155,235,155,true)+L(235,105,235,295,true)+L(355,105,355,295,true)+P(90,105)+P(235,105)+P(235,155)+P(355,105)+T(76,109,'30','end')+T(76,160,'20','end')+T(235,320,'24')+T(355,320,'48')+T(235,92,'Q')+T(355,92,'P')+T(299,160,'C')+T(508,112,'n','start'),570,335),
 '6':()=>S(`<path d="M170 25H250V105L290 175 250 245V325H170V245L130 175 170 105Z"/>`+L(170,105,250,105)+L(170,245,250,245)+T(210,18,'4 m'),420,345,'Hexágono regular con un cuadrado arriba y otro abajo'),
 '7':()=>S(`<rect x="12" y="18" width="576" height="280"/>`+L(300,18,300,298)+L(12,84,588,84)+T(156,62,'Espejos separados')+T(445,62,'Espejos juntos')+`<polygon points="90,150 115,108 165,108 190,150 165,192 115,192"/><polygon points="210,150 235,108 285,108 310,150 285,192 235,192"/><polygon points="390,140 415,98 465,98 490,140 465,182 415,182"/><polygon points="465,182 490,140 540,140 565,182 540,224 490,224"/>`,600,315,'Dos hexágonos separados y dos hexágonos con un lado común'),
 '8':()=>S(A(70,310,550,20)+`<polyline points="90,270 180,175 180,80 300,80 480,270 90,270"/>`+L(70,80,180,80,true)+L(70,175,180,175,true)+L(70,270,90,270,true)+[90,180,300,480].map(x=>L(x,270,x,310,true)).join('')+[['D',90,270],['E',180,175],['A',180,80],['B',300,80],['C',480,270]].map(([n,x,y])=>P(x,y)+T(x+(n==='A'?-12:12),y-9,n)).join('')+T(90,334,'1')+T(180,334,'4')+T(300,334,'8')+T(480,334,'14')+T(57,85,'9','end')+T(57,180,'5','end')+T(57,275,'1','end'),580,355),
 '9':()=>S(A(70,310,535,20)+`<path d="M145 230V100 Q205 100 225 30H375V170 Q455 185 455 230H145Z"/>`+L(70,30,225,30,true)+L(70,100,145,100,true)+L(70,170,375,170,true)+L(70,230,145,230,true)+[145,225,375,455].map(x=>L(x,230,x,310,true)).join('')+[['F',145,100],['A',225,30],['B',375,30],['C',375,170],['D',455,230],['E',145,230]].map(([n,x,y])=>P(x,y)+T(x+(n==='E'?-13:13),y-9,n)).join('')+[2,4,8,10].map((n,i)=>T([145,225,375,455][i],335,n)).join('')+[2,4,6,8].map((n,i)=>T(57,[230,170,100,30][i]+5,n,'end')).join(''),570,355),
 '12':()=>S(`<path d="M128 55C70 125 70 225 128 290M372 55C430 125 430 225 372 290"/><ellipse cx="250" cy="55" rx="122" ry="27"/><ellipse cx="250" cy="290" rx="122" ry="27" fill="#aaa"/>`,500,330,'Recipiente esférico truncado con base y abertura circulares'),
 'context13':()=>S(A(90,300,550,25,'x','t(x)')+`<polyline points="90,235 160,235 230,300 300,55 370,170 440,115"/>`+[ [90,235],[160,235],[230,300],[300,55],[370,170],[440,115] ].map(([x,y])=>P(x,y)).join('')+[160,230,300,370,440].map((x,i)=>L(x,[235,300,55,170,115][i],x,300,true)+T(x,323,[12,24,36,48,60][i])).join('')+[ [235,12],[170,24],[115,36],[55,48] ].map(([y,v])=>L(90,y,440,y,true)+T(78,y+5,v,'end')).join('')+T(255,345,'Tiempo')+T(30,175,'Temperatura'),580,355),
 '20':()=>S(A(90,300,540,25,'x','n(x)')+`<polyline points="90,120 180,190 270,70 450,260"/>`+[[90,120],[180,190],[270,70],[450,260]].map(([x,y])=>P(x,y)).join('')+[180,270,450].map((x,i)=>L(x,[190,70,260][i],x,300,true)+T(x,324,[2,4,8][i])).join('')+[[260,2],[190,4],[120,6],[70,8]].map(([y,v])=>T(78,y+6,v,'end')).join('')+T(265,345,'Tiempo')+T(35,180,'Altura'),570,355),
 '22':()=>S(A(90,300,550,25,'x','r(x)')+`<path d="M130 220 Q180 145 225 140T330 90T450 45"/>`+[[130,220],[225,140],[330,90],[450,45]].map(([x,y])=>P(x,y)).join('')+[130,225,330,450].map((x,i)=>L(x,[220,140,90,45][i],x,300,true)+T(x,324,[4,9,16,25][i])).join('')+[[220,8],[140,12],[90,16],[45,20]].map(([y,v])=>L(90,y,450,y,true)+T(78,y+5,v,'end')).join('')+T(275,345,'Tiempo')+T(40,180,'Rapidez'),580,355),
 '23':()=>S(A(90,300,550,25,'x','p(x)')+`<path d="M90 195 Q270 -55 450 195"/>`+O(90,195)+P(270,70)+P(450,195)+L(90,70,270,70,true)+L(90,195,450,195,true)+L(270,70,270,300,true)+L(450,195,450,300,true)+T(78,75,'34','end')+T(78,200,'18','end')+T(270,325,'4')+T(450,325,'8')+T(280,345,'Tiempo')+T(40,175,'Precio'),580,355),
 '28':()=>S(A(90,300,540,25,'x','t(x)')+`<path d="M90 45Q270 425 450 45"/>`+P(90,45)+P(270,235)+P(450,45)+L(90,45,450,45,true)+L(90,235,270,235,true)+L(270,235,270,300,true)+L(450,45,450,300,true)+T(78,50,'210','end')+T(78,240,'70','end')+T(270,325,'10')+T(450,325,'20'),570,350),
 '33':()=>table(['t','0','1','2','4','8'],[['g(t)','0','74','148','296','592']]),
 '34':()=>S(A(90,300,540,25,'x','b(x)')+`<path d="M90 45Q165 160 220 185T350 255T480 280"/>`+[[90,45],[220,185],[350,255],[480,280]].map(([x,y])=>P(x,y)).join('')+[220,350,480].map((x,i)=>L(x,[185,255,280][i],x,300,true)+T(x,325,i+1)).join('')+[[45,64],[185,32],[255,16],[280,8]].map(([y,v])=>L(90,y,480,y,true)+T(78,y+5,v,'end')).join('')+T(270,348,'Tiempo')+T(37,180,'Volumen'),570,360),
 '35':()=>table(['x','0','10','20','30','40'],[['k(x)','11','20','38','65','101']]),
 'context36':()=>table(['Medida de posición','Valor'],[['Mínimo','5000'],['Máximo','40 000'],['Moda','10 000'],['Mediana','15 000'],['Promedio','20 000'],['Primer cuartil','10 000'],['Tercer cuartil','25 000']]),
 '39':()=>S(L(40,295,550,295)+`<path d="M95 295C125 190 160 45 210 40C265 45 310 260 455 288Q490 294 525 295"/>`+L(210,40,210,295,true)+L(265,90,265,295,true)+T(210,323,'90')+T(265,323,'110'),580,340,'Distribución con sesgo a la derecha, moda 90 y mediana 110'),
 '40':()=>table(['Cantidad de páginas leídas','Número de participantes'],[['De 0 a menos de 10','6'],['De 10 a menos de 20','12'],['De 20 a 30','7'],['Total','25']])
};
function inverseOption(which){
 let body=A(145,which==='B'?55:which==='C'?225:205,360,15);
 if(which==='A')body+=`<path d="M70 50Q95 140 145 170"/>`+P(70,50)+P(110,125)+O(145,170)+L(70,50,145,50,true)+L(110,125,145,125,true)+L(70,50,70,205,true)+L(110,125,110,205,true)+T(70,225,'−2')+T(110,225,'−1')+T(135,55,'4','end')+T(135,130,'2','end')+T(160,172,'1','start');
 if(which==='B')body+=`<path d="M145 100Q200 135 260 245"/>`+O(145,100)+P(200,155)+P(260,245)+L(200,55,200,155,true)+L(260,55,260,245,true)+L(145,245,260,245,true)+T(200,78,'1')+T(260,78,'2')+T(135,105,'−1','end')+T(135,160,'−2','end')+T(135,250,'−4','end');
 if(which==='C')body+=`<path d="M185 225Q225 130 310 100"/>`+O(185,225)+P(235,145)+P(310,100)+L(235,145,235,225,true)+L(310,100,310,225,true)+L(145,145,235,145,true)+L(145,100,310,100,true)+T(185,245,'1')+T(235,245,'2')+T(310,245,'4')+T(135,150,'1','end')+T(135,105,'2','end');
 return S(body,390,270);
}
FIGURES['17']=()=>S(A(90,285,400,20)+`<path d="M90 210Q155 165 220 65"/>`+O(90,210)+P(155,165)+P(220,65)+L(90,65,220,65,true)+L(90,165,155,165,true)+L(155,165,155,285,true)+L(220,65,220,285,true)+T(75,215,'1','end')+T(75,170,'2','end')+T(75,70,'4','end')+T(155,310,'1')+T(220,310,'2')+T(160,140,'m'),440,330);
for(const a of ['A','B','C'])FIGURES['17'+a]=()=>inverseOption(a);
function drawFigure(id){return FIGURES[id]?.()||''}
