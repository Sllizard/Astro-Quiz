const Checkbox1 = document.getElementById("A1");
const Checkbox2 = document.getElementById("A2");
const Checkbox3 = document.getElementById("A3");
const Checkbox4 = document.getElementById("A4");
const submit = document.getElementById("submit");
let score = Number(localStorage.getItem("score"));


if (score == 1){
    document.getElementById("score").innerHTML = score + " point";
}
else{
    document.getElementById("score").innerHTML = score + " points";
}


let a1 = false;

let a2=false;

let a3=false;

let a4=false;



function showResults(){
    if (a1 == false){
        document.getElementById("check1").innerHTML = "Your Answer is correct";
    }
    else {
        document.getElementById("check1").innerHTML = "Your Answer is false";
    }
    if (a2 == false){
        document.getElementById("check2").innerHTML = "Your Answer is correct";
    }
    else {
        document.getElementById("check2").innerHTML = "Your Answer is false";
    }
    if (a3 == true){
        document.getElementById("check3").innerHTML = "Your Answer is correct";
    }
    else {
        document.getElementById("check3").innerHTML = "Your Answer is false";
    }
    if (a4 == false){
        document.getElementById("check4").innerHTML = "Your Answer is correct";
    }
    else {
        document.getElementById("check4").innerHTML = "Your Answer is false";
    }

}

function check(){
    a1= Checkbox1.checked;
    a2= Checkbox2.checked;
    a3= Checkbox3.checked;
    a4= Checkbox4.checked;

    if (a1 == false && a2 == false && a3 == true && a4 == false) {
        score += 1;
        localStorage.setItem("score", score);
        document.getElementById("result").innerHTML = "Good Job!";
    }
    else {
        document.getElementById("result").innerHTML = "Next time you'll get it right";
    }
    showResults();
    submit.remove();
    
}

document.getElementById("submit").onclick = check;


