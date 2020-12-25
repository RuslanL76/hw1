'use strict';

// 1задание
let num = 0;

while (num<100){
    if (isPrime(num) ===true ){console.log(num); } num++;}
function isPrime(num) {
    for(let i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num > 1;
}

// 2 задание

let buscet = [
    ['apple', 20, 100],
    ['pear', 30, 200],
    ['plum', 50, 80]
];
 function totalPrice(){
     let result = 0;
    for(let i = 0;i< buscet.length;i++){
    result += (buscet[i][1] * buscet[i][2]);
   }
     return result;
 }
let countBascetPrice = totalPrice();

//3 задание

for (let i = 0; i<=9; console.log(i++)){}



// 4 задание
for(let i = 0; i < 20; i++){
    for (let j = 0; j < 20; j++){
        console.log((i += 'x').slice(1))
    }
}