/*Изначальные статичные данные*/
// let items = [774, 214, 694, 321, 674, 527, 120, 567];
// const shelfLength = 1310;
// let sortedItems = items.sort((a, b) => b - a);

/***************************************************ЭТАПЫ РАБОТЫ***************************************************/
/***********************************SIMULATOR - INTERACTIVE FORM CREATED ******************************************/
/* Создание интерактивной панели. 
removeInput() - удаление записи при нажатии на кнопку, addInput() - добавление записи при нажатии на кнопку.
*/ 


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


/**************************************************** DATA IS GOT FROM INPUTS ******************************/
/* Получение введенных данных пользователем. Функция getData() срабатывает после нажатия на кнопку submit. 
Полученные пользователем данные помещаются в массив данных. Далее метод sort сортирует от большего к меньшему значения.
Важно, чтобы значения от пользователя приходили в виде чисел. 
В функцию так же помещается функция buildShelf(), которая создает полки. В нее должны приходить числовые значения, чтобы сумма 
значений сравнивалась с длиной полки. Идет поиск по массиву подходящих значений. Значений помещаются в отдельные массивы, получается многомерный
массив bigArr. 
Есть условие while, которое необходимо для отработки итераций (создание полок и распределения коробок) до того момента, 
пока массив не станет пустым.
Есть функция createShelves(), которая принимает / забирает значения bigArr и длину полки. Создает визуализацию.
*/
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

        createShelves(shelfLength, bigArr);
    });
}
getData();

/*********************************************** SHELVES COUNTING*****************************/
/* Функция buildshelf() cоздает полку. В нее должны приходить числовые значения, чтобы сумма 
значений сравнивалась с длиной полки. Идет поиск по массиву подходящих значений.*/

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
    bigArr.push(shelf);
}

/*********************************************BEAUTIFYING SHELVES**********************/
/* Многомерный массив bigArr - производная от пользовательского массива данных. Внутренние массивы - полки со значениями. 
Function createShelves() работает с размером полки и с массивом полок bigArr. Создает визуальное оформление полок и шкафа.
*/

const bigArr = []; /*[ [] [] [] ]*/ 
console.log(bigArr);

const cabinet = document.querySelector('.cabinet');

function createShelves(shelfLength, bigArr) {

    cabinet.style.width = `${shelfLength}`;
    cabinet.style.border = '1px solid black';


    for (let i = 0; i < bigArr.length; i++) {
        let res = document.createElement('div');
        res.classList = 'shelfCreated';
        res.style.width = `${shelfLength}px`;
        cabinet.appendChild(res);
        
        for (let k = 0; k < bigArr[i].length; k++) {
            let box = document.createElement('div');
            box.classList = 'box';
            box.style.width = `${bigArr[i][k]}px`;
            box.title = `${bigArr[i][k]}mm`;
            res.appendChild(box);

            if (k % 2 === 0) {
                box.style.backgroundColor = 'blue';
            } 

            if (k % 3 === 0) {
                box.style.backgroundColor = 'red';
            }
        
        }
    }
}




// function resetValues () {
//     for (let i = 0; i < allInputs.length; i++) {
//         allInputs[i].value = '1';
//     }
//     // console.log(allInputs.length);
// }
// const resetBtn = document.querySelector('.resetBtn');
// resetBtn.addEventListener('click', resetValues);
// const allInputs = document.querySelectorAll('input[type="text"]');






