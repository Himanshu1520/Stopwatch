const timer = document.querySelector('#screen');
const minute = document.querySelector('#mm');
const second = document.querySelector('#ss');
var count = 0;
const reset = document.querySelector("#reset");
const start = document.querySelector("#start");
const pause = document.querySelector("#pause");

const entries = document.querySelector('.entries');
const timesnap = document.querySelector('#time-snap');

const millisecond = document.querySelector('#ms');

var timerId = null;
var mm = 0;
var ss = 0;
var ms = 0;



// start stopwatch function 

function startfunc(flag) {

    if (flag) {
        start.disabled = true;
        pause.disabled = false;
        reset.disabled = false;
        timesnap.disabled = false;

    }


    // setInterval id for stopping or pausing stopwatch

    timerId = setInterval(function () {


        mm = parseInt(mm);
        ss = parseInt(ss);
        ms = parseInt(ms);

        ms++;

        if (ms == 100) {
            ss = ss + 1;
            ms = 0;
        }

        if (ss == 60) {
            mm = mm + 1;
            ss = 0;
        }

        if (ms < 10) {
            ms = '0' + ms;
        }
        if (ss < 10) {
            ss = '0' + ss;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }


        minute.innerHTML = mm;
        second.innerHTML = ss;
        millisecond.innerHTML = ms;



    }, 10);

}


// Pause function

function pausefunc() {

    clearInterval(timerId);
    pause.disabled = true;
    start.disabled = false;
    timesnap.disabled = true;
    start.innerHTML = "Resume";
}


// Reset function

function resetfunc() {

    mm = 0;
    ss = 0;
    ms = 0;
    start.disabled = false;
    pause.disabled = false;
    timesnap.disabled = true;
    clearInterval(timerId);
    minute.innerHTML = '00';
    second.innerHTML = '00';
    millisecond.innerHTML = '00';
    entries.innerHTML = "";
    count = 0;
    start.innerHTML = "Start"
}


// function for Recording timings in entries div

function timestamp() {

    var p = document.createElement('p');
    count++;
    p.innerHTML = count + "   =>    " + mm + " : " + ss + " : " + ms;
    p.style.color = "white";
    p.style.fontSize = "20";
    p.style.fontWeigt = "100";
    p.style.borderBottom = "1px solid white";
    p.style.margin = "0";
    // console.log(p.innerHTML);
    entries.appendChild(p);
}