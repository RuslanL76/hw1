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
let countBascetFruit = 20;
let priceBacetFruit = 100;

let apple = [countBascetFruit, priceBacetFruit].reduce((a,b)=>a*b);
let pear = [countBascetFruit, priceBacetFruit].reduce((a,b)=>a*b);
let plum = [countBascetFruit, priceBacetFruit].reduce((a,b)=>a*b);
let apricot = [countBascetFruit, priceBacetFruit].reduce((a,b)=>a*b);
let priceAllBascet = [apple,pear,plum,apricot].reduce((sum, current) => sum + current, 0);


//3 задание

for (let i = 0; i<=9; console.log(i++)){}



// 4 задание
for(let i = 0; i < 20; i++){
    for (let j = 0; j < 20; j++){
        console.log((i += 'x').slice(1))
    }
}