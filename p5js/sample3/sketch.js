let x = 0;
let y = 0;
let eyeMove = 0;
let cheek = 0;
let wink = false;
let magicOn = false;
let jumpY = 0;
let vy = 0;
let jumping = false;
let floatY = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(240, 244, 248);

  floatY = sin(frameCount * 0.08) * 2;
  if (mouseIsPressed) {
    wink = true;
    magicOn = true;
    cheek = 25;
  } else {
    wink = false;
    magicOn = false;
  }
  if (mouseX < 280 + x) {
    eyeMove = -2.5;
  } else if (mouseX > 320 + x) {
    eyeMove = 2.5;
  } else {
    eyeMove = 0;
  }
  if (jumping) {
    jumpY += vy;
    vy += 0.6;
    if (jumpY >= 0) {
      jumpY = 0;
      vy = 0;
      jumping = false;
    }
  }
  // 목
  fill(242, 201, 154);
  noStroke();
  rect(271 + x, 268 + y + jumpY + floatY, 58, 52, 4);
  // 셔츠
  fill(74, 144, 217);
  noStroke();
  rect(160 + x, 305 + y + jumpY + floatY, 280, 80, 10);
  fill(255);
  triangle(271 + x, 308 + y + jumpY + floatY, 238 + x, 345 + y + jumpY + floatY, 271 + x, 332 + y + jumpY + floatY);
  triangle(329 + x, 308 + y + jumpY + floatY, 362 + x, 345 + y + jumpY + floatY, 329 + x, 332 + y + jumpY + floatY);
  fill(48, 112, 184);
  circle(300 + x, 350 + y + jumpY + floatY, 8);
  circle(300 + x, 366 + y + jumpY + floatY, 8);
  // 왼팔
  stroke(242, 201, 154);
  strokeWeight(10);
  line(195 + x, 320 + y + jumpY + floatY, 160 + x, 345 + y + jumpY + floatY);
if (magicOn) {
  stroke(242, 201, 154);
  strokeWeight(10);
  line(405 + x, 320 + y + jumpY + floatY, 440 + x, 275 + y + jumpY + floatY);
  stroke(120, 80, 40);
  strokeWeight(4);
  line(440 + x, 275 + y + jumpY + floatY, 463 + x, 248 + y + jumpY + floatY);
  noStroke();
  fill(255, 240, 120, 120);
  circle(472 + x, 238 + y + jumpY + floatY, 34);
  fill(255, 225, 70);
  triangle(472 + x, 224 + y + jumpY + floatY, 467 + x, 235 + y + jumpY + floatY, 477 + x, 235 + y + jumpY + floatY);
  triangle(472 + x, 252 + y + jumpY + floatY, 467 + x, 241 + y + jumpY + floatY, 477 + x, 241 + y + jumpY + floatY);
  triangle(458 + x, 238 + y + jumpY + floatY, 469 + x, 233 + y + jumpY + floatY, 469 + x, 243 + y + jumpY + floatY);
  triangle(486 + x, 238 + y + jumpY + floatY, 475 + x, 233 + y + jumpY + floatY, 475 + x, 243 + y + jumpY + floatY);
  stroke(255, 240, 120);
  strokeWeight(2);
  line(472 + x, 214 + y + jumpY + floatY, 472 + x, 220 + y + jumpY + floatY);
  line(472 + x, 256 + y + jumpY + floatY, 472 + x, 262 + y + jumpY + floatY);
  line(448 + x, 238 + y + jumpY + floatY, 454 + x, 238 + y + jumpY + floatY);
  line(490 + x, 238 + y + jumpY + floatY, 496 + x, 238 + y + jumpY + floatY);
  noStroke();
  fill(255, 255, 180, 180);
  circle(455 + x, 223 + y + jumpY + floatY, 6);
  circle(490 + x, 224 + y + jumpY + floatY, 5);
  circle(452 + x, 253 + y + jumpY + floatY, 5);
  circle(492 + x, 252 + y + jumpY + floatY, 6);
} else {
  stroke(242, 201, 154);
  strokeWeight(10);
  line(405 + x, 320 + y + jumpY + floatY, 440 + x, 345 + y + jumpY + floatY);
}
  // 귀
  fill(242, 201, 154);
  stroke(219, 168, 120);
  strokeWeight(1);
  ellipse(214 + x, 210 + y + jumpY + floatY, 22, 34);
  ellipse(386 + x, 210 + y + jumpY + floatY, 22, 34);
  fill(232, 184, 132);
  noStroke();
  ellipse(214 + x, 210 + y + jumpY + floatY, 12, 22);
  ellipse(386 + x, 210 + y + jumpY + floatY, 12, 22);
  // 얼굴
  fill(242, 201, 154);
  noStroke();
  ellipse(300 + x, 205 + y + jumpY + floatY, 172, 196);
  // 볼터치
  if (cheek > 0) {
    fill(255, 150, 170, 120);
    ellipse(248 + x, 235 + y + jumpY + floatY, 26, 14);
    ellipse(352 + x, 235 + y + jumpY + floatY, 26, 14);
    cheek--;
  }
  // 비니 본체
  fill(58, 58, 58);
  noStroke();
  triangle(210 + x, 168 + y + jumpY + floatY, 300 + x, 62 + y + jumpY + floatY, 390 + x, 168 + y + jumpY + floatY);
  arc(300 + x, 168 + y + jumpY + floatY, 180, 50, PI, TWO_PI);
  // 비니 밑단
  fill(42, 42, 42);
  noStroke();
  rect(210 + x, 155 + y + jumpY + floatY, 180, 20, 3);
  stroke(68, 68, 68);
  strokeWeight(1.2);
  line(215 + x, 160 + y + jumpY + floatY, 385 + x, 160 + y + jumpY + floatY);
  line(215 + x, 166 + y + jumpY + floatY, 385 + x, 166 + y + jumpY + floatY);
  line(215 + x, 172 + y + jumpY + floatY, 385 + x, 172 + y + jumpY + floatY);
  // 눈썹
  stroke(26, 26, 26);
  strokeWeight(3);
  noFill();
  arc(270 + x, 178 + y + jumpY + floatY, 34, 16, PI + 0.4, TWO_PI - 0.5);
  arc(330 + x, 178 + y + jumpY + floatY, 34, 16, PI + 0.5, TWO_PI - 0.4);
  // 눈
  fill(255);
  noStroke();
  ellipse(270 + x, 200 + y + jumpY + floatY, 40, 20);
  if (wink) {
    fill(40);
    rect(314 + x, 198 + y + jumpY + floatY, 32, 3, 2);
  } else {
    fill(255);
    ellipse(330 + x, 200 + y + jumpY + floatY, 40, 20);
  }
  fill(46, 26, 14);
  ellipse(270 + eyeMove + x, 200 + y + jumpY + floatY, 20, 18);
  if (!wink) {
    ellipse(330 + eyeMove + x, 200 + y + jumpY + floatY, 20, 18);
  }
  fill(13, 5, 0);
  circle(270 + eyeMove + x, 200 + y + jumpY + floatY, 11);
  if (!wink) {
    circle(330 + eyeMove + x, 200 + y + jumpY + floatY, 11);
  }

  fill(255);
  circle(274 + eyeMove + x, 197 + y + jumpY + floatY, 4);
  if (!wink) {
    circle(334 + eyeMove + x, 197 + y + jumpY + floatY, 4);
  }
  // 코
  fill(219, 168, 120);
  noStroke();
  ellipse(300 + x, 228 + y + jumpY + floatY, 18, 10);
  stroke(200, 144, 106);
  strokeWeight(1.2);
  noFill();
  arc(300 + x, 224 + y + jumpY + floatY, 20, 20, 0, PI);
  // 입
  stroke(176, 112, 80);
  strokeWeight(2.2);
  noFill();
  if (keyIsPressed && (key == 'a' || key == 'A')) {
    ellipse(300 + x, 250 + y + jumpY + floatY, 18, 22);
  } else {
    arc(300 + x, 250 + y + jumpY + floatY, 50, 24, 0, PI);
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) x -= 12;
  if (keyCode === RIGHT_ARROW) x += 12;
  if (x < -120) x = -120;
  if (x > 120) x = 120;
  if (key == ' ' && jumping == false) {
    vy = -10;
    jumping = true;
  }
  if (key == 's' || key == 'S') {
    saveGif("character_motion", 10);
  }
}
