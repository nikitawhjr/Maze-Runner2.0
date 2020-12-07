class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(980,75,50,50);
    player1.shapeColor="black"
  //player1.addImage("player1",player_img);
    
   player2 = createSprite(455,700,50,50);
   player2.shapeColor="black"
   // player2.addImage("player2", player_img);
    players=[player1,player2];



    line1 = createSprite(displayWidth/2-500,displayHeight/2,50,600);
    line2 = createSprite(displayWidth/2-378,displayHeight/2+300,245,5);
    line3 = createSprite(displayWidth/2+175,displayHeight/2+300,750,5);
    line4 = createSprite(displayWidth/2+547,383,5,600);
    line5 = createSprite(displayWidth/2-125,displayHeight/2-300,750,5);
    line6 = createSprite(1133,82,200,5);
    line7 = createSprite(260,345,5,400);
    line8 = createSprite(223,250,75,5);
    line9 = createSprite(700,615,875,5);
    line10 = createSprite(1140,425,5,225);
    line11 = createSprite(993,316,300,5);
    line12 = createSprite(458,545,400,5);
    line13 = createSprite(410,185,300,5);
    line14 = createSprite(800,517,5,200);
    line15 = createSprite(845,243,5,150);
    line16 = createSprite(500,283,5,200);
    line17 = createSprite(1036,170,5,170);
    line18 = createSprite(1085,170,100,5);
    line19 = createSprite(650,185,5,200);
    line20 = createSprite(500,380,150,5);
    line21 = createSprite(975,418,5,200);
    line22 = createSprite(660,475,275,5);
    line23 = createSprite(650,285,150,5);
    line24 = createSprite(850,170,130,5);
    line25 = createSprite(340,428,5,230);
    line26 = createSprite(350,314,120,5);
    line27 = createSprite(650,418,5,120);
    line28 = createSprite(655,578,5,70);
    line1.shapeColor = "black";
    line2.shapeColor = "black";
    line3.shapeColor = "black";
    line4.shapeColor = "black";
    line5.shapeColor = "black";
    line6.shapeColor = "black";
    line7.shapeColor = "black";
    line8.shapeColor = "black";
    line9.shapeColor = "black";
    line10.shapeColor = "black";
    line11.shapeColor = "black";
    line12.shapeColor = "black";
    line13.shapeColor = "black";
    line14.shapeColor = "black";
    line15.shapeColor = "black";
    line16.shapeColor = "black";
    line17.shapeColor = "black";
    line18.shapeColor = "black";
    line19.shapeColor = "black";
    line20.shapeColor = "black";
    line21.shapeColor = "black";
    line22.shapeColor = "black";
    line23.shapeColor = "black";
    line24.shapeColor = "black";
    line25.shapeColor = "black";
    line26.shapeColor = "black";
    line27.shapeColor = "black";
    line28.shapeColor = "black";
    Reward = createSprite(345,250,50,50);
    Reward.shapeColor="black"

    
  



        }

        maze(){
          
          
        }
    
    play(){
        
                form.hide();


                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1600, 1500);
                 //console.log(allPlayers);
                 var index =0;
                 drawSprites();
                
                
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;

                    // var x = 980;
                     //var y=75;
                    var x = allPlayers[plr].positionX+400;
                     var y=allPlayers[plr].positionY+200;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;

                     player.update();
                       

                     if(index === player.index){
                         console.log(players[index-1]);
                         console.log(line1);
                         players[index-1].shapeColor="red";
                         players[index -1].bounceOff(line1);
                         players[index -1].bounceOff(line2);
                         players[index -1].bounceOff(line3);
                         players[index -1].bounceOff(line4);
                         players[index -1].bounceOff(line5);
                         players[index -1].bounceOff(line6);
                         players[index -1].bounceOff(line7);
                         players[index -1].bounceOff(line8);
                         players[index -1].bounceOff(line9);
                         players[index -1].bounceOff(line10);
                         players[index -1].bounceOff(line11);
                         players[index -1].bounceOff(line12);
                         players[index -1].bounceOff(line13);
                         players[index -1].bounceOff(line14);
                         players[index -1].bounceOff(line15);
                         players[index -1].bounceOff(line16);
                         players[index -1].bounceOff(line17);
                         players[index -1].bounceOff(line18);
                         players[index -1].bounceOff(line19);
                         players[index -1].bounceOff(line20);
                         players[index -1].bounceOff(line21);
                         players[index -1].bounceOff(line22);
                         players[index -1].bounceOff(line23);
                         players[index -1].bounceOff(line24);
                         players[index -1].bounceOff(line25);
                         players[index -1].bounceOff(line26);
                         players[index -1].bounceOff(line27);
                         players[index -1].bounceOff(line28);

                         
                         // to display player name on the basket.

                        }

                        line1.bounce(players);
                        
                        if(line1.isTouching(players)){
                            line1.bounceOff(players);

                        }
            
                    
                     //text to display player score.
                 
                 }
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.positionX += 3
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.positionX -= 3
                    player.update();
                }

                if (keyIsDown(UP_ARROW) && player.index !== null) {
                    player.positionY -= 3
                    player.update();
                }

                if (keyIsDown(DOWN_ARROW) && player.index !== null) {
                    player.positionY += 3
                    player.update();
                }

                //createEdgeSprites();
                


            
               
                 
                  if (player.index !== null) {
                     //fill code here, to destroy the objects. (Use the one in the class project 39)
                     // add the condition to calculate the score. and use update ti update the values in the database.
                  }
                

         
         

    }

    
}