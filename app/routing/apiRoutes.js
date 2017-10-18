var friendLogic = require("../data/friend.js");

module.exports = function(app){

    app.get("/api/getfriendlist", function(req, res) {
        res.sendFile('friendsList.json', { root: './app/data' })
    });

    app.post("/api/postfriend", function(req, res) {
        let newFriend = req.body;
        console.log(newFriend);
        
        // Get our new friend
        let returnFriend = friendLogic.findOurFriend(newFriend);
        // Store this friend so we have more data points (might as well?  How will this work up on heroku?);  
        // TODO RE-ENABLE THIS (once testing is completed);
        // friendLogic.writeFriendToFile(newFriend);

        res.json(returnFriend);
        res.end();
    });

}