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
butt2.addEventListener("click", function (click){
    alert('Ваша корзина пуста');
});
butt.addEventListener("click", function (click){

    alert('В корзине : '+' '+(bascet.products.length)+' '+'товара на сумму'+ bascet.totalPrice() + ' ' +'рублей')

});
// 3 задание
const selec = document.querySelector("select");
const opt = document.createElement('option');
const opt1 = document.createElement('option');
const opt2 = document.createElement('option');
const opt3 = document.createElement('option');
const catalog = [
    ['phone', 3, 10000 ],
    ['clock', 5, 3000],
    ['tv', 4, 15000]
]
selec.appendChild(opt);
opt.innerHTML = 'Catalog';
selec.appendChild(opt1);
opt1.innerText=(catalog[0][0]);
selec.appendChild(opt2);
opt2.innerHTML = (catalog[1][0]);
selec.appendChild(opt3);
opt3.innerHTML = (catalog[2][0]);









