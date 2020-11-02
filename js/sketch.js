let bgm = null;
let sun = null;
let angle = 0;
let speed = 0;
let answerFlag = 0;
let answers = ['Yes', 'No', 'Don’t bet on it ',
  'Maybe', 'Don’t doubt it',
  'You’ll regret it', 'Love ',
  'This is a good time to make new plan',
  'Seek out more options', 'Never',
  'You’ll get the final word', 'Wait',
  'Don’t waste time any more', 'Bet on it ',
  'Of course ', 'Laugh about it '
];
let ran = null;

function preload() {
  bgm = loadImage('image/biankuang.png');
  sun = loadImage('image/2.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(255);
  background(bgm, windowWidth, windowHeight);
  tint(255, 200);

  push();
  speed += deltaTime;
  if (speed > 200) {
    speed = 0;
    angle++;
    if (angle == 360)
      angle = 0;
  }
  translate(windowWidth / 2, windowHeight / 2);
  rotate(angle);
  image(sun, -175, -175, 350, 350);
  pop();

  if (answerFlag == 0) {
    textFont("楷体");
    textSize(25);
    text("Now think a Question in your mind", windowWidth / 2 - 170, windowHeight / 2 - 80);
    text("then", width / 2 - 20, height / 2 - 50);
    text("clik the button", width / 2 - 70, height / 2 - 20);
    push();
    button = createButton('answer');
    button.position(windowWidth / 2 - button.width/2, windowHeight / 2 + 20);
    button.mousePressed(function() {
      answerFlag = 1;
      ran = int(random(answers.length));
    });
  } else {
    textFont("楷体");
    textSize(30);
    let str = answers[ran];
    text(str + "", width / 2-str.length*5, height / 2-10 );
  }
}
