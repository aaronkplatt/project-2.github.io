$(document).ready(function () {

    function getUsers() {
        $.get("/api/users").then(function (data) {
            console.log("Specific user data: \n", data);
            $(".current-user").text(data.name);
        });
    }

    getUsers();
});