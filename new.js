let items = [774, 214, 694, 321, 674, 527, 120, 567];
const shelfLength = 1310;

let sortedItems = items.sort((a, b) => b - a);

let armour = [];

function buildShelf(sortedItems, shelfLength) {
        let sum = 0;
        let shelf = [];
        for (let i = 0; i < sortedItems.length; i++) {
            sum += sortedItems[i];
            if (sum <= shelfLength){
                shelf.push(sortedItems[i]);
                sortedItems.splice(i, 1);
                --i;
            } else if (sum > shelfLength) {
                sum -= sortedItems[i];
                continue;
            }
        }
        console.log(sum, shelf);
        
    }

while (sortedItems.length != 0) {
    i = 0;
    buildShelf(sortedItems, shelfLength);
    i++;
}




const addBtn = document.querySelector('.add');
const input = document.querySelector('.input-group');

function removeInput() {
    this.parentElement.remove();
}

function addInput() {
    const label = document.createElement('label');
    label.htmlFor = 'measure';
    label.innerHTML = 'Box size (mm) ';

    const measurement = document.createElement('input');
    measurement.type = 'text';
    measurement.maxLength = '4';
    measurement.placeholder = '0';
    measurement.classList = 'measurement';
    measurement.name = 'measure';

    const btn = document.createElement('a');
    btn.className = 'delete';
    btn.innerHTML = '&times';

    btn.addEventListener('click', removeInput);

    const flex = document.createElement('div');
    flex.className = 'boxLine';

    input.appendChild(flex);
    flex.appendChild(label);
    flex.appendChild(measurement);
    flex.appendChild(btn);
}
addBtn.addEventListener('click', addInput);

/***********************************GET DATA ***************/ 
let shelfSize = document.querySelector('#shelfSize');
let submitBtn = document.querySelector('.submitBtn');
let inputData = document.querySelectorAll('.measurement');






submitBtn.addEventListener('click', () => {
    console.log(shelfSize.value);
    console.log(inputData);
})






