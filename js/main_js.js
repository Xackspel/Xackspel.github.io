function addScript(src){
    var script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.appendChild(script);
}
addScript('../js/1.js');
addScript('../js/2.js');
addScript('../js/3.js');
addScript('../js/4.js');
