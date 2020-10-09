<<<<<<< HEAD
$(document).ready(function () {

    const userNameInput = $("#username");
    const userPasswordInput = $("#pwd");
    const submitForm = $("#create-user");
    // userSelect = $("#user-id"); ?

    $(submitForm).on("submit", renderFormSubmit);

    function renderFormSubmit(event) {
        event.preventDefault();
        // event.stopPropagation();
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
        $.ajax("/api/games", {
            type: "POST",
            data: newUser
        }).then(function () {
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
=======
// $(document).ready(function () {

//     const userNameInput = $("#username");
//     const userPasswordInput = $("#pwd");
//     const submitForm = $("#create-user");
//     // userSelect = $("#user-id"); ?

//     // $(submitForm).on("submit", renderFormSubmit);

//     function renderFormSubmit(event) {
//         event.preventDefault();
//         let userNameData = userNameInput.val().trim();
//         let userPasswordData = userPasswordInput.val().trim();

//         if (!userNameData|| !userPasswordData) {
//             return;
//         }

//         let newUser = {
//             userName: userNameData,
//             password: userPasswordData
//         };

//         // function submitUser(user) {
//         //     $.post("/games", user, function () {
//         //         document.location.href = "/games";
//         //     }).done(function(data){
//         //         console.log(data);
//         //     })
            
//         // }

//         // Is this the same?
//         // $.ajax("/api/users", {
//         //     type: "POST",
//         //     data: newUser
//         // }).then(function(){
//         //     console.log("Created New User");
//         //     location.reload();
//         // });
//         submitUser(newUser);
        
//     };

    

    
// });
>>>>>>> 590b8aecf12e6c0b91106479dbc92674f7e32bfa
