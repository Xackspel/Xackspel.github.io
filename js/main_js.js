function clickBut(){
    var p;
    p = document.getElementById("ModP");
    //p.innerHTML = "Hello!";
    //p.innerHTML += "Hello World!";
    //p.innerHTML = p.innerHTML +" <b>Hello Users!</b>";
    p.insertAdjacentHTML("afterend"," New Word");
    console.log(typeof(p));
}