var su = document.getElementById('sup')
su.innerHTML = getDay()

var hr = 0;
var min = 0;
var sec = 0;
var msec = 0;
var a = document.getElementById('msec')
var b = document.getElementById('sec')
var c = document.getElementById('min')
var d = document.getElementById('hr')
var interval;




function start(){
interval = setInterval(function(){
        msec++       
        a.innerHTML = msec;
        if(msec >= 100){
            sec++
            b.innerHTML = sec;
            msec = 0;
        }
        else if(sec >= 6){
            min++
            c.innerHTML = min
            sec = 0
        }
        else if(min >= 6){
            hr++
            d.innerHTML = hr
            min = 0
        }
    },10)
    document.getElementById('start').disabled = true;
}

function pause(){
    clearInterval(interval);
    document.getElementById('start').disabled = false;
}

function reset(){
    msec = 0
    sec = 0
    min = 0
    hr = 0
    a.innerHTML = msec
    b.innerHTML = sec
    c.innerHTML = min
    d.innerHTML = hr
}