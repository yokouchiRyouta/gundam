var CENTER_WINDOW_WIDTH = window.innerWidth / 2;
var CENTER_WINDOW_HEIGHT = window.innerHeight / 2;
function setup(){
  //キャンバスを作成
  createCanvas(windowWidth, windowHeight);
  //背景色
  background(0,0,64);
  // 黄色い外枠
  stroke(255,255,0);
  strokeWeight(10);
  noFill();
  rect(0.02 * windowWidth, 0.02 * windowHeight, 0.96 * windowWidth, 0.96 * windowHeight);
  //オブジェクトの色
  fill(0,255,0);
  strokeWeight(0);
  //キャンバスの中心に直径100pxの丸を描画
  ellipse(width/2,height/2,100);

  zafut_mark(0);


  x = width / 2;
  y = height / 2;
  d = 100;
}

function zafut_mark(x) {
  var mark_top = {width: CENTER_WINDOW_WIDTH - 270, height: CENTER_WINDOW_HEIGHT + 270};
  var mark_bottom = {width: CENTER_WINDOW_WIDTH + 270, height: CENTER_WINDOW_HEIGHT - 270};
  // ザフトのマーク
  strokeCap(SQUARE);
  strokeWeight(35);
  stroke(255,0,0,);
  line(mark_top.width, mark_top.height, mark_bottom.width, mark_bottom.height);

  fill(255,0,0);
  noFill()
  strokeWeight(80);
  arc(windowWidth * 0.5, windowHeight * 0.8, 1500, 1500, PI * 1.4, PI *1.6, OPEN);
}
function draw() {
  aaa()

}
function aaa() {
  fill(200, 80, 100); //塗りつぶしを青色に指定
  noStroke();
  ellipse(x, y, d, d);
  x = x + 1;
}
