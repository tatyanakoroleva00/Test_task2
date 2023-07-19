
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
            console.log("There are no subsets with sum "+ sum);
            return;
        }
        //  Now recursively traverse dp[][] to find all
        //  paths from dp[n-1][sum]
        p = [];
        printSubsetsRec(arr, n-1, sum, p);
    }
    
    // arr = [12, 7, 7, 6, 4, 4];
    arr = [20, 20, 15, 4, 7, 6, 8];
    
    n = arr.length;
    sum = 20;
    printAllSubsets(arr, n, sum);



//bigArr - с произвольными данными

2. // Compare two arrays and remove duplicates

let shelf = [];
for (let i = 0; i < bigArr.length; i++) {
    let inn = bigArr[i];
    if (inn.every((a) => arr.includes(a))) {
        shelf.push(inn);
        for (let k = 0; k < inn.length; k++) {
            for (let m = 0; m < arr.length; m++) {
                if (inn[k] === arr[m]) {
                    console.log('yes');
                    arr.splice(m, 1);
                    break;
                }
            }
        }

    } else {
        // console.log(inn, 'doesnt include');
    }
}

console.log('left data', arr);
console.log('shelf', shelf);


