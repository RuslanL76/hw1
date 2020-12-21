'use strict';

// 1 задание
for (let row = 0; row < 8; row++) {
    let div = document.querySelector('table');
    const tr = document.createElement('tr');
    div.appendChild(tr);

    function rowNum(){
        tr.innerText = row+1;

    }
    rowNum();


    for (let col = 0; col < 8; col++) {
        const td = document.createElement('td');
        tr.appendChild(td);
        td.style.textAlign = 'center'
        function colorDesc() {
            if (col % 2 == 1 & row %2 == 0) {
                td.style.backgroundColor = 'grey'

            }
            else if (col %2 == 0 & row %2 == 1){td.style.backgroundColor = 'grey'
            };

        }
        colorDesc();
function letterDesc(){
    let arrLetter = ['A','B','C','D','E','F','G','H'];
    td.innerText = arrLetter[col];


}
        letterDesc()
    }
}

// 2 задание
const divEl = document.querySelector('div');
const butt = document.createElement('button');
butt.innerText = 'купить';
divEl.appendChild(butt);
const butt2 = document.createElement('button');
butt2.innerText = 'отмена';
divEl.appendChild(butt2);
butt2.addEventListener("click", function (click){
    alert('Ваша корзина пуста');
});
butt.addEventListener("click", function (click){
alert('Сумма вашей корзины : '+ bascet.totalPrice() + ' ' +'рублей')
});

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








