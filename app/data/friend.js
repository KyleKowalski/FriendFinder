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

    for (var i = 0; i < newFriend.answerArray.length; i++) {
        let thisDifference = Math.abs(newFriend.answerArray[i] - friendListPerson.answerArray[i]);
        totalDifference += thisDifference;
        console.log(`this difference is: ${thisDifference} for a total of ${totalDifference}`);
    }
    return totalDifference;
}

module.exports = {
    findOurFriend: findOurFriend,
    writeFriendToFile: writeFriendToFile
}