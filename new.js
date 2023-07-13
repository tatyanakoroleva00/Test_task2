// let items = [774, 214, 694, 321, 674, 527, 120, 567];
// const shelfLength = 1310;
// let sortedItems = items.sort((a, b) => b - a);


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


function getData() {
    const submitBtn = document.querySelector('.submitBtn');

    submitBtn.addEventListener('click', () => {
        let shelfSize = document.querySelector('#shelfSize');
        let elements = document.querySelectorAll('.measurement');
        let arr = [];
        for (i = 0; i < elements.length; i++) {
            let elemValue = Number(elements[i].value);
            arr.push(elemValue);
        }

        let sortedItems = arr.sort((a, b) => b - a);
        let shelfLength = Number(shelfSize.value);

        while (sortedItems.length != 0) {
            i = 0;
            buildShelf(sortedItems, shelfLength);
            i++;
            }
    });
}
getData();

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




