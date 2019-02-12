//problem 1
function problem1() {

    var prob1 = 1;

    for (i = 1; i <= 20; i++) {
        console.log(prob1);
        prob1 = prob1 + 5;
    }

}


//problem 2

function problem2() {

    var prob2 = 1;

    for (i = 1; i <= 10; i++) {
        console.log(prob2);
        prob2 = prob2 * 3;
    }

}


//problem 3

function problem3() {

    var prob3 = "Programming websites is fun for everyone";
    var a = 0;
    var e = 0;
    var i = 0;
    var o = 0;
    var u = 0;
    var y = 0;


    prob3.toLowerCase();

    for (count = 0; count < prob3.length; count++) {
        var char = prob3.charAt(count);
        if (char.match(/[aeiou]/)) {
            switch (char) {
                case 'a':
                    a++;
                    break;
                case 'e':
                    e++;
                    break;
                case 'i':
                    i++;
                    break;
                case 'o':
                    o++;
                    break;
                case 'u':
                    u++;
                    break;
            }
        }
    }

    console.log(prob3);
    console.log("a: " + a);
    console.log("e: " + e);
    console.log("i: " + i);
    console.log("o: " + o);
    console.log("u: " + u);
    console.log("y: " + u);

}


problem1();
problem2();
problem3(
