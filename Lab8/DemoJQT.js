// Your code here!
//JQ DOM Traversal
//$("") will be used as a frame of reference
//parent()
//parents()
//find()
//siblings()
//children()

//Additional Sibling methods 
//next
//nextAll
//nextUntil   

//prev
//prevAll
//prevUntil

//closest


//first
//last
//filter
//not   
//slice


$(function () {  //$(document).ready(function(){})

    console.log("hello");
    $("#button1").on("click", function () {
        $("#content").parent().css("background-color", "purple");
    });

    $("#button2").on("click", function () {
        $("#content").parents().css("font-size", "1.6em");
    });

    $("#button3").on("click", function () {
        $("#content").parentsUntil("#1").css("border", "solid 1px red");
    });

    $("#button4").on("click", function () {
        console.log($("#container").children().length);
    });

    $("#button5").on("click", function () {
        $("#content").siblings().css("color", "green");
    });

    $("#button6").on("click", function () {
        var descendants = $("#content").find("p");//* means all descendants
        descendants.each(function () {
            console.log($(this).html());
        });
    });


    //assignment
    //next sibling of each <p> element
    $("#button7").on("click", function () {
        $("p").next().css({ "color": "blue", "border": "2px solid blue" });
    });
    //previous sibling of id=content
    $("#button8").on("click", function () {
        $("#content").prev().css({ "color": "green", "border": "2px dashed green" });
    });
    //return first ancestor of content that is id=1
    $("#button9").on("click", function () {
        $("#content").closest("#1").css({ "color": "orange", "border": "2px double orange" });
    });
    //first <p> in content
    $("#button10").on("click", function () {
        $("#content p").first().css({ "color": "yellow", "border": "2px inset yellow" });
    });
    //last <p> in content
    $("#button11").on("click", function () {
        $("#content p").last().css({ "color": "pink", "border": "2px groove pink" });
    });
    //all <p> elements in id=content with an odd index number
    $("#button12").on("click", function () {
        $("#content p").filter(":odd").css({ "color": "gray", "border": "2px dotted gray" });
    });
    //<div> elements that do not have id=content
    $("#button13").on("click", function () {
        $("div").not("#content").css({ "color": "red", "border": "2px outset red" });
    });
    //select all <p> elements starting with index number 3
    $("#button14").on("click", function () {
        $("p").slice(3).css({ "color": "purple", "border": "2px solid purple" });
    });
    //reset page
    $("#button15").on("click", function () {
        location.reload();
    });
})