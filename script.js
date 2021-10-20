var WIDTH_SIZE = window.innerWidth
var HEIGHT_SIZE = window.innerHeight
var CENTER_WINDOW_WIDTH = WIDTH_SIZE / 2;
var CENTER_WINDOW_HEIGHT = HEIGHT_SIZE / 2;
// window.resizeTo(WIDTH_SIZE, HEIGHT_SIZE);
var MOBILE_SUITE_NEO_OPERATION_SYSTEM = new Array('M', 'O', 'B', 'I', 'L', 'E',
                                                  ' ', 'S', 'U', 'I', 'T', 'E',
                                                  ' ', 'N', 'E', 'O',
                                                  ' ', 'O', 'P', 'E', 'R', 'A', 'T', 'I', 'O', 'N',
                                                  ' ', 'S', 'Y', 'S', 'T', 'E', 'M');
var MOBILE_SUITE_NEO_OPERATION_SYSTEM1 = new Array('MOBILE', 'SUITE', 'NEO', 'OPERATION', 'SYSTEM')
var ZAFT = new Array('Z', ' ', '*', ' ', 'A', ' ', '*', ' ', 'F', ' ', '*', ' ', 'T')
var SERIES_SD = new Array('_', '_', '_', '_',
                          ' ', 'S', 'e', 'r', 'i', 'e', 's',
                          ' ', 'S', 'D', '1', '0', '0', '-', '0', '9',
                          ' ', 'S', 'F', '/', 'I', 'J',
                          ' ', '0', '1', '-', '3', '4', '1', '5', '2',
                          ' ', '_', '_', '_', '_')
function setup(){

  console.log(windowWidth);
  console.log(windowHeight);
  //キャンバスを作成
  createCanvas(windowWidth, windowHeight);
  // canvas.parent('aa');
  //$("canvas").css("zoom","50%");
  console.log(windowWidth, windowHeight);
  //背景色
  background(0,0,64);
  //translate(CENTER_WINDOW_WIDTH, CENTER_WINDOW_HEIGHT);

  // 黄色い外枠

  // rect(widthPosition(-1025) , heightPosition(-575), widthPosition(1025), heightPosition(575));
  // //オブジェクトの色
  // fill(0,255,0);
  // strokeWeight(0);
  // //キャンバスの中心に直径100pxの丸を描画
  // ellipse(width/2,height/2,100);


  //outLine();
  zoom = 0.5
  // zaftMark(0,0);
  displayCount = 0;
  mobileSuiteNeoOperationSystem = '';
  zaft = '';
  seriesSd = '';
  zoom = 0.5

  width = 0;
  height = 0;
  frag = true
}

function zaftMark(width, height) {
  translate(CENTER_WINDOW_WIDTH, CENTER_WINDOW_HEIGHT);
  scale(0.65);
  var markLeftTop = {width: widthPosition(-305), height: heightPosition(-270)};
  var markRightTop = {width: widthPosition(-305), height: heightPosition(270)};
  var markLeftBottom = {width: widthPosition(305), height: heightPosition(-270)};
  var markRightBottom = {width: widthPosition(305), height: heightPosition(270)};
  // ザフトのマーク
  strokeCap(SQUARE);
  strokeWeight(35);
  stroke(255,0,0,);
  myLine(markRightTop.width, markRightTop.height, markLeftBottom.width, markLeftBottom.height, width, height);

  noFill()
  strokeWeight(80);
  myArc(widthPosition(0), heightPosition(360), 1000, 1560, PI * 1.36, PI * 1.65, OPEN, width, height);
  myArc(widthPosition(0), heightPosition(-360), 1000, 1560, PI * 0.36, PI * 0.65, OPEN, width, height);

  fill(255,0,0);
  strokeWeight(5);
  // 左上
  myTriangle(markLeftTop.width + 30, markLeftTop.height - 73, widthPosition(-100), heightPosition(-150), markLeftTop.width - 40, markLeftTop.height - 5, width, height)
  myTriangle(widthPosition(0), heightPosition(0), widthPosition(350), heightPosition(-265), widthPosition(300), heightPosition(-320), width, height)
  // 右下
  myTriangle(markRightBottom.width - 30, markRightBottom.height + 73, widthPosition(100), heightPosition(150), markRightBottom.width + 45, markRightBottom.height, width, height)
  myTriangle(widthPosition(0), heightPosition(0), widthPosition(-350), heightPosition(265), widthPosition(-300), heightPosition(320), width, height)

  // 中心の星型
  fill(135,206,250);
  stroke(135,206,250);
  myTriangle(widthPosition(80), heightPosition(-300), widthPosition(30), heightPosition(80), widthPosition(10), heightPosition(-120), width, height)
  myTriangle(widthPosition(-80), heightPosition(240), widthPosition(10), heightPosition(50), widthPosition(0), heightPosition(-120), width, height)
  myTriangle(widthPosition(-150), heightPosition(-600), widthPosition(20), heightPosition(-100), widthPosition(-10), heightPosition(50), width, height)
  myTriangle(widthPosition(120), heightPosition(500), widthPosition(20), heightPosition(-100), widthPosition(-10), heightPosition(50), width, height)

  // 中心の半円
  fill(244,242,255);
  stroke(244,242,255);
  strokeWeight(60);
  myArc(widthPosition(0), heightPosition(-768), 3000, 1560, PI * 0.35, PI * 0.65, OPEN, width, height);
  strokeWeight(5);
  myTriangle(widthPosition(-200), heightPosition(-80), widthPosition(-550), heightPosition(-30), widthPosition(-500), heightPosition(-17), width, height)
  myTriangle(widthPosition(-388), heightPosition(13), widthPosition(-380), heightPosition(-40), widthPosition(-500), heightPosition(-17), width, height)

  myTriangle(widthPosition(200), heightPosition(-80), widthPosition(550), heightPosition(-30), widthPosition(500), heightPosition(-17), width, height)
  myTriangle(widthPosition(388), heightPosition(13), widthPosition(380), heightPosition(-40), widthPosition(500), heightPosition(-17), width, height)
  scale(1.0/0.65);
  //translate(-CENTER_WINDOW_WIDTH, -CENTER_WINDOW_HEIGHT);
}

function draw() {
  //translate(CENTER_WINDOW_WIDTH, CENTER_WINDOW_HEIGHT);
  textFont("Comic Sans MS");
  textAlign(LEFT);
  background(0,0,64);

  // ZAFTのマーク
  if(displayCountRange(0, 50, displayCount)) {
    zaftMark(0,0);
  } else if(displayCountRange(50, 65, displayCount)) {
    zaftMark(0, (50 - displayCount) * 9);
  } else if(displayCountRange(65, 170, displayCount)) {
    zaftMark(0, -120);
  } else if(displayCountRange(170, 175, displayCount)) {
    zaftMark(0, -120 + ((displayCount - 170) * 19));
  } else if(displayCountRange(175, 50000, displayCount)) {
    zaftMark(0, -25);
  }
  outLine();
  strokeWeight(2);

  // MOBILE SUITE NEO OPERATION SYSTEMの文字
  if(displayCountRange(50, 170, displayCount)) {
    if(displayCount % 1 == 0 && typeof MOBILE_SUITE_NEO_OPERATION_SYSTEM[(displayCount - 50) / 1] !== "undefined"){
      mobileSuiteNeoOperationSystem = mobileSuiteNeoOperationSystem.concat(MOBILE_SUITE_NEO_OPERATION_SYSTEM[(displayCount - 50) / 1])
    }
    displayMobileSuiteNeoOperationSystem(widthPosition(-620), heightPosition(150), 0, 0);
  } else if(displayCountRange(170, 175, displayCount)) {
    displayMobileSuiteNeoOperationSystem(widthPosition(-620), heightPosition(150), 0, (displayCount - 170) * -98);
  } else if(displayCountRange(175, 50000, displayCount)) {
    displayMobileSuiteNeoOperationSystem(widthPosition(-620), heightPosition(-340), 0, 0);
  }

  // ZAFTの文字
  if(displayCountRange(110, 170, displayCount)) {
    if(displayCount % 1 == 0 && typeof ZAFT[(displayCount - 110) / 1] !== "undefined"){
      zaft = zaft.concat(ZAFT[(displayCount - 110) / 1])
    }
    displayZaft(widthPosition(-250), heightPosition(350), 0, 0);
  } else if(displayCountRange(170, 175, displayCount)) {
    displayZaft(widthPosition(-250), heightPosition(350), 0, (displayCount - 170) * 7);
  } else if(displayCountRange(175, 50000, displayCount)) {
    displayZaft(widthPosition(-250), heightPosition(385), 0, 0);
  }

  // Seriesの文字
  if(displayCountRange(110, 170, displayCount)) {
    if(displayCount % 1 == 0 && typeof SERIES_SD[(displayCount - 110) / 1] !== "undefined"){
      seriesSd = seriesSd.concat(SERIES_SD[(displayCount - 110) / 1])
    }
    displaySeries(widthPosition(-450), heightPosition(260), 0, 0)
  } else if(displayCountRange(170, 175, displayCount)) {
    displaySeries(widthPosition(-450), heightPosition(260), 0, (displayCount - 170) * 11)
  } else if(displayCountRange(175, 50000, displayCount)) {
    displaySeries(widthPosition(-450), heightPosition(315), 0, 0)
  }

  if(displayCountRange(170, 175, displayCount)) {
    displayConsole(widthPosition(-576), heightPosition(-330), widthPosition(1152) , heightPosition(40), 0, (displayCount - 170) * 135);
  } else if(displayCountRange(175, 50000, displayCount)) {
    displayConsole(widthPosition(-576), heightPosition(-330), widthPosition(1152) , heightPosition(610), 0, 0);
  }

  //aaa();
  displayCount = displayCount + 1;
}

function outLine() {
  stroke(255,255,0);
  strokeWeight(5);
  noFill();
  rect(widthPosition(-690) , heightPosition(-393), widthPosition(1382) , heightPosition(788));
}

function aaa() {
  //background(0,0,64);
  zaftMark(0, 0);
  if(frag) {
    width = width + 10;
  } else {
    width = width - 10;
  }
  if(width >= 1000){
    frag = false
  }
  if(width <= 0){
    frag = true
  }
  // height = height + 1;
  console.log(width);
  console.log(height);
}

function displayCountRange(start, end, displayCount){
  return start <= displayCount && displayCount < end;
}

// 中心からの横幅指定
function widthPosition(width) {
  return width;
}

// MOBILE SUITE NEO OPERATION SYSTEMの文字表示
function displayMobileSuiteNeoOperationSystem(width, height, additionalWidth, additionalHeight) {
  fill(244,242,255);
  strokeWeight(2);
  textSize(60);
  stroke(244,242,255);
  text(mobileSuiteNeoOperationSystem, width + additionalWidth, height + additionalHeight);
}

// ZAFTの文字表示
function displayZaft(width, height, additionalWidth, additionalHeight) {
  fill(244,242,255);
  strokeWeight(2);
  textSize(80);
  stroke(244,242,255);
  text(zaft, width + additionalWidth, height + additionalHeight);
}

// Seriesの文字表示
function displaySeries(width, height, additionalWidth, additionalHeight) {
  fill(244,242,255);
  strokeWeight(2);
  textSize(40);
  stroke(255,0,0);
  text(seriesSd, width + additionalWidth, height + additionalHeight);
}

// Seriesの文字表示
function displayConsole(width, height, widthLength, heightLength, additionalWidth, additionalHeight) {
  fill('rgba(50%,50%,50%, 0.5)');
  rect(width , height, widthLength + additionalWidth, heightLength + additionalHeight);
}

// 中心からの横幅指定
function heightPosition(height) {
  return height;
}

// 座標係数を加えた三角形
function myTriangle(width1, height1, width2, height2, width3, height3, additionalWidth, additionalHeight) {
  return triangle(width1 + additionalWidth, height1 + additionalHeight, width2 + additionalWidth, height2 + additionalHeight, width3 + additionalWidth, height3 + additionalHeight)
}

// 座標係数を加えた直線
function myLine(width1, height1, width2, height2, additionalWidth, additionalHeight) {
  return line(width1 + additionalWidth, height1 + additionalHeight, width2 + additionalWidth, height2 + additionalHeight);
}

// 座標係数を加えた円弧
// TODO 引数の名前決める
function myArc(width1, height1, a, b, c, d, e, additionalWidth, additionalHeight) {
  return arc(width1 + additionalWidth, height1 + additionalHeight, a, b, c, d, e);
}
