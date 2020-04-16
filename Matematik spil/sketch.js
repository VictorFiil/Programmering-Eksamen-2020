let tal1;
let tal2;
let tal3;
let inp, button, svaret;
let state=1;

function setup() {
  createCanvas(500, 400);
  tal1 = round(random(1,10));
  tal2 = round(random(1,10));
  
  
  svaret = createElement('h2'," ");
  svaret.position(20,5);
  
  inp = createInput(' ');
  inp.input(myInputEvent);
  inp.size(50);
  
  button = createButton('submit');
  button.position(380, height/2-2);
  button.mousePressed(myInputEvent);
  
  inp.position(325,height/2-2);
  textAlign(CENTER);
  textSize(50);
  
  
  
}

function draw() {
  background(0,0,200);
  
  if(state==1){
  rect(width/12,height/6,width/12*10,height/6*4,20);
  
  rect(width/12+20,height/6+20,width/12*10-40,height/6*4-40,10);
  
  text(tal1,150,height/2+25);
  text("+",200,height/2+25);
  text(tal2,250,height/2+25);
  text("=",300,height/2+25);
  text("  ",350,height/2);
  }
  
}
function Svar() {
  const tal3 = inp.value();
  svaret.html("Tallet" + tal3    + "er rigtigt");
  inp.value(' ');
  
  
  
}

function myInputEvent() {
  console.log('you are typing: ', this.value());
  
  if(tal1+tal2 == inp.value()){
    
    print("Correct");
  
    rect(width/12,height/6,width/12*10,height/6*4,20);
  
  rect(width/12+20,height/6+20,width/12*10-40,height/6*4-40,10);
    text("Correct",width/2,height/2+25);}
  
  
  if(tal1+tal2 < inp.value()){
    
    rect(width/12,height/6,width/12*10,height/6*4,20);
  
  rect(width/12+20,height/6+20,width/12*10-40,height/6*4-40,10);
    text("Wrong",width/2,height/2+25);
  }
  if(tal1+tal2 > inp.value()){
    
    rect(width/12,height/6,width/12*10,height/6*4,20);
  
  rect(width/12+20,height/6+20,width/12*10-40,height/6*4-40,10);
    text("Wrong",width/2,height/2+25);
  state=2
  }
}


