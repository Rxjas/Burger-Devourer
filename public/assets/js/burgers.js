// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    //location reload not working  in ajax call
    $(".change-devour").on("click", function (event) {
        location.reload();
    });

    $(".change-devour").on("click", function (event) {
        var id = $(this).data("id");

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: id
        }).then(
            function () {
                location.reload();
                console.log("Burger has been devoured!")
                // Reload the page to get the updated list
                window.location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#ca").val().trim(),
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete-cat").on("click", function (event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted cat", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
