let tal1;
let tal2;
let tal3;
let inp, button, svaret;
let state=1;
let tryk = true;
let l;
let b;

function setup() {
  createCanvas(500, 400);
  //Finde random afrundede tal mellem 1 og 10
  tal1 = round(random(1,10));
  tal2 = round(random(1,10));
  
  //Her laves inputtet og størrelsen
  inp = createInput(' ');
  inp.size(50);
  
 
  
}

function draw() {
  background(0,0,200);
  
  textAlign(CENTER);
  textSize(50);
  
  
  if(state==1){
  
   //dette er baggrunden til at starte med
  rect(width/12,height/6,width/12*10,height/6*4,20);
  rect(width/12+20,height/6+20,width/12*10-40,height/6*4-40,10);
    
    //Her skrives selve ligningen ind
  text(tal1,150,height/2+25);
  text("+",200,height/2+25);
  text(tal2,250,height/2+25);
  text("=",300,height/2+25);
  text("  ",350,height/2);
  
    //Her indsættes inputtets position
  inp.position(325,height/2-2);
  
    
    //submit knap
  l=385;
  b=height/2-1.5; 
  textSize(15);
    
  rect(l,b,50,20);
  text("Submit",l+25,b+15);
  if(mouseX > l && mouseX < l+50 && mouseY > b && mouseY < b+20 && mouseIsPressed && tryk){
    svar();
    tryk = false;
    
  }
    
  }
  
    //Hvis vi er i andet stadie, skal den skrive "Correct" på skærmen, fordi svaret er rigtigt.
  if(state==2){
    
    //Baggrunden
  rect(width/12,height/6,width/12*10,height/6*4,20);
  rect(width/12+20,height/6+20,width/12*10-40,height/6*4-40,10);
    text("Correct",width/2,height/2+25);
    
    //Next knappen
  rect(420,350,70,40);
  textSize(20);
  text("NEXT",455,375);
  if(mouseX > 420 && mouseX < 420+70 && mouseY > 350 && mouseY < 350+40 && mouseIsPressed){
    state=1;
    tal1 = round(random(1,10));
    tal2 = round(random(1,10));
    tryk = false;
  }
    //For at få submit og input knapperne væk
    l=l+500;
    inp.position(6000,height/2-2);
  }
  
  
  //Hvis vi er i tredje stadie skal den skrive "Wrong" på skærmen, fordi svaret er forkert.
  if(state==3){
    
    //Baggrunden
  rect(width/12,height/6,width/12*10,height/6*4,20);
  rect(width/12+20,height/6+20,width/12*10-40,height/6*4-40,10);
  text("Wrong",width/2,height/2+25);
    
    //Next knappen
  rect(420,350,70,40);
  textSize(20);
  text("NEXT",455,375);
  if(mouseX > 420 && mouseX < 420+70 && mouseY > 350 && mouseY < 350+40 && mouseIsPressed && tryk){
    state=1;
    tal1 = round(random(1,10));
    tal2 = round(random(1,10));
    tryk = false;
  }
    //For at få submit og input knapperne væk
    l=l+500;
    inp.position(6000,height/2-2);
  }
  
}



    //Vi bruger function mouseReleased for at sige at når vi har sluppet vores museknap bliver den igen true så vi kan starte forfra og koden ikke kører i loop.
function mouseReleased(){
  tryk=true;
  


}
  
  //Function svar bliver brugt til at kaldet så vi kan finde ud af om vores svar er rigtigt eller forkert
function svar(){
  const tal3 = inp.value();
  if(tal1+tal2 == tal3){
    state=2;
  }
  
    else{
      state=3;
  }}
  
