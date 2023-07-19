/*VERY GOOD. ON LEVEL 2 DONE. ARR[i] + ARR[k]*/ //COMPLETE

// let arr = [12, 12, 10, 10, 8, 8];
// let arr = [20, 20, 12, 6, 8, 4, 3, 2, 2, 1, 1];
// let arr = [19, 15, 15, 15, 5, 5, 3, 2, 1];
let arr = [12, 7, 7, 6, 4, 4];
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
        shelfArr = [];
        res += arr[i];
        arr.splice(i, 1);
        --i;
    }
    else if (res < 0) {
        res += arr[i];
        continue;
    }
    else if (res > 0) {  //let arr = [12, 7, 7, 6, 4, 4];
        for (let k = i + 1; k < arr.length; k++) {
            res -= arr[k];
            if (res < 0) {
                res += arr[k];
                console.log('oups, less than zero', arr[i], res, arr[k]);
                continue;
            } 
            else if (res === 0) {
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
            else if (res > 0) { //let arr = [12, 7, 7, 6, 4, 4];
                let innerArr = [];
                for (let l = k + 1; l < arr.length; l++) {
                    console.log(res, arr[l]);
                    res -= arr[l];
                    console.log('result l', arr[i], arr[k], arr[l], res);

                    if (res < 0) {
                        res += arr[l];
                        console.log(arr[l], 'fail l');
                        // console.log('result to avoid', res);
                        continue;
                    }
                    else if (res > 0) {
                        innerArr.push(arr[l]);
                        console.log('more than zero l')
                        console.log('inner Arr', innerArr);
                    }

                    else if (res === 0) {
                        console.log('match l');
                        shelfArr.push(arr[i], arr[k], arr[l]);
                        console.log(shelfArr);
                        bigArr.push(shelfArr);
                        shelfArr = [];
                        arr.splice(l, 1);
                        arr.splice(k, 1);
                        arr.splice(i, 1);
                        res = shelf;
                        --i;
                        break;
                    }
                    
                }
                innerArr = [];
            }
            // res += arr[k];
            
        }
    }

}
console.log(arr);
console.log(bigArr);