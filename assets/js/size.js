'use strict';

function prtSize() {
    var w = document.body.offsetWidth;
    var h = document.body.offsetHeight;

    document.getElementById('cw').innerHTML = w;
    document.getElementById('ch').innerHTML = h;
}

window.onload = function() {
    prtSize();
}

window.onresize = function() {
    prtSize();
}