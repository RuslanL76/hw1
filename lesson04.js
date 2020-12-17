'use strict';
// 1 задание

function creatObject (num) {
    if (num < 0 || isNaN(num) || num > 999){console.log('Вы не ввели число от 0 до 999');return {};}

        return  {
            units: num % 10,
            decades: Math.trunc(num % 100 / 10),
            hundreds: Math.trunc(num % 1000 / 100),
        }


}
let resObj = creatObject (parseInt(prompt('Введите число от 0 до 999')));
console.log(resObj);

// 2 задание

let buscet = {
    apple : {
        count: 5,
        price: 50,
         total() {
            return (this.count * this.price)} ,
    },
    pear: {
        count: 10,
        price: 70,
        total() {
            return (this.count * this.price)} ,

    },
    plum: {
        count: 8,
        price: 35,
        total() {
            return (this.count * this.price)} ,
    },
    apricot: {
        count: 6,
        price: 100,
        total() {
            return (this.count * this.price)} ,
    },

};

let totalBuscet = buscet.apple.total()+buscet.plum.total()+buscet.pear.total()+buscet.apricot.total();


// 3 задание ( не совсем понял задание, в моем понимании есть объект продукт и в нем несколько функций-методов
// для разных запросов сайта. Правильно?)

const product = {
    price: 20,
    count: 30,
    article: 'ABH',
    volumeM3: 2,
    totalSum(){
        return (this.price*this.count)
    },
    totalVolum(){
        return(this.count*this.volumeM3)
    },
};
let productCart = console.log(product.article);
let buscetSum = product.totalSum();
let orderVolume = product.totalVolum();
