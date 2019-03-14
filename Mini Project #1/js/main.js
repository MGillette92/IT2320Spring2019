//initialize variables

var squares = ["", "", "", "", "", "", "", "", ""];
var winner = false;
var picks = 0;

//reset button func
function ResetBoard() {

    squares = ["", "", "", "", "", "", "", "", ""];
    winner = false;
    picks = 0;
    document.getElementById("result").innerText = "This is a new game";


    for (var i = 0; i <= 8; i++) {
        document.getElementById(i).innerText = "";
    }
}


//square onclick func
function PopulateSquare(int) {

    if (winner == false) {
        if (squares[int] == "") {

            document.getElementById(int).innerText = "X";
            document.getElementById(int).style.backgroundColor = '00FFFF';
            squares[int] = "X";
            picks++;
        }
        else if (squares[int] !== "") {
            return;
        }

        CheckWinner();
        ComputerPick();

    }
}

//pick for comp after human choice
function ComputerPick() {

    if ((winner == false) && (picks < 9)) {
        randNum = Math.floor((Math.random() * 8) + 0);

        if (squares[randNum] == "") {
            document.getElementById(randNum).innerText = "O";
            squares[randNum] = "O";
            picks++;
        }
        else {
            ComputerPick();
        }

        CheckWinner();
    }
}

//check if winner
function CheckWinner() {
//012
    if ((squares[0] === squares[1]) && (squares[0] === squares[2]) && (squares[0] === squares[2])) {

        if (squares[0] === "X") {
            document.getElementById("result").innerText = "Winner is X";
            winner = true;
        }
        else if (squares[0] === "O") {
            document.getElementById("result").innerText = "Winner is 0";
            winner = true;
        }
    }


//345
    else if ((squares[3] === squares[4]) && (squares[3] === squares[5]) && (squares[4] === squares[5])) {


        if (squares[3] === "X") {
            document.getElementById("result").innerText = "Winner is X";
            winner = true;
        }
        else if (squares[3] === "O") {
            document.getElementById("result").innerText = "Winner is 0";
            winner = true;
        }
    }

//678
    else if ((squares[6] === squares[7]) && (squares[6] === squares[8]) && (squares[7] === squares[8])) {



        if (squares[6] === "X") {
            document.getElementById("result").innerText = "Winner is X";
            winner = true;
        }
        else if (squares[6] === "O") {
            document.getElementById("result").innerText = "Winner is 0";
            winner = true;
        }
    }

//036
    else if ((squares[0] === squares[3]) && (squares[0] === squares[6]) && (squares[3] === squares[6])) {



        if (squares[0] === "X") {
            document.getElementById("result").innerText = "Winner is X";
            winner = true;
        }
        else if (squares[0] === "O") {
            document.getElementById("result").innerText = "Winner is 0";
            winner = true;
        }
    }

//147
    else if ((squares[1] === squares[4]) && (squares[1] === squares[7]) && (squares[4] === squares[7])) {



        if (squares[1] === "X") {
            document.getElementById("result").innerText = "Winner is X";
            winner = true;
        }
        else if (squares[1] === "O") {
            document.getElementById("result").innerText = "Winner is 0";
            winner = true;
        }
    }

//258
    else if ((squares[2] === squares[5]) && (squares[2] === squares[8]) && (squares[5] === squares[8])) {



        if (squares[2] === "X") {
            document.getElementById("result").innerText = "Winner is X";
            winner = true;
        }
        else if (squares[2] === "O") {
            document.getElementById("result").innerText = "Winner is 0";
            winner = true;
        }
    }

//048
    else if ((squares[0] === squares[4]) && (squares[0] === squares[8]) && (squares[4] === squares[8])) {


        if (squares[0] === "X") {
            document.getElementById("result").innerText = "Winner is X";
            winner = true;
        }
        else if (squares[0] === "O") {
            document.getElementById("result").innerText = "Winner is 0";
            winner = true;
        }
    }

//246
    else if ((squares[2] === squares[4]) && (squares[2] === squares[6]) && (squares[4] === squares[6])) {


        if (squares[2] === "X") {
            document.getElementById("result").innerText = "Winner is X";
            winner = true;
        }
        else if (squares[2] === "O") {
            document.getElementById("result").innerText = "Winner is 0";
            winner = true;
        }
    }

    else if ((picks == 9) && (winner == false)) {
        document.getElementById("result").innerText = "Tie Game";
    }

}
