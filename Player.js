class Player {
    constructor() {

    }

    getCount() {

        //ref to refer to location in database and store in getCount Ref
        var getCountRef = database.ref('playerCount');

        //create a listener
        getCountRef.on("value", 
        function(data) {
           playerCount = data.val();  //val converts the datasnapshot into javascript object            
        }
        );
    }
        //Updated the playercount
    updateCount(count) {
        // '/' means root in main database
        database.ref('/').update({playerCount: count});
    }
    
    //update the name
    update(name) {
        var playerIndex = "player: " + playerCount;
        database.ref(playerIndex).set({name: name});
    }
}
