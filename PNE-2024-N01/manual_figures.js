// Figuras SVG redibujadas y cotejadas con el documento Nocturna 2024-N01.
const ink='#101820';
const L=(a,b,c,d,dash=false)=>`<line x1="${a}" y1="${b}" x2="${c}" y2="${d}" ${dash?'stroke-dasharray="3 3" stroke-width="1"':''}/>`;
const T=(x,y,s,anchor='middle',size=18)=>`<text x="${x}" y="${y}" text-anchor="${anchor}" fill="${ink}" stroke="none" font-family="Arial,sans-serif" font-size="${size}">${s}</text>`;
const P=(x,y)=>`<circle cx="${x}" cy="${y}" r="3.5" fill="${ink}" stroke="none"/>`;
const O=(x,y)=>`<circle cx="${x}" cy="${y}" r="3.5" fill="white"/>`;
const path=d=>`<path d="${d}"/>`,rect=(x,y,w,h)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}"/>`;
function S(body,w=500,h=300,label='Representación gráfica'){return `<svg class="hand-figure" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}"><g fill="none" stroke="${ink}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${body}</g></svg>`;}
function axes(ox,oy,ex,ty,x='x',y='y'){return L(ox-30,oy,ex,oy)+L(ox,oy+22,ox,ty)+path(`M ${ex-6} ${oy-3} L ${ex} ${oy} L ${ex-6} ${oy+3} M ${ox-3} ${ty+6} L ${ox} ${ty} L ${ox+3} ${ty+6}`)+T(ex+8,oy+5,x,'start')+T(ox,ty-12,y,'start');}
const FIGURES={};
function circle(cx,cy,r,scale,label,extra=''){const ox=65,oy=280,X=x=>ox+x*scale,Y=y=>oy-y*scale;return S(axes(ox,oy,430,25,'x (este)','y (norte)')+`<circle cx="${X(cx)}" cy="${Y(cy)}" r="${r*scale}"/>`+L(ox,Y(cy),X(cx),Y(cy),true)+L(X(cx),Y(cy),X(cx),oy,true)+P(X(cx),Y(cy))+T(X(cx)+10,Y(cy)-8,label,'start')+T(55,Y(cy)+6,cy,'end')+T(X(cx),303,cx)+extra,520,355,'Circunferencia de centro ('+cx+','+cy+') y radio '+r);}

FIGURES['4']=circle(40,30,15,4,'A',T(53,303,'P'));
FIGURES['25']=circle(10,15,4,12,'S',L(233,100,233,280,true)+P(233,100)+T(233,303,'14')+T(53,303,'G'));
FIGURES['37']=circle(15,10,4,12,'S',L(65,112,245,112,true)+P(245,112)+T(55,118,'14','end')+T(53,303,'G'));
FIGURES['51']=circle(15,10,8,12,'S',L(341,160,341,280,true)+P(341,160)+T(341,303,'23')+T(53,303,'G'));
FIGURES['59']=circle(10,5,5,18,'T',L(65,100,245,100,true)+P(245,100)+T(55,106,'10','end')+T(53,303,'L'));
FIGURES['82']=circle(80,70,30,2,'',L(65,80,225,80,true)+L(65,200,225,200,true)+P(225,80)+P(225,200)+T(55,86,'100','end')+T(55,206,'40','end'));
FIGURES['118']=circle(8,3,3,25,'',L(65,130,265,130,true)+P(265,130)+T(55,136,'6','end'));
FIGURES['144']=S(rect(105,115,240,120)+path('M 105 115 L 225 55 L 345 115')+L(75,115,75,235)+L(60,115,105,115,true)+L(60,235,105,235,true)+L(375,55,375,235)+L(225,55,385,55,true)+L(345,235,385,235,true)+L(105,260,345,260,true)+T(63,180,'4 m','end')+T(388,152,'6 m','start')+T(225,284,'8 m'),460,320,'Fachada: rectángulo de 8 por 4 m, triángulo de base 8 m y altura 2 m');
function grid(ox,oy,step,nx,ny){return Array.from({length:nx+1},(_,i)=>L(ox+i*step,oy-ny*step,ox+i*step,oy,true)).join('')+Array.from({length:ny+1},(_,i)=>L(ox,oy-i*step,ox+nx*step,oy-i*step,true)).join('');}
FIGURES['170']=S(axes(55,265,270,35)+grid(55,265,45,4,5)+path('M 55 130 L 145 85 L 235 130 L 145 265 Z')+[[55,130],[145,85],[235,130],[145,265]].map(([x,y])=>P(x,y)).join('')+rect(300,105,240,100)+T(314,132,'La medida del lado de','start',17)+T(314,158,'cada cuadrado de la','start',17)+T(314,184,'cuadrícula es 10 cm.','start',17),560,320,'Papalote con diagonales horizontal y vertical de 40 cm');
FIGURES['196']=S(axes(55,325,350,30)+grid(55,325,40,6,7)+path('M 95 285 L 95 125 Q 175 45 255 125 L 255 205 L 175 205 L 175 285 Z')+rect(370,140,150,130)+T(382,165,'La medida del','start',17)+T(382,188,'lado de cada','start',17)+T(382,211,'cuadrado de la','start',17)+T(382,234,'cuadrícula es','start',17)+T(382,257,'10 m.','start',17),545,365,'Terreno en cuadrícula: bordes rectos 120 m y arco de unos 46 m');
FIGURES['236']=S(path('M 110 75 C 35 205 110 295 205 285 C 300 275 350 170 290 75')+`<ellipse cx="200" cy="75" rx="90" ry="18"/>`+L(110,75,200,165,true)+L(200,75,200,165,true)+L(110,75,200,75,true)+P(200,75)+P(200,165)+P(110,75),420,315,'Lámpara esférica: corte circular con radio de la esfera 20 cm y distancia entre centros 12 cm');
FIGURES['257']=S(axes(65,270,445,35,'x','v(x)')+path('M 65 270 L 120 90 L 230 90 L 285 180 L 340 180 L 395 270')+[[120,90,50],[230,90,150],[285,180,200],[340,180,250],[395,270,300]].map(([x,y,n])=>L(x,y,x,270,true)+P(x,y)+T(x,293,n)).join('')+L(65,90,230,90,true)+L(65,180,340,180,true)+O(65,270)+T(55,96,'600','end')+T(55,186,'300','end')+T(20,155,'R')+T(265,335,'T'),490,355,'Rapidez del avión: (0,0) abierto, (50,600), (150,600), (200,300), (250,300), (300,0)');
function lineGraph(points,maxx,maxy,label='f'){let X=x=>65+x/maxx*300,Y=y=>270-y/maxy*190;return S(axes(65,270,420,35)+L(X(points[0][0]),Y(points[0][1]),X(points[1][0]),Y(points[1][1]))+points.map(([x,y])=>L(65,Y(y),X(x),Y(y),true)+L(X(x),Y(y),X(x),270,true)+P(X(x),Y(y))+T(55,Y(y)+6,y,'end')+T(X(x),293,x)).join('')+T(230,160,label),460,330,'Segmento de '+label+' entre '+points.map(x=>'('+x.join(',')+')').join(' y '));}
FIGURES['318']=lineGraph([[15,30],[35,70]],40,80);
FIGURES['330']=lineGraph([[15,30],[70,35]],80,40,'f⁻¹');
FIGURES['339']=lineGraph([[30,15],[70,35]],80,80,'f⁻¹');
FIGURES['348']=lineGraph([[30,15],[35,70]],40,80,'f⁻¹');
FIGURES['355']=S(axes(65,270,420,35,'x','t(x)')+path('M 65 270 L 215 80 L 365 80')+L(65,80,215,80,true)+L(215,80,215,270,true)+L(365,80,365,270,true)+P(65,270)+P(215,80)+P(365,80)+T(55,86,'120','end')+T(215,293,'2')+T(365,293,'4')+T(20,160,'M')+T(250,330,'T'),460,355,'Horno: aumenta de (0,0) a (2,120), luego permanece en 120 hasta 4 minutos');
function parabola(mid,end,height,variable,label){return S(axes(70,260,435,35,variable,label)+path('M 70 260 Q 235 -120 400 260')+L(70,70,235,70,true)+L(235,70,235,260,true)+P(235,70)+P(400,260)+O(70,260)+T(61,76,height,'end')+T(235,283,mid)+T(400,283,end)+T(329,153,'h'),475,310,'Parábola con máximo en ('+mid+','+height+')');}
FIGURES['429']=parabola(2,4,30,'t','h(t)');

FIGURES['567']=S(L(35,270,440,270)+path('M 65 270 C 120 270 170 260 205 200 C 235 140 245 45 285 45 C 325 45 365 150 405 270')+L(270,61,270,270,true)+T(270,300,'60 s'),480,335,'Distribución con cola a la izquierda y mediana 60 segundos');
function drawFigure(id){if(!FIGURES[id])throw Error('Falta figura '+id);return FIGURES[id];}
