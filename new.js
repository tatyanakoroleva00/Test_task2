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








