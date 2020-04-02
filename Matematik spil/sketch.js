let tal1;
let tal2;
let tal3;

function setup() {
  createCanvas(500, 400);
  tal1 = round(random(1,10));
  tal2 = round(random(1,10));
  print(tal1);
  print(tal2);
  tal3=tal1+tal2+round(random(0,1));
  print(tal3)
  
}

function draw() {
  background(0,0,200);
  textAlign(CENTER);
  textSize(50);
  rect(width/12,height/6,width/12*10,height/6*4,20);
  
  rect(width/12+20,height/6+20,width/12*10-40,height/6*4-40,10);
  
  text(tal1,150,height/2);
  text("+",200,height/2);
  text(tal2,250,height/2);
  text("=",300,height/2);
  text(tal3,350,height/2);
  
  
  /*if(tal1+tal2 == tal3){
    rect(width/12,height/6,width/12*10,height/6*4,20);
  
  rect(width/12+20,height/6+20,width/12*10-40,height/6*4-40,10);
    text("Correct",width/2,height/2);
  
  }
  else{
    rect(width/12,height/6,width/12*10,height/6*4,20);
  
  rect(width/12+20,height/6+20,width/12*10-40,height/6*4-40,10);
    text("Wrong",width/2,height/2);
  }
  */
}

