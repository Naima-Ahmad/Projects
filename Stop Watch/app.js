var hr = 0;
var min = 0;
var sec = 0;
var msec = 0;
var a = document.getElementById('msec')
var b = document.getElementById('sec')
var c = document.getElementById('min')
var d = document.getElementById('hr')

function start(){
    setInterval(function(){
        msec++       
        a.innerHTML = msec;
        if(msec >= 100){
            sec++
            b.innerHTML = sec;
        }
    },10)
}