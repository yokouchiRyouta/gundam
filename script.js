var CENTER_WINDOW_WIDTH = 1050;
var CENTER_WINDOW_HEIGHT = 600;
function setup(){
  console.log(windowWidth);
  console.log(windowHeight);
  //キャンバスを作成
  createCanvas(windowWidth, windowHeight);
  //背景色
  background(0,0,64);
  // 黄色い外枠
  stroke(255,255,0);
  strokeWeight(10);
  noFill();
  rect(widthPosition(-1025) , heightPosition(-575), widthPosition(1025), heightPosition(575));
  // //オブジェクトの色
  // fill(0,255,0);
  // strokeWeight(0);
  // //キャンバスの中心に直径100pxの丸を描画
  // ellipse(width/2,height/2,100);

  zaftMark(0);


  x = width / 2;
  y = height / 2;
  d = 100;
}

function zaftMark(x) {
  var mark_left_top = {width: CENTER_WINDOW_WIDTH - 305, height: CENTER_WINDOW_HEIGHT - 270};
  var mark_right_top = {width: CENTER_WINDOW_WIDTH - 305, height: CENTER_WINDOW_HEIGHT + 270};
  var mark_left_bottom = {width: CENTER_WINDOW_WIDTH + 305, height: CENTER_WINDOW_HEIGHT - 270};
  var mark_right_bottom = {width: CENTER_WINDOW_WIDTH + 305, height: CENTER_WINDOW_HEIGHT + 270};
  // ザフトのマーク
  strokeCap(SQUARE);
  strokeWeight(35);
  stroke(255,0,0,);
  line(mark_right_top.width, mark_right_top.height, mark_left_bottom.width, mark_left_bottom.height);

  noFill()
  strokeWeight(80);
  arc(CENTER_WINDOW_WIDTH, CENTER_WINDOW_HEIGHT * 1.6, 1000, 1560, PI * 1.36, PI * 1.65, OPEN);
  arc(CENTER_WINDOW_WIDTH, CENTER_WINDOW_HEIGHT * 0.4, 1000, 1560, PI * 0.36, PI * 0.65, OPEN);

  fill(255,0,0);
  strokeWeight(5);
  // 左上
  triangle(mark_left_top.width + 30, mark_left_top.height - 73, CENTER_WINDOW_WIDTH - 100, CENTER_WINDOW_HEIGHT - 150, mark_left_top.width - 40, mark_left_top.height - 5)
  // 右下
  triangle(mark_right_bottom.width - 30, mark_right_bottom.height + 73, CENTER_WINDOW_WIDTH + 100, CENTER_WINDOW_HEIGHT + 150, mark_right_bottom.width + 45, mark_right_bottom.height)
}
// function draw() {
//   aaa()
//
// }
// function aaa() {
//   fill(200, 80, 100); //塗りつぶしを青色に指定
//   noStroke();
//   ellipse(x, y, d, d);
//   x = x + 1;
// }

// 中心からの横幅指定
function widthPosition(width) {
  return CENTER_WINDOW_WIDTH + width;
}

// 中心からの横幅指定
function heightPosition(height) {
  return CENTER_WINDOW_HEIGHT + height;
}
