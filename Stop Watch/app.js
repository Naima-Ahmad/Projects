var hr = 0;
var min = 0;
var sec = 0;
var msec = 0;

function start(){
    setInterval(function(){
        
        var a = document.getElementById('msec')
        var b = document.getElementById('sec')
        var c = document.getElementById('min')
        var d = document.getElementById('hr')
        a.innerHTML = msec;
        
    },1000)
}