let arr = [20, 20, 20, 20, 12, 12, 10, 10, 8, 8];
let shelf = 20;

let bigArr = [];
let res = shelf;
for (let i = 0; i < arr.length; i++) {
    let shelfArr = [];
    res -= arr[i];

    if (res === 0) {
        shelfArr.push(arr[i]);
        bigArr.push(shelfArr);
        res += arr[i];
        arr.splice(i, 1);
        --i;
    }
}
console.log(arr);
console.log(bigArr);