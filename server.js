var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

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
    console.log(newFriend.q1);
    // console.log(newReservation.phone);
    // console.log(newReservation.numberOfPeeps);

    // createReservation(newReservation.name, newReservation.phone, newReservation.numberOfPeeps);

    res.end();
});
