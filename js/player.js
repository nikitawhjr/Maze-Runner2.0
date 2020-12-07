class Player {
    constructor() {
        this.index = 0;
        this.positionX = 0;
        this.name = null;
        this.positionY =0;
        
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

   /* getPosition(){
        var playerPositionRef = database.ref('playerPosition');
        playerPositionRef.on("value", (data)=> {
            playerPosition = data.val();
        });

    }

    updatePosition(){
        database.ref('/').update({
            positionX:this.positionX,
            positionY:this.positionY
        })
    }*/

   

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            positionX: this.positionX,
           positionY:this.positionY,
           index: this.index
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    
}
