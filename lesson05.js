'use strict';






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




