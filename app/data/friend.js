const fs = require("fs");
let friendList = require("./friendsList.json");


function writeFriendToFile(friendObject) {
    console.log(friendObject);
    friendList.push(friendObject);
    fs.writeFile('./app/data/friendsList.json', JSON.stringify(friendList, null, 2), function(err) {
        if (err) {
            console.log(err);
        }
    });
}

function findOurFriend(newFriend) {
    let returnFriend = {}; 
    let currentMinDifference = 999;
    let thisDifference = 999;

    for (var i = 0; i < friendList.length; i++) {
        // console.log(`comparing: ${friendList[i].name} to our new friend ${newFriend.name}`);
        thisDifference = friendCompare(newFriend, friendList[i]);
        if (thisDifference < currentMinDifference) {
            console.log(`New min match is friend: '${friendList[i].name}' - score of ${thisDifference}`);
            currentMinDifference = thisDifference;
            returnFriend = friendList[i];
        }
    }
    console.log(`Winner is: ${returnFriend.name}`);
    return returnFriend;
}

function friendCompare(newFriend, friendListPerson) {
    let totalDifference = 0;
    // const parsedFriend = JSON.parse(newFriend);
    for (var i = 0; i < newFriend.answerArray.length; i++) {
        let thisDifference = Math.abs(newFriend.answerArray[i] - friendListPerson.answerArray[i]);
        totalDifference += thisDifference;
    }
    console.log(`${friendListPerson.name} total difference: ${totalDifference}`);
    return totalDifference;
}

// $("#submitSurvey").click(function(){
//     let name = $("#name").val().trim();
//     let photo = $("#photo").val().trim();
//     let q1 = $("#q1").val().trim();
//     let q2 = $("#q2").val().trim();
//     let q3 = $("#q3").val().trim();
//     let q4 = $("#q4").val().trim();
//     let q5 = $("#q5").val().trim();
//     let q6 = $("#q6").val().trim();
//     let q7 = $("#q7").val().trim();
//     let q8 = $("#q8").val().trim();
//     let q9 = $("#q9").val().trim();
//     let q10 = $("#q10").val().trim();
    
//     if (name == null || name == "", 
//         photo == null || photo == "",
//         q1 == null || q1 == "",
//         q2 == null || q2 == "",
//         q3 == null || q3 == "",
//         q4 == null || q4 == "",
//         q5 == null || q5 == "",
//         q6 == null || q6 == "",
//         q7 == null || q7 == "",
//         q8 == null || q8 == "",
//         q9 == null || q9 == "",
//         q10 == null || q10 == ""
//     ) {
//         alert("Please fill out all of the fields and questions.");
//         return false;
//     }
    
//     var answerArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

//     // console.log(friendObject);
    
//     // $.post({url: '/api/postfriend', contentType: 'application/json'}, JSON.stringify(friendObject));
//     // $.post({url: '/api/friends',    contentType: 'application/json'}, JSON.stringify(newUser));
//     $.post('/api/postfriend', JSON.stringify(name, photo, answerArray), function(returnObject){
//         // console.log(`Returned Items: `)
//         console.log(returnObject);
    
//     }, "json");
//     // $.ajax({
//     //     type: "POST",
//     //     url: '/api/postfriend', 
//     //     data: friendObject, 
//     //     dataType: 'json',
//     //     success: function(returnObject){
//     //     console.log(`returned items: ${returnObject}`)}
//     //     // TODO do something with the return object (present it on a modal)
//     // });
//     // TODO clear out all the vals when done
// });

module.exports = {
    findOurFriend: findOurFriend,
    writeFriendToFile: writeFriendToFile
}