'use strict';

function prtSize() {
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;

    document.getElementById('cw').innerHTML = w;
    document.getElementById('ch').innerHTML = h;
}

window.onload = function() {
    prtSize();
}

window.onresize = function() {
    prtSize();
}
