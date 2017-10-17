(function () { //IIFE

    const express = require("express");
    const bodyParser = require("body-parser");
    const path = require("path");
    // const fs = require("fs");
    // var friendList = require("./app/data/friendsList.json");

    const app = express();
    const PORT = 3000;

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });

    // routing reference: https://stackoverflow.com/questions/6059246/how-to-include-route-handlers-in-multiple-files-in-express
    require("./app/routing/htmlRoutes.js")(app);
    require("./app/routing/apiRoutes.js")(app);

    // app.get("/api/getfriendlist", function(req, res) {
    //     // TODO list - or just show the json file?
    //     res.json('hi, this is the friends list... erm... soon it is.');
    // });

    // app.post("/api/postfriend", function(req, res) {
    //     let newFriend = req.body;
    //     console.log(newFriend);
        
    //     // Get our new friend
    //     let returnFriend = findOurFriend(newFriend);

    //     // Store this friend so we have more data points (might as well?  How will this work up on heroku?);  
    //     // TODO RE-ENABLE THIS (once testing is completed);
    //     // writeFriendToFile(newFriend);

    //     res.json(`Here's our return object - this is your matching friend: ${returnFriend}`);
    // });

    // function writeFriendToFile(friendObject) {
    //     console.log(friendObject);
    //     friendList.push(friendObject);
    //     fs.writeFile('./app/data/friendsList.json', JSON.stringify(friendList, null, 2), function(err) {
    //         if (err) {
    //             console.log(err);
    //         }
    //     });
    // }

    // var newFriend = { 
    //     name: 'NewDude',
    //     photo: 'Da Bears',
    //     answerArray: [ '3', '4', '5', '4', '4', '3', '4', '4', '5', '4' ] }

    // findOurFriend(newFriend);

    // function findOurFriend(newFriend) {
    //     let returnFriend = {}; 
    //     let currentMinDifference = 999;
    //     let thisDifference = 999;

    //     for (var i = 0; i < friendList.length; i++) {
    //         // console.log(`comparing: ${friendList[i].name} to our new friend ${newFriend.name}`);
    //         thisDifference = friendCompare(newFriend, friendList[i]);
    //         if (thisDifference < currentMinDifference) {
    //             console.log(`New min match is friend: '${friendList[i].name}' - score of ${thisDifference}`);
    //             currentMinDifference = thisDifference;
    //             returnFriend = friendList[i];
    //         }
    //     }
    //     console.log(`Winner is: ${returnFriend.name}`);
    //     return returnFriend;
    // }

    // function friendCompare(newFriend, friendListPerson) {
    //     let totalDifference = 0;

    //     for (var i = 0; i < newFriend.answerArray.length; i++) {
    //         let thisDifference = Math.abs(newFriend.answerArray[i] - friendListPerson.answerArray[i]);
    //         totalDifference += thisDifference;
    //         console.log(`this difference is: ${thisDifference} for a total of ${totalDifference}`);
    //     }
    //     return totalDifference;
    // }

    // $("#submit").on("click", function(){
    //     // TODO data validation - insure no nulls
    //     friendObject = {
    //         name: $("#name").val(),
    //         photo: $("#photo").val(),
    //         answerArray: [$("#q1").val(), 
    //                     $("#q2").val(), 
    //                     $("#q3").val(), 
    //                     $("#q4").val(), 
    //                     $("#q5").val(), 
    //                     $("#q6").val(), 
    //                     $("#q7").val(), 
    //                     $("#q8").val(), 
    //                     $("#q9").val(), 
    //                     $("#q10").val()]
    //     };
    //     console.log(friendObject);
        
    //     // $.post({url: '/api/postfriend', contentType: 'application/json'}, JSON.stringify(friendObject));
    //     $.post({url: '/api/postfriend', contentType: 'application/json'}, JSON.stringify(friendObject), function(returnObject){
    //         console.log(`returned items: ${returnObject}`);
    //         // TODO do something with the return object (present it on a modal)
    //     })
    //     // TODO clear out all the vals when done
    // });

})(); // IIFE