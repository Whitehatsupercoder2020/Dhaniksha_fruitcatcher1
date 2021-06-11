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
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];

        }
    
    play(){
        
        form.hide();
       
        Player.getPlayerInfo();
        if(allPlayers!==undefined){
        image(back_img, 0, 0, 1000, 800);
        var x =100;
        var y=200;
        var index =0;
        drawSprites();
        if(fruitGroup.isTouching(players)){
            score=score+5;
            fruitGroup[0].destroy();
          }

        for(var plr in allPlayers){
        
            index = index+1;
            x = 500-allPlayers[plr].distance;
            y=500;
            
            players[index -1].x = x;
            players[index - 1].y = y;

            // Differentiate the main player by printing
            // the name of the player on the basket. 
            textAlign(CENTER);
            textSize(20);
            text(allPlayers[plr].name,players[index-1].x,players[index-1].y+75);
        }
       game.spawnFruits();

        // Give movements for the players using arrow keys
        // Create and spawn fruits randomly

    } 
    }

    end(){
       console.log("Game Ended");
    }
     spawnFruits(){
        console.log("inside")
        if(frameCount % 60 === 0) {
            fruits = createSprite(random(100, 1000), 0, 100, 100);
          fruits.setCollider('circle',0,0,45);      
          fruits.velocityY = 6;    
          var rand = Math.round(random(1,5));
          console.log(rand)
          switch(rand) {
            case 1: fruits.addImage("apple2",fruit1_img);
                    break;
            case 2: fruits.addImage("banana2",fruit2_img);
                    break;
            case 3: fruits.addImage("melon2",fruit3_img);
                    break;
            case 4: fruits.addImage("orange2",fruit4_img);
                    break;
            case 5: fruits.addImage("pine2",fruit5_img);
                    break;
           
            default: break;
          }
         // fruits.scale = 0.2;
          fruits.lifetime = 300;
          fruitGroup.add(fruits);
        }
       }
}