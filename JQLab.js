
var hidden = false;


//toggle button
$("#btn1").click(function () {
    if (hidden == false) {
        $(".wrapperDiv").hide();
        hidden = true;    }
    else if (hidden == true) {
        $(".wrapperDiv").show();
        hidden = false;
    }
});


//chessboard button
$("#btn2").click(function () {
    $("#1").text("one");
    $("#2").text("two");
    $("#3").text("three");
    $("#4").text("four");

    $("#1").css("background-color", "black");
    $("#2").css("background-color", "black");
    $("#3").css("background-color", "white");
    $("#4").css("background-color", "white");

    $("#1").css("color", "white");
    $("#2").css("color", "white");
    $("#3").css("color", "black");
    $("#4").css("color", "black");
});

//hover style reset
$(".wrapperDiv").hover(function () {

    $(this).removeAttr("style");
    $(this).text($(this).attr("id"));


    $(this).css("background-color", "yellow");

});

//mouseout reset

$(".wrapperDiv").mouseout(function () {
    $(this).removeAttr("style");
});
