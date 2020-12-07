var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2,playerPosition;
var players;
var fruits;
var player_img;
var back_img;

var line1,line2,line3, line4, line5, line6, line7, line8, line9, line10, line11, line12, line13, line14, line15, line16, line17,
 line18, line19, line20, line21, line22, line23, line24, line25, line26, line27,line28,Reward;
// create the variables for the score and displaying scores. and intialize with zero

function preload(){
  back_img = loadImage("images/Back.jpg");
 
}
function setup() {
  createCanvas(displayWidth, displayHeight);
  database = firebase.database();
 // text(mouseX+","+mouseY,mouseX,mouseY)
  game = new Game();
  game.getState();
  game.start();

 
  
  
}

function draw() {
  background("white");

  
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }

}