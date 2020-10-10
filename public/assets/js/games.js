$(document).ready(function () {

    function getCobra() {
        $.get("/play:cobra").then(function (data) {
            console.log("Specific user data: \n", data);
            //$(".game_url").add();
            $(".game_name").text("COBRA;");
        });
    }

    // getCobra();
    let imgButton = $(".cobra-game");
    $(imgButton).on("click", getCobra);
});

