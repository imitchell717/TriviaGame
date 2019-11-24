function check(){

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var correct = 0;

    if (question1 == "King Ossie II"); {
        correct++;
}
    if (question2 == "Ghana in 1952"); {
        correct++;
}
    if (question3 == "Culture"); {
        correct++;
    }

var messages = ["Oh You Think You Lit", "You Almost Won It All", "You Really Need To Read More"];

var pictures = ["img/lostOdog.gif"];

var range;

    if (correct < 1) {
        range = 2;
    }

    if (correct > 0 && correct < 3) {
        range = 1;
    }

    if (correct > 2) {
        range = 0;
    }

document.getElementById("after-submit").style.visibility = "visible";

document.getElementById("messages").innerHTML = messages[range];
document.getElementById("number-correct").innerHTML = "You got " + correct + " correct";
document.getElementById("picture").src = pictures[range];
}