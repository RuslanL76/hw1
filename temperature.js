'use strict';

function f() {
    let TC = +prompt("Введите температуру по цельсию");
    let TF = (9/5)*TC+32;
    alert(`Температура по фаренгейту равна ${TF}`);
}
f();
