function clickBut(){
    var p, i;
    i = 0;
    p = document.getElementById("ModP");
    while(i<10){
        p.insertAdjacentHTML("afterbegin", i);
        i++
    }
}

let timestamp = Date.now();
let year = new Date(timestamp).getFullYear();
console.log(year);
console.log('test');
