




$(document).ready(function () {

    var gamestart = false;
    var img1;
    var img2;
    var pick1 = true;

    var id1;
    var id2;


    $("#messages").text("Click the button to start!");


    //start new game btn
    $("#newGame").on("click", function () {

        if (gamestart == false) {
            console.log("new game clicked");

            gamestart = true;

            $("#messages").text("Let's begin!!! Remember the cards...");

            $("#container img").fadeTo(1000, 1, function () {
                // show imgs
                setTimeout(function () {
                    $("#container img").fadeTo(1000, 0, function () {
                        //fade after 5sec
                        $("#messages").text("Click on any 2 cards to find a match");
                    })
                }, 5000);

            });
        }
    
});

    //img div clicked

$("#container img").on("click", function () {


    if (gamestart == true) {
        if (pick1 == true) {
            $(this).fadeTo("fast", 1, function () {
            })
            img1 = $(this).src;
            id1 = $(this).id;
            pick1 = false;

            console.log(img1);
            console.log(id1);

        }
        else {
            $(this).fadeTo("fast", 1, function () {
            })
            img2 = $(this).src;
            id2 = $(this).id;


            if (img1 == img2) {
                $("#messages").text("Hurray!!! Match found...");
                console.log("match found");
            }
            else {
                $("#messages").text("Oops!!! Please try again...");
                console.log("incorrect match");

                $("#" + id1).fadeTo("fast", 0, function () {
                })
                $("#" + id2).fadeTo("fast", 0, function () {
                })
            }
            pick1 = true;
        }

    }


});






});