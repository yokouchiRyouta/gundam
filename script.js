var WIDTH_SIZE = window.innerWidth
var HEIGHT_SIZE = window.innerHeight
var CENTER_WINDOW_WIDTH = WIDTH_SIZE / 2;
var CENTER_WINDOW_HEIGHT = HEIGHT_SIZE / 2;
var MOBILE_SUITE_NEO_OPERATION_SYSTEM = new Array('M', 'O', 'B', 'I', 'L', 'E',
                                                  ' ', 'S', 'U', 'I', 'T', 'E',
                                                  ' ', 'N', 'E', 'O',
                                                  ' ', 'O', 'P', 'E', 'R', 'A', 'T', 'I', 'O', 'N',
                                                  ' ', 'S', 'Y', 'S', 'T', 'E', 'M');
var SERIES_SD = new Array('_', '_', '_', '_',
                          ' ', 'S', 'e', 'r', 'i', 'e', 's',
                          ' ', 'S', 'D', '1', '0', '0', '-', '0', '9',
                          ' ', 'S', 'F', '/', 'I', 'J',
                          ' ', '0', '1', '-', '3', '4', '1', '5', '2',
                          ' ', '_', '_', '_', '_')
var ZAFT = new Array('Z', ' ', '*', ' ', 'A', ' ', '*', ' ', 'F', ' ', '*', ' ', 'T')
var GUNDAM_G = 'G'
var GUNDAM_U = 'U'
var GUNDAM_N = 'N'
var GUNDAM_D = 'D'
var GUNDAM_A = 'A'
var GUNDAM_M = 'M'
var ENERATION_LOWERCASE = 'eneration'
var NSUBDUED_LOWERCASE = 'nsubdued'
var UCLEAR_LOWERCASE = 'uclear'
var RIVE_LOWERCASE = 'rive'
var SSAULT_LOWERCASE = 'ssault'
var ODULE_LOWERCASE = 'odule'
var COMPLEX_LOWERCASE = 'Complex'

var ENERATION = new Array('E', 'N', 'E', 'R', 'A', 'T', 'I', 'O', 'N')
var NSUBDUED = new Array('N', 'S', 'U', 'B', 'D', 'U', 'E', 'D')
var UCLEAR = new Array('U', 'C', 'L', 'E', 'A', 'R')
var RIVE = new Array('R', 'I', 'V', 'E')
var SSAULT = new Array('S', 'S', 'A', 'U', 'L', 'T')
var ODULE = new Array('O', 'D', 'U', 'L', 'E')
var COMPLEX = new Array('C', 'O', 'M', 'P', 'L', 'E', 'X')
var GUNDAM_ALL = new Array(ENERATION, NSUBDUED, UCLEAR, RIVE, SSAULT, ODULE)

var GUNDAM_COMPLEX1 = 'G.U.N.D.A.M  C'
var GUNDAM_COMPLEX2 = 'omplex'

var LOG1 = "aaaaa  aaaaaaaa  aaa aa aaaa  aaaaaa aaaa  aaaa"
var LOG2 = "bbbbbb  bbbbbbbbbb  bbbbb  bbb  bbbbb  bb"
var LOG3 = "ccccc  cccccccccc  ccccccccc  cccccc"
var LOG4 = "dddd  dd  dddd  dddddd  dddddddd  dddddd  dddddd"
var LOG5 = "eeee  eeeeeeeee   eeeeeee eeeee   eeeeeee e"
var LOG6 = "ffffffffffffffffff    fffff"
var LOG7 = ""
var LOG = new Array(LOG1, LOG2, LOG3, LOG4, LOG5, LOG6, LOG7);

var SHUWASHUWA = new Array();

function setup(){
  $("body").css("margin",0);
  //キャンバスを作成
  createCanvas(windowWidth, windowHeight);
  console.log(windowWidth, windowHeight);
  //背景色
  background(0,0,64);

  zoom = 0.5
  // zaftMark(0,0);
  displayCount = 0;
  mobileSuiteNeoOperationSystem = '';
  zaft = '';
  seriesSd = '';
  
  eneration = ''
  nsubdued = ''
  uclear = ''
  rive = ''
  ssault = ''
  odule = ''
  complex = ''
  zoom = 0.5
  
  introFrag = true

  width = 0;
  height = 0;
  frag = true
}

function zaftMark(width, height) {
  //translate(CENTER_WINDOW_WIDTH, CENTER_WINDOW_HEIGHT);
  scale(0.45);
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
  
  rotate(PI / 30);
  textSize(60);
  strokeWeight(2);
  fill(255,255,255);
  stroke(255,255,255);
  text("Zodiac", -480 + width, 110 + height)
  rotate(-1 * PI / 45);
  text("Alliance", -275 + width, 90 + height)
  rotate(-1 * PI / 90);
  text("of", -20 + width, 90 + height)
  rotate(-1 * PI / 90);
  text("Freedom", 70 + width, 95 + height)
  rotate(-1 * PI / 60);
  text("Treaty", 330 + width, 110 + height)
  
  rotate((PI / 180) * 5);
  scale(0.7/0.45);
}

function draw() {
  translate(CENTER_WINDOW_WIDTH, CENTER_WINDOW_HEIGHT);
  textFont("Sawarabi Mincho");
  textAlign(LEFT);
  background(0,0,64);
  displayShuwaShuwa();
  if(introFrag) {
    zaftMark(0,0);
    if(displayCount > 100) {
      introFrag = false
      displayCount = 0
    }
    displayCount = displayCount + 1
  } else {
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
      displaySeries(widthPosition(-400), heightPosition(260), 0, 0)
    } else if(displayCountRange(170, 175, displayCount)) {
      displaySeries(widthPosition(-400), heightPosition(260), 0, (displayCount - 170) * 11)
    } else if(displayCountRange(175, 50000, displayCount)) {
      displaySeries(widthPosition(-400), heightPosition(315), 0, 0)
    }

    // コンソール
    if(displayCountRange(170, 175, displayCount)) {
      displayConsole(widthPosition(-576), heightPosition(-330), widthPosition(1152) , heightPosition(40), 0, (displayCount - 170) * 135);
    } else if(displayCountRange(175, 200, displayCount)) {
      displayConsole(widthPosition(-576), heightPosition(-330), widthPosition(1152) , heightPosition(610), 0, 0);
    } else if(displayCountRange(200, 230, displayCount)) {
      displayConsole(widthPosition(-576), heightPosition(-330), widthPosition(1152) , heightPosition(610), 0, 0);
      displayGundamMain(-380, -170, 0, 0)
      displayGundamSubLowercase(-300, -170, 0)
    } else if(displayCountRange(230, 260, displayCount)) {
      displayConsole(widthPosition(-576), heightPosition(-330), widthPosition(1152) , heightPosition(610), 0, 0);
      displayGundamMain(-380, -170, 0, 0)
      displayGundamSubLowercase(-300, -170, 1)
      if(displayCount % 2 == 0 && typeof ENERATION[(displayCount - 230) / 2] !== "undefined"){
        eneration = eneration.concat(ENERATION[(displayCount - 230) / 2])
      }
      displayGundamSub(-300, -170, 0, 0);
    } else if(displayCountRange(260, 290, displayCount)) {
      displayConsole(widthPosition(-576), heightPosition(-330), widthPosition(1152) , heightPosition(610), 0, 0);
      displayGundamMain(-380, -170, 0, 0)
      displayGundamSubLowercase(-300, -170, 2)
      if(displayCount % 2 == 0 && typeof NSUBDUED[(displayCount - 260) / 2] !== "undefined"){
        nsubdued = nsubdued.concat(NSUBDUED[(displayCount - 260) / 2])
      }
      displayGundamSub(-300, -170, 0, 0);
    } else if(displayCountRange(290, 320, displayCount)) {
      displayConsole(widthPosition(-576), heightPosition(-330), widthPosition(1152) , heightPosition(610), 0, 0);
      displayGundamMain(-380, -170, 0, 0)
      displayGundamSubLowercase(-300, -170, 3)
      if(displayCount % 2 == 0 && typeof UCLEAR[(displayCount - 290) / 2] !== "undefined"){
        uclear = uclear.concat(UCLEAR[(displayCount - 290) / 2])
      }
      displayGundamSub(-300, -170, 0, 0);
    } else if(displayCountRange(320, 350, displayCount)) {
      displayConsole(widthPosition(-576), heightPosition(-330), widthPosition(1152) , heightPosition(610), 0, 0);
      displayGundamMain(-380, -170, 0, 0)
      displayGundamSubLowercase(-300, -170, 4)
      if(displayCount % 2 == 0 && typeof RIVE[(displayCount - 320) / 2] !== "undefined"){
        rive = rive.concat(RIVE[(displayCount - 320) / 2])
      }
      displayGundamSub(-300, -170, 0, 0);
    } else if(displayCountRange(350, 380, displayCount)) {
      displayConsole(widthPosition(-576), heightPosition(-330), widthPosition(1152) , heightPosition(610), 0, 0);
      displayGundamMain(-380, -170, 0, 0)
      displayGundamSubLowercase(-300, -170, 5)
      if(displayCount % 2 == 0 && typeof SSAULT[(displayCount - 350) / 2] !== "undefined"){
        ssault = ssault.concat(SSAULT[(displayCount - 350) / 2])
      }
      displayGundamSub(-300, -170, 0, 0);
    } else if(displayCountRange(380, 410, displayCount)) {
      displayConsole(widthPosition(-576), heightPosition(-330), widthPosition(1152) , heightPosition(610), 0, 0);
      displayGundamMain(-380, -170, 0, 0)
      displayGundamSubLowercase(-300, -170, 6)
      if(displayCount % 2 == 0 && typeof ODULE[(displayCount - 380) / 2] !== "undefined"){
        odule = odule.concat(ODULE[(displayCount - 380) / 2])
      }
      displayGundamSub(-300, -170, 0, 0);
    } else if(displayCountRange(410, 440, displayCount)) {
      displayConsole(widthPosition(-576), heightPosition(-330), widthPosition(1152) , heightPosition(610), 0, 0);
      displayGundamMain(-380, -170, 0, 0)
      displayGundamSubLowercase(-300, -170, 7)
      if(displayCount % 2 == 0 && typeof COMPLEX[(displayCount - 410) / 2] !== "undefined"){
        complex = complex.concat(COMPLEX[(displayCount - 410) / 2])
      }
      displayGundamSub(-300, -170, 0, 0);
    } else if(displayCountRange(440, 500, displayCount)) {
      displayConsole(widthPosition(-576), heightPosition(-330), widthPosition(1152) , heightPosition(610), 0, 0);
      displayGundamMain(-380, -170, 0, 0)
      displayGundamSubLowercase(-300, -170, 7)
      displayGundamSub(-300, -170, 0, 0);
    } else if(displayCountRange(500, 510, displayCount)) {
      displayConsole(widthPosition(-576), heightPosition(-330), widthPosition(1152) , heightPosition(610), 0, 0);
      displayGundamMain(-380, -170, 0, (displayCount - 500) * 8)
      displayGundamSub(-300, -170, 0, (displayCount - 500) * 8);
    } else if(displayCountRange(510, 550, displayCount)) {
      displayConsole(widthPosition(-576), heightPosition(-330), widthPosition(1152) , heightPosition(610), 0, 0);
      displayGundamMain(-380, -170, 0, 80)
      displayGundamSub(-300, -170, 0, 80);
      displayGundamComplex(-500, -290, 1000, 120)
    } else if(displayCountRange(550, 55000, displayCount)) {
      displayConsole(widthPosition(-576), heightPosition(-330), widthPosition(1152) , heightPosition(610), 0, 0);
      displayConsoleNect();
      displayGundamMainNext(-465, -170, 0, 80)
      displayGundamSubNext(-435, -170, 0, 80);
      displayGundamComplex(-500, -290, 1000, 120);
      displayGadges(displayCount - 550);
      displayFolders(displayCount - 550);
      displayCubes(displayCount - 550);
      displayCounts(displayCount - 550);
    }
    displayCount = displayCount + 1;
  }
}

function outLine() {
  stroke(255,255,0);
  strokeWeight(5);
  noFill();
  rect(widthPosition(-690) , heightPosition(-393), widthPosition(1382) , heightPosition(788));
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
  textSize(55);
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
  fill(255,0,0);
  strokeWeight(2);
  textSize(40);
  stroke(0,0,0);
  text(seriesSd, width + additionalWidth, height + additionalHeight);
}

// コンソールの表示
function displayConsole(width, height, widthLength, heightLength, additionalWidth, additionalHeight) {
  stroke(239,128,1);
  fill('rgba(50%,50%,50%, 0.0)');
  rect(width , height, widthLength + additionalWidth, heightLength + additionalHeight);
  fill(239,128,1);
  rect(width + 6, height + 4, 30, 12);
  rect(width + 70, height + 4, 150, 8);
  rect(width + 225, height + 4, 20, 8);
  rect(width + 250, height + 4, 10, 8);
  rect(width + 265, height + 4, 5, 8);
  rect(width + 320, height + 4, 80, 8);
  rect(width + 740, height + 4, 15, 8);
  rect(width + 765, height + 4, 10, 8);
  rect(width + 780, height + 4, 5, 8);
  rect(width + 900, height + 4, 100, 8);
  rect(width + 1070, height + 4, 30, 8);
  rect(width + 1110, height + 4, 30, 8);
  fill('rgba(102,112,235, 0.7)');
  rect(width + 6, height + 24, (widthLength + additionalWidth) - 12, (heightLength + additionalHeight) - 28);
}

function displayGundamMain(width, height, additionalWidth, additionalHeight) {
  textAlign(CENTER);
  textSize(90);
  strokeWeight(2);
  fill(255,0,0);
  stroke(255,255,255);
  text(GUNDAM_G, width + additionalWidth, height + additionalHeight);
  text(GUNDAM_U, width + additionalWidth, height + 70 + additionalHeight);
  text(GUNDAM_N, width + additionalWidth, height + 140 + additionalHeight);
  text(GUNDAM_D, width + additionalWidth, height + 210 + additionalHeight);
  text(GUNDAM_A, width + additionalWidth, height + 280 + additionalHeight);
  text(GUNDAM_M, width + additionalWidth, height + 350 + additionalHeight);
  textAlign(LEFT);
}

function displayGundamMainNext(width, height, additionalWidth, additionalHeight) {
  textAlign(CENTER);
  textSize(55);
  strokeWeight(2);
  fill(255,0,0);
  stroke(255,255,255);
  text(GUNDAM_G, width + additionalWidth, height + additionalHeight);
  text(GUNDAM_U, width + additionalWidth, height + 45 + additionalHeight);
  text(GUNDAM_N, width + additionalWidth, height + 90 + additionalHeight);
  text(GUNDAM_D, width + additionalWidth, height + 135 + additionalHeight);
  text(GUNDAM_A, width + additionalWidth, height + 180 + additionalHeight);
  text(GUNDAM_M, width + additionalWidth, height + 225 + additionalHeight);
  textAlign(LEFT);
}

function displayGundamSubLowercase(width, height, phase) {
  textSize(80);
  strokeWeight(2);
  fill(0,0,0);
  stroke(0,0,0);
  
  add_height = height
  if(1 > phase){ text(ENERATION_LOWERCASE, width, height); }
  add_height = add_height + 70
  if(2 > phase){ text(NSUBDUED_LOWERCASE, width, add_height); }
  add_height = add_height + 70
  if(3 > phase){ text(UCLEAR_LOWERCASE, width, add_height); }
  add_height = add_height + 70
  if(4 > phase){ text(RIVE_LOWERCASE, width, add_height); }
  add_height = add_height + 70
  if(5 > phase){ text(SSAULT_LOWERCASE, width, add_height); }
  add_height = add_height + 70
  if(6 > phase){ text(ODULE_LOWERCASE, width, add_height); }
  add_height = add_height + 70
  if(7 > phase){ text(COMPLEX_LOWERCASE, width + 400, height + 400);}
}

function displayGundamSub(width, height, additionalWidth, additionalHeight) {
  displayGundamSubGeneration(width, height, additionalWidth, additionalHeight, 70)
  displayGundamSubUnsubdued(width, height + 70, additionalWidth, additionalHeight, 70)
  displayGundamSubNuclear(width, height + 140, additionalWidth, additionalHeight, 70)
  displayGundamSubDrive(width, height + 210, additionalWidth, additionalHeight, 70)
  displayGundamSubAssault(width, height + 280, additionalWidth, additionalHeight, 70)
  displayGundamSubModule(width, height + 350, additionalWidth, additionalHeight, 70)
  displayGundamSubComplex(width + 400, height + 400, additionalWidth * 0.4, additionalHeight * 0.4, 70)
}

function displayGundamSubNext(width, height, additionalWidth, additionalHeight) {
  displayGundamSubGeneration(width, height, additionalWidth, additionalHeight, 40)
  displayGundamSubUnsubdued(width, height + 45, additionalWidth, additionalHeight, 40)
  displayGundamSubNuclear(width, height + 90, additionalWidth, additionalHeight, 40)
  displayGundamSubDrive(width, height + 135, additionalWidth, additionalHeight, 40)
  displayGundamSubAssault(width, height + 180, additionalWidth, additionalHeight, 40)
  displayGundamSubModule(width, height + 225, additionalWidth, additionalHeight, 40)
  displayGundamSubComplex(width + 50, height + 325, additionalWidth * 0.4, additionalHeight * 0.4, 40)
}

// Gundam Complexの文字
function displayGundamComplex() {
  strokeWeight(2);
  fill(128,128,128);
  stroke(0,0,0);
  rect(-510, -290, 1020, 120);
  
  fill(200,0,0);
  stroke(200,0,0);
  textSize(90);
  text(GUNDAM_COMPLEX1, -500,  -200);
  textSize(70);
  text(GUNDAM_COMPLEX2, 250,  -200);
}

// ENERATIONの文字
function displayGundamSubGeneration(width, height, additionalWidth, additionalHeight, fontSize) {
  textSize(fontSize);
  strokeWeight(2);
  fill(255,0,0);
  stroke(255,0,0);
  text(eneration, width + additionalWidth, height + additionalHeight);
}

// NSUBDUEDの文字
function displayGundamSubUnsubdued(width, height, additionalWidth, additionalHeight, fontSize) {
  textSize(fontSize);
  strokeWeight(2);
  fill(255,0,0);
  stroke(255,0,0);
  text(nsubdued, width + additionalWidth, height + additionalHeight);
}

// UCLEARの文字
function displayGundamSubNuclear(width, height, additionalWidth, additionalHeight, fontSize) {
  textSize(fontSize);
  strokeWeight(2);
  fill(255,0,0);
  stroke(255,0,0);
  text(uclear, width + additionalWidth, height + additionalHeight);
}

// RIVEの文字
function displayGundamSubDrive(width, height, additionalWidth, additionalHeight, fontSize) {
  textSize(fontSize);
  strokeWeight(2);
  fill(255,0,0);
  stroke(255,0,0);
  text(rive, width + additionalWidth, height + additionalHeight);
}

// SSAULTの文字
function displayGundamSubAssault(width, height, additionalWidth, additionalHeight, fontSize) {
  textSize(fontSize);
  strokeWeight(2);
  fill(255,0,0);
  stroke(255,0,0);
  text(ssault, width + additionalWidth, height + additionalHeight);
}

// ODUKEの文字
function displayGundamSubModule(width, height, additionalWidth, additionalHeight, fontSize) {
  textSize(fontSize);
  strokeWeight(2);
  fill(255,0,0);
  stroke(255,0,0);
  text(odule, width + additionalWidth, height + additionalHeight);
}

// COMPLEXの文字
function displayGundamSubComplex(width, height, additionalWidth, additionalHeight, fontSize) {
  textSize(fontSize);
  strokeWeight(2);
  fill(255,0,0);
  stroke(255,255,255);
  text(complex, width + additionalWidth, height + additionalHeight);
}

function displayConsoleNect(){
  stroke(33,255,255);
  fill('rgba(0,0,160, 0.6)');
  strokeWeight(1);
  rect(widthPosition(-510) , heightPosition(-155), widthPosition(370) , heightPosition(365));
}

function displayGadges(displayCount) {
  displayGadge(-120, -140, 460, 90, displayCount, 120, 16)
  displayGadge(-120, -10, 460, 90, displayCount, 60, 120)
  displayGadge(-120, 120, 460, 90, displayCount, 20, 80)
  
  fill(255,255,255);
  textSize(18);
  strokeWeight(1);
  stroke(255,255,255);
  text("CENTRAL  CONNECTION  CIRCUIT", -113, -120);
  text("RATE  OF  ", -113, 10);
  text("REACTOR  CORE  OPENED", -113, 140);
}

function displayGadge(width, height, widthLength, heightLength, displayCount, redGadgeInit, yellowGadgeInit) {
  maxWidth = width + widthLength
  maxHeight = height + heightLength
  strokeWeight(1);
  stroke(0,0,160);
  fill(0,128,128);
  rect(width, height, widthLength, heightLength);
  quad(width, height, width, height - 15, width + 50, height - 15, width + 70, height)
  quad(maxWidth, maxHeight, maxWidth, maxHeight + 15, maxWidth - 50, maxHeight + 15, maxWidth - 70, maxHeight)
  
  strokeWeight(1);
  stroke(0,128,128);
  fill(255,255,255);
  quad(width + 1, height - 1, width + 1 , height - 14, width + 49, height - 14, width + 67, height - 1)
  quad(maxWidth - 1 , maxHeight + 1, maxWidth - 1, maxHeight + 14, maxWidth - 49, maxHeight + 14, maxWidth - 67, maxHeight + 1)
  
  strokeWeight(3);
  stroke(0,0,64);
  fill(0,0,100);
  rect(width + 3, height + 30, widthLength - 6, 45);
  
  strokeWeight(0);
  fill(100,149,237);
  quad(maxWidth - 5, height + 32, maxWidth - 15, height + 32, maxWidth - 8, height + 53, maxWidth - 5, height + 53);
  quad(maxWidth - 5, height + 72, maxWidth - 15, height + 72, maxWidth - 8, height + 51, maxWidth - 5, height + 51);
  textSize(15);
  strokeWeight(2);
  stroke(100,149,237);
  text("0000", maxWidth - 45, height + 57);
  
  strokeWeight(1);
  stroke(100,149,237);
  noFill();
  rect(width + 4, height + 31, widthLength - 60, 22);
  rect(width + 4, height + 53, widthLength - 60, 22);
  
  fill(100,149,237);
  quad(width + 20, maxHeight - 11, width + 250, maxHeight - 11, width + 200, maxHeight - 5, width + 20, maxHeight - 5);
  quad(width + 270, maxHeight - 9, maxWidth - 20, maxHeight - 9, maxWidth - 20, maxHeight - 3, width + 220, maxHeight - 3);
  
  redGadgeWidth = redGadgeInit + (4 * displayCount) > widthLength - 62 ? widthLength - 62 : redGadgeInit + (4 * displayCount)
  yellowGadgeWidth = yellowGadgeInit + (2 * displayCount) > widthLength - 62 ? widthLength - 62 : yellowGadgeInit + (2 * displayCount)
  displayRedGadge(width + 5, height + 32, redGadgeWidth, 20);
  displayYellowGadge(width + 5, height + 54, yellowGadgeWidth, 20)
}

function displayRedGadge(width, height, widthLength, heightLength){
  fill(243,109,112);
  strokeWeight(0);
  rect(width, height, widthLength, heightLength)
}

function displayYellowGadge(width, height, widthLength, heightLength){
  fill(249,222,57);
  strokeWeight(0);
  rect(width, height, widthLength, heightLength)
}

function displayFolders(displayCount){
  displayFolder(360, -140, 150, 90)
  displayFolder(360, -28, 150, 20)
  displayFolder(360, 15, 150, 75)
  displayFolder(360, 113, 150, 45)
  displayFolder(360, 180, 150, 45)
  
  fill(60,60,60);
  strokeWeight(1);
  stroke(0,0,0);
  rect(362, -120, 146, 50);
  rect(362, 33, 146, 37);
  
  fill(255,255,255);
  textSize(13);
  strokeWeight(1);
  stroke(255,255,255);
  
  text("OPERATION  TIME", 368, -125);
  text("OPTIFINE", 395, -55);
  text("OUTPUT", 400, -13);
  text("NOT  SOURCE", 380, 29);
  text("TARGET", 400, 85);
  text("GRAVITY   SQACE", 370, 138);
  text("REACTIVE   TIME", 370, 200);
  text("VELOCITT", 370, 215);
  
  fill(255,0,0);
  textSize(20);
  strokeWeight(1);
  if(displayCount > 200 ) {
    fill(0,0,190)
    stroke(0,0,255);
  } else {
    fill(255,0,0)
    stroke(255,0,0);
  }
  text("00  00  00  00", 375, -97);
  text("00  00  00  00", 375, -77);
  text("00000000000", 375, 60);
}

function displayFolder(width, height, widthLength, heightLength){
  maxWidth = width + widthLength
  maxHeight = height + heightLength
  fill('rgba(142,158,194, 0.6)');
  
  strokeWeight(0);
  rect(width, height, widthLength, heightLength);
  quad(width, height, width, height - 10, width + 40, height - 10, width + 50, height)
  quad(maxWidth, maxHeight, maxWidth, maxHeight + 10, maxWidth - 40, maxHeight + 10, maxWidth - 50, maxHeight)
}

function displayCubes(displayCount){
  displayCube(-175,240);
  displayCube(175,240);
  
  fill(255,255,255);
  strokeWeight(0);
  textSize(13);
  
  displayCount = displayCount / 30
  for (let i = 0;displayCount >= 7; i++) {
    displayCount = displayCount - 7;
  }
  for (let step = 0; step < 3; step++) {
    logCount = (parseInt(displayCount) + step) % 7
    text(LOG[logCount], -155, 235 + (step * 10));
  }
}

function displayCube(width, height) {
  cubePosition1 = {width: width, height: height - 10};
  cubePosition2 = {width: width - 13, height: height - 5};
  cubePosition3 = {width: width - 13, height: height + 11};
  cubePosition4 = {width: width, height: height + 16};
  cubePosition5 = {width: width + 13, height: height + 11};
  cubePosition6 = {width: width + 13, height: height - 5};
  strokeWeight(0);
  fill(119,254,247)
  quad(cubePosition1.width, cubePosition1.height, cubePosition2.width, cubePosition2.height, width, height, cubePosition6.width, cubePosition6.height);
  fill(31,168,161)
  quad(cubePosition2.width, cubePosition2.height, cubePosition3.width, cubePosition3.height, cubePosition4.width, cubePosition4.height, width, height);
  quad(cubePosition6.width, cubePosition6.height, width, height, cubePosition4.width, cubePosition4.height, cubePosition5.width, cubePosition5.height);
}


//ザフトマークの後ろのふわふわは生存カウントみたいなの作ってそれが減っていくようにし、その間弧を飲まし続けるってのhどうか

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

function displayCounts(displayCount) {
  displayGadgeCount(415, -33, 7, displayCount)
  displayGadgeCount(415, 10, 10, displayCount)
  displayGadgeCount(415, 108, 5, displayCount)
  displayGadgeCount(415, 176, 12, displayCount)
}

function displayGadgeCount(width, height, countRate, displayCount) {
  strokeWeight(0);
  textSize(17);
  gadgeCount = countRate * displayCount
  
  if(gadgeCount > 1000){
    fill(255,255,255);
    text(1000, width, height);
  } else {
    fill(255,255,0);
    text(gadgeCount, width, height);
  }
}

function displayShuwaShuwa() {
  fill('rgba(255,255,255, 0.10)');
  strokeWeight(0);
  randamPi = Math.random() * 360;

  if(SHUWASHUWA.length < 15) {
    SHUWASHUWA.push(new Shuwashuwa(randamPi, randamPi + 0.3));
  }
  for (let step = 0 ; SHUWASHUWA[step] !== undefined ; step++) {
    var shuwashuwa = SHUWASHUWA[step];
    if (shuwashuwa.h > 800) {
      SHUWASHUWA.splice(step,1);
      continue;
    }
    arc(shuwashuwa.x, shuwashuwa.y, shuwashuwa.w, shuwashuwa.h, shuwashuwa.start, shuwashuwa.stop);
    shuwashuwa.addH();
  }
}

class Shuwashuwa {
  constructor(start, stop) {
    this.x = 0;
    this.y = 0;
    this.w = 200;
    this.h = 200;
    this.start = start;
    this.stop = stop;
  }
  addH() {
    this.w = this.w + 25;
    this.h = this.h + 15;
  }
}