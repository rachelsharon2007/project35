var happyDog, dogImg1, dogImg2;
var foodS, foodStock
var database

function preload()
{
  dogImg1 = loadImage("images/dogImg.png");
  dogImg2 = loadImage("images/dogImg1.png");

  
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  
  dog = createSprite(200,200,160,160);
  dog.addImage("dogImg1");
  dog.scale=0.15;
  

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20);
  
}


function draw() {  
 
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogImg2);

}


  drawSprites();
  
  fill("black");
  stroke("white");
  text("FOOD REMAINING:"+foodS,170,200);
  textSize(15);
  text("NOTE: Press UP_ARROW key To Feed Milly Milk",130,10,300,20);
}
  //add styles here

  function readStock(data){
    foodS = data.val();
  }

  function writeStock(x){
      if(x<=0){
        x=0;
      }else{
        x=x-1;
      } 
    database.ref('/').update({
    Food:x
    })
  }





