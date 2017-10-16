const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
var friendList = require("./app/data/friendsList.json");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});


app.get("/api/getfriendlist", function(req, res) {
    // connection.query(`SELECT * FROM reservationDB`, (err, result) => {
    //     if (err) throw err;
    //     console.log(`returning res`);
        res.json('hi, this is the friends list... erm... soon it is.');
    // });
});

app.post("/api/postfriend", function(req, res) {
    let newFriend = req.body;
    console.log(newFriend);
    
    // Store the friend so we have more data points (might as well?);
    writeFriendToFile(newFriend);

    let returnFriend = findOurFriend(newFriend);
    // TODO some sort of comparison to see if who your new friend is
    // TODO return said friend object
    res.json(`Here's our return object - this is your matching friend: ${returnFriend}`);
});

// function Friend (name, photo, answerArray) {
//     this.name = name;
//     this.photo = photo;
//     this.answerArray = answerArray;
// }

function writeFriendToFile(friendObject) {
    console.log(friendObject);
    friendList.push(friendObject);
    fs.writeFile('./app/data/friendsList.json', JSON.stringify(friendList, null, 2), function(err) {
        if (err) {
            console.log(err);
        }
    });
}

// writeFriendToFile();