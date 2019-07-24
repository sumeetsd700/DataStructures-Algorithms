/**
 * @author Sumeet Dewangan <dewangan.sumeet700@gmail.com>
 * 
 * @description Improvement over binary search, where elemets are sorted and uniformy distributed.
 *  Binary Search always goes to the middle element to check. 
 *  On the other hand, interpolation search may go to different locations according to the value of the key being searched.
 * 
 * @example if The value of the key is closer to the last element, interpolation search is likely to start search toward the end side.
 * 
 * @summary
 *  The idea of formula is to return higher value of pos when element to be searched is closer to arr[hi]. 
 *  And smaller value when closer to arr[lo]
 *  arr[] ==> Array where elements need to be searched
x     ==> Element to be searched
lo    ==> Starting index in arr[]
hi    ==> Ending index in arr[]
 */
const rl = require('../utils/readline-interface');

function interpolationSearch(arr = [0], low = 0, high = 0, searchKey = 0) {

    if (low > high) {
        return -1;
    }

    while (low <= high && searchKey >= arr[low] && searchKey <= arr[high]) {        
        if (low === high) {
            if (arr[low] === searchKey) {
                return low;
            } else {
                return -1;
            }
        } else {
            let pos = parseInt(low + ( (searchKey - arr[low]) * (high - low) / (arr[high] - arr[low]) ));
            
            if (arr[pos] === searchKey) {
                return pos;
            } else if (arr[pos] < searchKey) {
                low = pos + 1;
            } else {
                high = pos - 1;
            }
        }
    }

    return -1;
}

rl.question('Enter the numbers (separarated by spaces, in ascending order) ', (numbers) => {
    const arr = numbers.split(' ').map(num => parseInt(num))

    rl.question('Enter the number to search: ', (num) => {
        const found = interpolationSearch(arr, 0, arr.length - 1, parseInt(num));

        if (found === -1) {
            console.log('Not found');
        } else {
            console.log('Found at ', found + 1);
        }

        rl.close()
    })
})