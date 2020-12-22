$(function () {
    $(".carousel").carousel( { interval: 500 } );

    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            // pause the carousel
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });

    $("#reserveButton").click(function() {
        //$('#reserveModal').modal('toggle');
        $('#reserveModal').modal("show");
    });

    $("#loginButton").click(function() {
        $("#loginButton").attr("data-dismiss", "modal");
        // $('#loginModal').modal("show");
    });

    $("loginButton").click(function() {
        $("#loginButton").attr("data-dismiss", "modal");
    })
});