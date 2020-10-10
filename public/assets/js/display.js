$(document).ready(function () {

    let submitBtn = $("#submit-btn");

    function displayUser() {
        let userName = $("#username").val();
        console.log(userName);
        let displayUserName = $(".current-user");
        displayUserName.text(userName);
        console.log("display user name \n", displayUserName.val());

    }
    $(document).on("click", displayUser);
});



// function displayUser(userObj) {
//     $(".current-user").text(userObj.name);
// };

// module.exports = displayUser;


// DITCH ALL OF THIS 
// Use handlebars instead
// inside of html-routes in the games post where you have the userObj
// send that userObj data (or just the name) over to games as a handlebar value
// in games.handlebars make the span use that handlebars value
