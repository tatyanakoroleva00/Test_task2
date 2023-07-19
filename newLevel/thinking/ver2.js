/*VERY GOOD. ON LEVEL 2 DONE. ARR[i] + ARR[k]*/ //COMPLETE

let arr = [12, 12, 10, 10, 8, 8];
let shelf = 20;

let bigArr = [];
let res = shelf;
for (let i = 0; i < arr.length; i++) {
    let shelfArr = [];
    res -= arr[i];
    console.log(res, 'res'); //20 - 12
    if (res === 0) {
        shelfArr.push(arr[i]);
        bigArr.push(shelfArr);
        res += arr[i];
        arr.splice(i, 1);
        --i;
    }
    if (res < 0) {
        res += arr[i];
        continue;
    }
    if (res > 0) {
        for (let k = i + 1; k < arr.length; k++) {
            res -= arr[k];
            if (res < 0) {
                res += arr[k];
                console.log('oups, less than zero', arr[i], res, arr[k]);
                continue;
            } 
            if (res === 0) {
                console.log('match', arr[k]);
                shelfArr.push(arr[i], arr[k]);
                console.log(arr.indexOf(arr[k]));
                bigArr.push(shelfArr);
                shelfArr = [];
                arr.splice(k, 1);
                arr.splice(i, 1);
                res = shelf;
                console.log(res);
                console.log('arr', arr);
                console.log('shelfArr', shelfArr);
                i--;
                break;
            }
            res += arr[k];
            
        }
    }
    


}
// console.log(arr);
console.log(bigArr);