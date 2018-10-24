function calcSq(){
    var inputNumber, squareNumber;
    inputNumber = document.getElementById("input").value;
    squareNumber = inputNumber*inputNumber;
    alert(squareNumber);
}

var age, young, old;
young = 14;
old = 90;
age = prompt ("How old are you?");
    if (age<=young){
        alert("Your age less then 14.");
    } else if(age>=old){
            alert("Your age more then 90.");
        }


