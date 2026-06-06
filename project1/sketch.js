function setup() {
  createCanvas(600, 400);
  background(15, 50, 30);
  // 도로
  fill(60, 55, 60);
  rect(0, 280, 600, 120);
  stroke(240, 205, 120, 180);
  strokeWeight(4);
  line(65, 345, 145, 345);
  line(180, 345, 260, 345);
  line(295, 345, 375, 345);
  line(410, 345, 490, 345);
  // 달
  noStroke();
  fill(210, 185, 120, 190);
  ellipse(500, 90, 100, 100);
  fill(255, 240, 210, 45);
  ellipse(480, 75, 55, 55);
  fill(90, 95, 110, 50);
  ellipse(505, 120, 125, 30);
  
  // 드론들
  fill(180, 180, 190);
  ellipse(120, 95, 45, 20);
  fill(90, 90, 100);
  ellipse(105, 95, 10, 10);
  ellipse(135, 95, 10, 10);
  stroke(230);
  strokeWeight(2);
  line(100, 90, 80, 80);
  line(140, 90, 160, 80);
  line(80, 80, 65, 85);
  line(160, 80, 175, 85);
  noStroke();
  fill(255, 95, 95);
  fill(180, 180, 190);
  ellipse(360, 75, 45, 20);
  fill(90, 90, 100);
  ellipse(345, 75, 10, 10);
  ellipse(375, 75, 10, 10);
  stroke(230);
  line(340, 70, 320, 60);
  line(380, 70, 400, 60);
  line(320, 60, 305, 65);
  line(400, 60, 415, 65);
  noStroke();
  fill(255, 95, 95);
  fill(180, 180, 190);
  ellipse(525, 115, 45, 20);
  fill(90, 90, 100);
  ellipse(510, 115, 10, 10);
  ellipse(540, 115, 10, 10);
  stroke(230);
  line(505, 110, 485, 100);
  line(545, 110, 565, 100);
  line(485, 100, 470, 105);
  line(565, 100, 580, 105);
  noStroke();
  fill(255, 95, 95);
  // 레이저
  strokeWeight(5);
  stroke(255, 70, 70);
  line(120, 100, 225, 205);
  stroke(255, 210, 60);
  line(360, 80, 300, 195);
  stroke(40, 230, 255);
  line(525, 120, 305, 205);
  
  // 드론 그림자
  noStroke();
  fill(20, 20, 30, 210);
  ellipse(110, 300, 190, 50);
  ellipse(325, 310, 225, 55);
  ellipse(520, 300, 175, 45);
  
  // 폭발
  fill(255, 120, 70, 150);
  ellipse(265, 220, 85, 85);
  fill(255, 190, 85, 170);
  ellipse(265, 220, 50, 50);
  fill(255, 245, 190, 210);
  ellipse(265, 220, 20, 20);
  // 별들
  noStroke();
  fill(255, 255, 255, 220);
  ellipse(45, 50, 5, 5);
  ellipse(175, 35, 5, 5);
  ellipse(430, 40, 5, 5);
  ellipse(565, 60, 5, 5);
}
function draw() {}
