$(document).ready(function () {

    const userNameInput = $("#username");
    const userPasswordInput = $("pwd");
    const submitForm = $("#create-user");
    // userSelect = $("#user-id"); ?

    $(submitForm).on("submit", renderFormSubmit);

    function renderFormSubmit(event) {
        event.preventDefault();
        let userNameData = userNameInput.val().trim();
        let userPasswordData = userPasswordInput.val().trim();

        if (!userNameInput.val().trim() || !userPasswordInput.val().trim()) {
            return;
        }

        let newUser = {
            userName: userNameData,
            password: userPasswordData
        };

        // Is this the same?
        $.ajax("/api/users", {
            type: "POST",
            data: newUser
        }).then(function(){
            console.log("Created New User");
            location.reload();
        });

        // submitUser(newUser);
    };

    // function submitUser(user) {
    //     $.post("/api/users", user, function () {
    //         window.location.href = "/users";
    //     });
    // }
});