var dog1,dog2,dog;
var database;
var foodleft;
var time,h,m,s;
var total=50;

function preload(){
dog1=loadImage("img1.png");
dog2=loadImage("img2.png");



}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  var foodleft=database.ref("VirtualPet/food")
  foodleft.on("value",readop,showerror)
  dog=createSprite(250,250,20,20);
  dog.addImage(dog1);
  dog.scale=0.3
  
}


function draw() {  
  background("black");
  var connection=window.navigator.onLine;
  time=new Date();
  h=time.getHours();
  m=time.getMinutes();
  s=time.getSeconds();
  fill("white");
  textSize(15);
  text("FOOD LEFT :: "+total,50,50);
  text("TIME::"+h+":"+m+":"+s,200,50)
  if(keyDown(UP_ARROW)){
    dog.addImage(dog2);
    writeP(1);
}
if(connection){

}
else{
  alert("Connection lost!!");
  alert("TRYING TO RECONNECT.");
}

  
  
  drawSprites();
  

}
function writeP(m){
  database.ref("VirtualPet").set({
    'food':total-m,
  });
  

}
function readop(data){
total=data.val();
}
function showerror(){
  alert("SOMETHING WENT WRONG!!");
  }
  function reset(){
    if(total===0||total<0){
    writeP(-50);
    dog.addImage(dog1)
    }
    else{

    }
  }
  function feed(){

    dog.addImage(dog2);
    writeP(1)
    change();
  }