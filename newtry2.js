/*Изначальные статичные данные*/
// let items = [774, 214, 694, 321, 674, 527, 120, 567];
// const shelfLength = 1310;
// let sortedItems = items.sort((a, b) => b - a);

/***************************************************ЭТАПЫ РАБОТЫ***************************************************/
/****************************SIMULATOR - INTERACTIVE FORM CREATED *************************/
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
    label.innerHTML = 'Box size (mm) &nbsp;';

    const measurement = document.createElement('input');
    measurement.type = 'number';
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

const bigArr = []; /*[ [] [] [] ]*/ 

function getData() {
    const submitBtn = document.querySelector('.submitBtn');
    const regExp = /^[0-9]{1,4}$/;

    submitBtn.addEventListener('click', () => {
        let shelfSize = document.querySelector('#shelfSize');
        let elements = document.querySelectorAll('.measurement');
        let shelfLength = shelfSize.value;

    // let arr = [ 4, 4, 12, 16, 20, 19, 16, 15];
        let arr = [];
        console.log(arr);
        for (i = 0; i < elements.length; i++) {
            let elemValue = Number(elements[i].value);
            arr.push(elemValue);
        }

        let sortedItems = arr.sort((a, b) => b - a);
        console.log(sortedItems);

        sortedItemsLength = sortedItems.length;

        // let shelfLength = 20; 

        // console.log(shelfLength, arr, arrLength);


        /* Данная функция необходима, потому как она позволяет находить комбинацию значений. 
    Функция относится к разделу динамичного программирования. Я ее адаптировала под свой код. Теперь часть значений
    выводится в виде полок - та часть, что представляет из себя комбинации значений, а остаток - то, что не помещается
    целиком на полки будет впоследствии обрабатываться и распределяться по полкам. 
     */
    function findFullShelvesAndRemainder(n, arr, sum) {

    var dp = [];
    let bigArr = [];
    
    function display(v){  /*ОТОБРАЖАЕМ ЗНАЧЕНИЯ*/
        // console.log(v+"<br>");s
        bigArr.push(v);
    }
    //  A recursive function to print all subsets with the
    //  help of dp[][]. list p[] stores current subset.
    function printSubsetsRec(arr, i, sum, p){
       
        //  If we reached end and sum is non-zero. We print
        //  p[] only if arr[0] is equal to sum OR dp[0][sum]
        //  is True.
        if (i === 0 && sum !== 0 && dp[0][sum] !== 0){
            p.push(arr[i]);
            display(p);
            p = [];
            return;
        }
        //  If sum becomes 0
        if (i == 0 && sum == 0){
            display(p);
            p = [];
            return;
        }
        //  If given sum can be achieved after ignoring
        //  current element.
        if (dp[i-1][sum]){
            //  Create a new list to store path
            b = [...p];
            printSubsetsRec(arr, i-1, sum, b);
        }
        //  If given sum can be achieved after considering
        //  current element.
        if (sum >= arr[i] && dp[i-1][sum-arr[i]]){
            p.push(arr[i]);
            printSubsetsRec(arr, i-1, sum-arr[i], p);
        }
    }
    //  Prints all subsets of arr[0..n-1] with sum 0.
    function printAllSubsets(arr, n, sum){
        if (n == 0 || sum < 0)
            return;
     
        //  Sum 0 can always be achieved with 0 elements
        for(let i = 0; i < n; i++){
            dp[i]= [];
            for(let j = 0; j < sum+1; j++)
                dp[i].push(false);
        } 
         for(let i = 0; i < n; i++)
            dp[i][0] = true;
     
        //  Sum arr[0] can be achieved with single element
        if (arr[0] <= sum)
            dp[0][arr[0]] = true;
     
        //  Fill rest of the entries in dp[][]
         for(var i = 1; i < n; i++){
             for(let j = 0; j < sum+1; j++){
                if (arr[i] <= j)
                    dp[i][j] = (dp[i-1][j] || dp[i-1][j-arr[i]]);
                else
                    dp[i][j] = dp[i - 1][j];
            }
        }
        if (dp[n-1][sum] == false){
            // console.log("There are no subsets with sum "+ sum);
            return;
        }
        //  Now recursively traverse dp[][] to find all
        //  paths from dp[n-1][sum]
        p = [];
        printSubsetsRec(arr, n-1, sum, p);
    }
    printAllSubsets(arr, n, sum);

    2. // Compare two arrays and remove duplicates. Здесь я использую сравниваю массив с введенными данными пользователя
    //и комбинации чисел. Убираю дубликаты. И оставляю остаток. Заполняю полки и отправляю в массив shelf = []. Остаток
    //отправляю в arr = []; Снова привожу сортирую массив по убыванию дальше.

    let shelf = [];
    for (let i = 0; i < bigArr.length; i++) {
        let inn = bigArr[i];
        if (inn.every((a) => arr.includes(a))) {
            shelf.push(inn);
            for (let k = 0; k < inn.length; k++) {
                for (let m = 0; m < arr.length; m++) {
                    if (inn[k] === arr[m]) {
                        // console.log('yes');
                        arr.splice(m, 1);
                        break;
                    }
                }
            }
    
        } else {
            // console.log(inn, 'doesnt include');
        }
    }
    
    return {'arr' : arr, 'shelves' : shelf};
    // console.log('left data', arr);
    // console.log('shelf', shelf);
    }

    let result = findFullShelvesAndRemainder(sortedItemsLength, sortedItems, shelfLength);

    arr = result.arr;
    let bigArr = [];
    bigArr = result.shelves;

    // console.log(arr, bigArr);

    //Сортирую массив по убыванию
    sortedItems = arr.sort((a, b) => b - a); /* Sorting the second time */

    // buildShelf(sortedItems, shelfLength);
    // createShelves(shelfLength, bigArr);

    /**********************CHECKING ******************/
    if (!shelfLength.match(regExp)) { //Проверка: вводимые данные должны быть числовыми
        alert('The shelf length must be a positive number and not equal to 0');
    } else if (shelfLength > 2500) {
        alert('The shelf length must be less than 2500');
    
    // } else if (sortedItems.length === 0) { //Проверка: должны быть добавлены коробки 
    //     alert('Add some more shelves/boxes'); //P.s. Полки даже могут быть пустыми
    } else if (shelfLength < sortedItems[0]) { //Проверка: полка не меньше размера коробки 
        alert('Shelf length must be bigger than the box size');
    } else if (sortedItems[sortedItems.length - 1] < 0) {
        alert("You can't enter negative numbers"); //No negative numbers
    } else {
                while (sortedItems.length != 0) {
                i = 0;
                buildShelf(sortedItems, shelfLength, bigArr);
                i++;
                }
                createShelves(shelfLength, bigArr);

                submitBtn.style.display = 'none';
                addBtn.style.display = 'none';
                
            }
        
    });

}

getData();

/*********************************************** SHELVES COUNTING*****************************/
// Функция buildshelf() cоздает полку. В нее должны приходить числовые значения, чтобы сумма 
// значений сравнивалась с длиной полки. Идет поиск по массиву подходящих значений.

function buildShelf(sortedItems, shelfLength, bigArr) {
let sum = 0;
let shelf = [];
for (let i = 0; i < sortedItems.length; i++) {
    sum += sortedItems[i];

    if (sum < shelfLength || sum == shelfLength){
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

// const bigArr = []; /*[ [] [] [] ]*/ 

const cabinet = document.querySelector('.cabinet');

function createShelves(shelfLength, bigArr) {

    cabinet.style.width = `${shelfLength}`;
    cabinet.style.border = '1px solid black';

    for (let i = 0; i < bigArr.length; i++) {
        let res = document.createElement('div');
        res.classList = 'shelfCreated';

        res.style.width = `${shelfLength / 3}px`;

        cabinet.appendChild(res);
        
        for (let k = 0; k < bigArr[i].length; k++) {
            let box = document.createElement('div');
            box.classList = 'box';
            
            box.style.width = `${bigArr[i][k] / 3}px`;
            
            box.title = `${bigArr[i][k]}mm & ${i+1}row ${k+1}box`;
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

/*******************************************RESET  **********/
/*Function resetValues() helps to reload the page and to get the data cleared*/
function resetValues () {
    location.reload();
}
const resetBtn = document.querySelector('.resetBtn');
resetBtn.addEventListener('click', resetValues);