let angle = 0
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0)
  rectMode(CENTER)  //畫方形以中心點為座標點
  noFill() //方形不填入顏色
  angleMode(DEGREES) //設定角度單位為0~360
  //frameRate(100) //設定每秒進入draw()函數的次數
}
function draw() {
  background(0); //背景黑
  for(let y=0;y<height;y=y+120){
    for(let x=0;x<width;x = x+120){
      push() //重新設定格式(包含原點(0,0)位置，線條顏色..)，要設調原點(0,0)的位置在(x,y)上
        translate(x,y) //把原點由視窗的左上角移到視窗的中心點
        stroke(255) //線條顏色
        //===============1
        //rotate(angle) //把物件選轉10度的角度，以原點(0,0)作為旋轉基準點
        //rect(0,0,600,600,100) //畫一個方形，在視窗中間，寬與高都為600
        //angle = sin(frameCount) *100 //-100~100
        //===============10
        for(let i=0;i<10;i=i+1) {
          // let r = random(50,255) //抽一個亂數值，介於50(含)與255(不含)間
          // let g = random(50,255) //抽一個亂數值，介於50(含)與255(不含)間
          // let b = random(50,255) //抽一個亂數值，介於50(含)與255(不含)間
          let r = map(sin(frameCount),-1,1,50,255)
          let b = map(cos(frameCount/2),-1,1,50,70)
          let g = map(sin(frameCount/4),-1,1,50,70)
          stroke(r,g,b)
          rotate(angle) //把物件選轉10度的角度，以原點(0,0)作為旋轉基準點
          rect(0,0,100-i*3,100-i*3 ,20) //畫一個方形，在視窗中間，寬與高都為600
          angle = sin(frameCount) *30 //-100~100
        }
      pop() //取消所有設定格式，原點(0,0)回到視窗的左上角
    }
  }
}
