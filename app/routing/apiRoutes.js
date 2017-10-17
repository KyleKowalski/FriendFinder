var friendLogic = require("../data/friend.js");

module.exports = function(app){

    app.get("/api/getfriendlist", function(req, res) {
        // TODO list - or just show the json file?
        res.json('hi, this is the friends list... erm... soon it is.');
    });

    app.post("/api/postfriend", function(req, res) {
        let newFriend = req.body;
        console.log(newFriend);
        
        // Get our new friend
        let returnFriend = friendLogic.findOurFriend(newFriend);

        // Store this friend so we have more data points (might as well?  How will this work up on heroku?);  
        // TODO RE-ENABLE THIS (once testing is completed);
        // friendLogic.writeFriendToFile(newFriend);

        res.json(`Here's our return object - this is your matching friend: ${returnFriend}`);
    });

}