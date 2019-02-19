
//arrays and variables
var salesperson = ["Brad", "Nila", "Joseph", "Kesh", "Lydia", "Devon", "Miller"];

var decSales = [1500, 15000, 30000, 12000, 45000, 25000, 8000];

var janSales = [10000, 25000, 20000, 14000, 30000, 16000, 30000];

var febSales = [8000, 7500, 45000, 10000, 38000, 22000, 15000];

var topCommission = 0;
var topSalesperson = "";



//commision function
function Commission() {


    for (var i = 0; i < salesperson.length; i++) {
        var totalSales = decSales[i] + janSales[i] + febSales[i];
        var commission = 0;


        if (totalSales > 30000) {
            commission = totalSales * .08;
        }
        else if (totalSales > 15000) {
            commission = totalSales * .05;
        }
        else if (totalSales > 10000) {
            commission = totalSales * .03;
        }
        else if (totalSales > 5000) {
            commission = totalSales * .02;
        }
        else {
            commission = totalSales * .01;
        }

        if (commission > topCommission) {
            topCommission = commission;
            topSalesperson = salesperson[i];
        }

        var avgCommission = commission / 3;

        console.log(salesperson[i] + "        $" + commission + "        $" + avgCommission);

    }
}

//function for console log output
function ConsoleLog() {

    console.log("-----------------------------------");
    console.log("Salesperson  Commission  Avg.Commission");
    console.log("-----------------------------------");

    Commission();

    console.log("-----------------------------------");
    console.log("Top salesperson and their commission: " + topSalesperson + " $" + topCommission);
    console.log("-----------------------------------");
}

//execute function
ConsoleLog();
