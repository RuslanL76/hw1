'use strict';

let catal = document.getElementById('catalog')
let corz = document.getElementById('bascet')
catal.innerText = 'Каталог товаров'

let catal1=document.createElement('div')
catal.appendChild(catal1)
catal1.classList.add('catalog1')
let divName = document.createElement('div')
catal1.appendChild(divName)
divName.innerText = 'Наименование : - '
let bName=document.createElement('b')
divName.appendChild(bName)
bName.innerText = 'apple'
let divValue = document.createElement('div')
catal1.appendChild(divValue)
divValue.innerText = 'Количество шт : - '
let bValue=document.createElement('b')
divValue.appendChild(bValue)
bValue.innerText = '3'
let divPrice = document.createElement('div')
catal1.appendChild(divPrice)
divPrice.innerText = 'Цена руб : - '
let bPrice=document.createElement('b')
divPrice.appendChild(bPrice)
bPrice.innerText = '50'
const butt = document.createElement('button');
butt.innerText = 'купить';
catal1.appendChild(butt);

let catal2=document.createElement('div')
catal.appendChild(catal2)
catal2.classList.add('catalog2')
let divName2 = document.createElement('div')
catal2.appendChild(divName2)
divName2.innerText = 'Наименование : - '
let bName2=document.createElement('b')
divName2.appendChild(bName2)
bName2.innerText = 'plum'
let divValue2 = document.createElement('div')
catal2.appendChild(divValue2)
divValue2.innerText = 'Количество шт : - '
let bValue2=document.createElement('b')
divValue2.appendChild(bValue2)
bValue2.innerText = '5'
let divPrice2 = document.createElement('div')
catal2.appendChild(divPrice2)
divPrice2.innerText = 'Цена руб : - '
let bPrice2=document.createElement('b')
divPrice2.appendChild(bPrice2)
bPrice2.innerText = '80'
const butt2 = document.createElement('button');
butt2.innerText = 'купить';
catal2.appendChild(butt2);

let catal3=document.createElement('div')
catal.appendChild(catal3)
catal3.classList.add('catalog3')
let divName3 = document.createElement('div')
catal3.appendChild(divName3)
divName3.innerText = 'Наименование : - '
let bName3=document.createElement('b')
divName3.appendChild(bName3)
bName3.innerText = 'apricot'
let divValue3 = document.createElement('div')
catal3.appendChild(divValue3)
divValue3.innerText = 'Количество шт : - '
let bValue3=document.createElement('b')
divValue3.appendChild(bValue3)
bValue3.innerText = '7'
let divPrice3 = document.createElement('div')
catal3.appendChild(divPrice3)
divPrice3.innerText = 'Цена руб : - '
let bPrice3=document.createElement('b')
divPrice3.appendChild(bPrice3)
bPrice3.innerText = '100'
const butt3 = document.createElement('button');
butt3.innerText = 'купить';
catal3.appendChild(butt3);



const bascet = {
    products: [
        {
            name: 'apple',
            price: 50,
            value: 3,

        },
        {
            name: 'plum',
            price: 80,
            value: 5,
        },
        {
            name: 'apricot',
            price: 100,
            value: 7,
        }
    ],
    totalPrice() {
        return this.products.reduce((sum, nameBF) => {
            return nameBF.price * nameBF.value;
        }, 0);
    },

}

butt.addEventListener("click", function (click){

    alert('В корзине : '+' '+(bascet.products.length)+' '+'товара на сумму'+ bascet.totalPrice() + ' ' +'рублей')

});



