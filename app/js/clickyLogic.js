$(document).ready(function(){

    $("#submitSurvey").on("click", function(){
        let name = $("#name").val().trim();
        let photo = $("#photo").val().trim();
        let q1 = $("#q1").val().trim();
        let q2 = $("#q2").val().trim();
        let q3 = $("#q3").val().trim();
        let q4 = $("#q4").val().trim();
        let q5 = $("#q5").val().trim();
        let q6 = $("#q6").val().trim();
        let q7 = $("#q7").val().trim();
        let q8 = $("#q8").val().trim();
        let q9 = $("#q9").val().trim();
        let q10 = $("#q10").val().trim();
        
        if (name == null || name == "", 
            photo == null || photo == "",
            q1 == null || q1 == "",
            q2 == null || q2 == "",
            q3 == null || q3 == "",
            q4 == null || q4 == "",
            q5 == null || q5 == "",
            q6 == null || q6 == "",
            q7 == null || q7 == "",
            q8 == null || q8 == "",
            q9 == null || q9 == "",
            q10 == null || q10 == ""
        ) {
            alert("Please fill out all of the fields and questions.");
            return false;
        }
        
        var friendObject = {
            name: name,
            photo: photo,
            answerArray: [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]
        };

        $.ajax({
            type: "POST",
            url: '/api/postfriend', 
            data: JSON.stringify(friendObject),
            dataType: 'json',
            contentType: 'application/json',
            success: function(returnObject){
                console.log(`returned items: ${returnObject.name} - ${returnObject.photo}`)
                $("#friendModal").modal('toggle');
                $("#friendName").html('Your new friend: ' + returnObject.name);
                $("#friendPhoto").attr('src', returnObject.photo);
            }
        });

        // clean up
        $("#name").val("");
        $("#photo").val("");
        $("#q1").val("");
        $("#q2").val("");
        $("#q3").val("");
        $("#q4").val("");
        $("#q5").val("");
        $("#q6").val("");
        $("#q7").val("");
        $("#q8").val("");
        $("#q9").val("");
        $("#q10").val("");
    });

});