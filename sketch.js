function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  let seconds = second();
  let minutes = minute();
  let hours = hour();

  background("black");

  stroke (32, 46, 15)
  ellipse(200,200, 400, 400);

  noFill();
  stroke (255)
  strokeWeight(5)
translate (width / 2, height / 2);
rotate (-90);
stroke (55, 6, 23)
  let secArc = map(seconds,0,60,0,360);
push();
rotate(secArc);
  line(0, 0, 115, 0);
  pop();
  stroke (8, 28, 21)
  let minArc = map(minutes,0,60,0,360);
push();
rotate(minArc);
  line(0, 0, 85, 0);
pop();
  stroke (183, 183, 164)
  let hArc = map(hours,0,60,0,360);
  push();
  rotate(hArc);
  line(0, 0, 55 , 0);
  pop();
  push();
rotate(90)
strokeWeight(2)
textSize(25);
stroke (55, 6, 23)
  text('12',-15,-160);
  stroke (55, 6, 23)
  text('6',-15,175);
  stroke (55, 6, 23)
  text('3',160,0);
  stroke (55, 6, 23)
  text('9',-175,0);
  stroke (8, 28, 21)
  text('1',80,-140);
  stroke (183, 183, 164)
  text('2',140,-80);
  stroke (8, 28, 21)
  text('7',-95,155);
  stroke (183, 183, 164)
  text('8',-155,95);
  stroke (8, 28, 21)
  text('4',140,80);
  stroke (183, 183, 164)
  text('5',80,150);
  stroke (8, 28, 21)
  text('10',-155,-95);
  stroke (183, 183, 164)
  text('1 1',-95,-150);
  stroke (55, 6, 23)
  text('𝔃𝓼𝓱𝓪𝓭𝓮𝔁',-50,-30);
  pop();
}