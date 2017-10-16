var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");
var friendList = require("./app/data/friendsList.json");

var app = express();
var PORT = 3000;

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});


app.get("/api/getfriendslist", function(req, res) {
    // connection.query(`SELECT * FROM reservationDB`, (err, result) => {
    //     if (err) throw err;
    //     console.log(`returning res`);
        response.json('hi, this is the friends list... erm... soon it is.');
    // });
});

app.post("/api/postsurvey", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newFriend = req.body;
    // console.log(newFriend.q1);
    // console.log(newReservation.phone);
    // console.log(newReservation.numberOfPeeps);

    // createReservation(newReservation.name, newReservation.phone, newReservation.numberOfPeeps);

    res.end();
});

// function Friend (name, photo, answerArray) {
//     this.name = name;
//     this.photo = photo;
//     this.answerArray = answerArray;
// }

function writeFriendToFile() {
    var friendObject = {
        // TODO validation
        name: "bob", //$("#name").val(),
        // TODO validation
        photo: "photo url pending", //$("#photo").val(),
        // TODO validation
        answerArray: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
    };
    console.log(friendObject);
    friendList.push(friendObject);
    fs.writeFile('./app/data/friendsList.json', JSON.stringify(friendList, null, 2), function(err) {
        if (err) {
            console.log(err);
        }
    });
}

writeFriendToFile();