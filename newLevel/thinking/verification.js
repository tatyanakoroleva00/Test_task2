// let arr = [12, 7, 7, 6, 4, 4];
let arr = [20, 20, 15, 12, 10, 8, 8, 5, 2];
// let arr = [18, 2, 11, 7, 2, 7, 13];
let shelf = 20;

let bigArr = [];
let res = shelf;
    for (let i = 0; i < arr.length; i++) {
        res -= arr[i];
        let shelfArr = []; 
        
        if (res < 0) {continue;
        }

        if (res === 0) {
            console.log('found');
            shelfArr.push(arr[i]);
            bigArr.push(shelfArr);
            arr.splice(i, 1);
            i--;
        }

        if (res > 0) {  //let arr = [20, 12, 7, 7, 6, 4, 4];
            k: for (let k = i + 1; k < arr.length; k++) {
                res -= arr[k]; 
                if (res < 0) {
                    res += arr[k];
                    continue;
                }
                if (res === 0) {
                    shelfArr.push(arr[i], arr[k]);
                    bigArr.push(shelfArr);
                    arr.splice(i, 1);
                    arr.splice(k, 1);
                    console.log(arr);
                    break;
                }
                if (res > 0) { //1
                    
                 l: for (let l = k + 1; l < arr.length; l++) {
                        
                        let internalArr = []; //
                        res -= arr[l];

                        if (res > 0) {
                            internalArr.push(arr[l]);
                        } 
                        if (res < 0) {
                            res += arr[l];
                            continue;
                        } 
                        if (res === 0) {
                            console.log('found');
                            if (!internalArr == []) {
                                shelfArr.push(internalArr);
                                console.log('internalArr', internalArr);
                            }
                            shelfArr.push(arr[i], arr[k], arr[l]);
                            bigArr.push(shelfArr);
                            arr.splice(l, 1);
                            arr.splice(k, 1);
                            arr.splice(i, 1);
                            console.log(arr);
                            break l;
                        }
                        internalArr = [];
                    }
                } 
                res += arr[k];
                break k;
            } res += arr[i];
        }
    }

console.log(bigArr);