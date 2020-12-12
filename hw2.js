'use strict';

//1 задание
let a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 прибавляет еденицу и сразу возвращает
d = b++; alert(d);           // 1 b = 2 сначала возвращает 1 а потом b делает=2
c = (2+ ++a); alert(c);      // 5 a=2 из переменной обновленной и +1
d = (2+ b++); alert(d);      // 4 в d записываем 4  а b теперь 3
alert(a);                    // 3 из преобразований которые были выше
alert(b);                    // 3 из преобразований которые были выше

//2 задание

let a = 2;
let x = 1 + (a *= 2);
//x= 5

// 3 задание
function foo(a, b) {
    if (a>=0 && b>=0){
        console.log(a-b);
    }
    if (a<0 && b<0){
        console.log(a*b);
    }
    if (a<0 && b>=0){
        console.log(a+b);
    }

}
foo(5, 6)

//4 задание
//без switch
for (let i = (parseInt(prompt('Введите число от 0 до 15'))); i < 15; i++) {
    console.log(i);
};
//  с использванием switch
function showNum(a) {
    switch (a) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: for (let i =a; i <= 15; i++){console.log(i)};break;

    }

}
showNum(7);

// 5 задание


           function addition(a, b) {
            return a + b;
           }
          let add = addition(2, 3)
           
           function subtraction(a, b) {
               return a - b;
           }
            let sub = subtraction(6, 4);
            
            function multiplication(a, b) {
                return a * b;
            }
            let mult = multiplication(8, 9);

            function division(a, b) {
                return a / b;
            }
           let divis = division(6, 3)

      

// 6 задание

function threeParam(arg1, arg2, operation) {
    switch (operation) {
        case 'addition': return (arg1 + arg2);
        case 'subtraction': return (arg1 - arg2);
        case 'multiplication': return (arg1 * arg2);
        case 'division': return (arg1 / arg2);

    }

}

let operateParam = threeParam(5, 9, 'addition');


// 7 задание
// null это значение (ничего)(пусто), а 0 это число. поэтому они не могут быть равны

//8 задание сделал не сам, не могу понять как это работает, кучу всего прочитал и посмотрел не укладывается в башке

function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

alert( pow(3, 4) );//81
