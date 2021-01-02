class Game {
    constructor() {

    }
    //reads the game state from the database
    getState() {
        //ref is refering to the location of the database-gameState
        var  gameStateRef = database.ref('gameState');

        //on is creating a listener which will keep listening to the changes in the database
        gameStateRef.on("value", 
                function(data) {
                    gameState = data.val();  //val converts the datasnapshot into javascript object
                    
                }
                );
    }

        //will update the damestate in the database in the database to a value passed inside parenthesis
    update(state) {
            // '/' means root in main database
            database.ref('/').update({gameState: state});
        }
    // will start the game and display on screen depending on the state of the game
    start() {
            //if the game state is in wait state(gamestate=0) we are creating a player object and a form object
            if(gameState === 0) {
             player = new Player();
             player.getCount();

             form = new Form();
             form.display();
              
            }
        }

}