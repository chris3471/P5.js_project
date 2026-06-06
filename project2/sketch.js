function setup() {
  createCanvas(600, 400);
  background(240, 244, 248);

  // 목
  fill(242, 201, 154);
  noStroke();
  rect(271, 268, 58, 52, 4);
  // 셔츠
  fill(74, 144, 217);
  noStroke();
  rect(160, 305, 280, 80, 10);
  fill(255);
  triangle(271, 308, 238, 345, 271, 332);
  triangle(329, 308, 362, 345, 329, 332);
  fill(48, 112, 184);
  circle(300, 350, 8);
  circle(300, 366, 8);
  // 왼팔
  stroke(242, 201, 154);
  strokeWeight(10);
  line(195, 320, 160, 345);
  // 오른팔 (기본)
  stroke(242, 201, 154);
  strokeWeight(10);
  line(405, 320, 440, 345);
  // 귀
  fill(242, 201, 154);
  stroke(219, 168, 120);
  strokeWeight(1);
  ellipse(214, 210, 22, 34);
  ellipse(386, 210, 22, 34);
  fill(232, 184, 132);
  noStroke();
  ellipse(214, 210, 12, 22);
  ellipse(386, 210, 12, 22);
  // 얼굴
  fill(242, 201, 154);
  noStroke();
  ellipse(300, 205, 172, 196);
  // 비니 본체
  fill(58, 58, 58);
  noStroke();
  triangle(210, 168, 300, 62, 390, 168);
  arc(300, 168, 180, 50, PI, TWO_PI);
  // 비니 밑단
  fill(42, 42, 42);
  noStroke();
  rect(210, 155, 180, 20, 3);
  stroke(68, 68, 68);
  strokeWeight(1.2);
  line(215, 160, 385, 160);
  line(215, 166, 385, 166);
  line(215, 172, 385, 172);
  // 눈썹
  stroke(26, 26, 26);
  strokeWeight(3);
  noFill();
  arc(270, 178, 34, 16, PI + 0.4, TWO_PI - 0.5);
  arc(330, 178, 34, 16, PI + 0.5, TWO_PI - 0.4);
  // 눈
  fill(255);
  noStroke();
  ellipse(270, 200, 40, 20);
  ellipse(330, 200, 40, 20);
  fill(46, 26, 14);
  ellipse(270, 200, 20, 18);
  ellipse(330, 200, 20, 18);
  fill(13, 5, 0);
  circle(270, 200, 11);
  circle(330, 200, 11);
  fill(255);
  circle(274, 197, 4);
  circle(334, 197, 4);
  // 코
  fill(219, 168, 120);
  noStroke();
  ellipse(300, 228, 18, 10);
  stroke(200, 144, 106);
  strokeWeight(1.2);
  noFill();
  arc(300, 224, 20, 20, 0, PI);
  // 입
  stroke(176, 112, 80);
  strokeWeight(2.2);
  noFill();
  arc(300, 250, 50, 24, 0, PI);
}
function draw() {}
