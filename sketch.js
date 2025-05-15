function setup() {
  createCanvas(400, 400);
}

let olhoX
let olhoY

function draw() {
  background('#1D5C8D')
  fill('#F5EFF0')
  circle(200, 200, 300);
  fill('#FFFAFA')
  circle(150, 150, 60);
  circle(250, 150, 60);
  line(139, 268, 291, 265);
  triangle(202, 184, 257, 224, 242, 223)
 
  //boca
  fill('rgb(228,44,44)');
  stroke('#633142')
  strokeWeight(9)
  line(134,265,290,261)
  
  
  //pupila
  fill('#000000')
 //ciecle(150, 150, 10)circle(150, 150, 10)//olho esquerdo
  //circle(150, 150, 10)circle(250, 150, 10)//olho direito
  
  
  olhoX = map(mouseX,0,400,125,170)
  olhoY = map(mouseY,0,400,125,170)
  
  circle(olhoX,olhoY, 10)
  circle(olhoX+100,olhoY, 10)
  
  line(230, 51, 160, 14)
  line(205, 51, 134 ,24)
  
  if(mouseIsPressed){
   console.log(mouseX,mouseY);
     }
}