function calcSq(){
    var inputNumber, squareNumber;
    inputNumber = document.getElementById("input").value;
    squareNumber = inputNumber*inputNumber;
    alert(squareNumber);
}

// //Modal windows
// //Prompt
// var howOldAreYou;
// howOldAreYou = prompt("How old are you?", "");
// alert("You are " + howOldAreYou);

// //confirm
// var admin;
// admin = confirm("Are you Admin?");
// alert(admin);

//What is your name?
var user, pass;
user = prompt("Who are you?", "");
if (user == "Oleksii"){
    alert("Welcome Admin");
    pass = prompt("Enter password", "");
    if (pass == "Dark"){
        alert("Welcome to home page");
    } else if (pass == null){//(*)
        alert("Canceled enetering");
    } else {
        alert("Wrong Password");
    }
}
