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
            msec = 0;
        }
        else if(sec >= 2){
            min++
            c.innerHTML = min
            sec = 0
        }
        else if(min >= 2){
            hr++
            d.innerHTML = hr
            min = 0
        }

    },10)
}