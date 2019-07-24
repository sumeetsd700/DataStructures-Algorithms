/**
 * @author Sumeet Dewangan<dewangan.sumeet700@gmail.com>
 * 
 * @description
 *  complexity: O(log n)
 */

const rl = require('../utils/readline-interface')

rl.question('Enter the numbers (separarated by spaces, in ascending order) ', (numbers) => {
    const arr = numbers.split(' ').map(num => parseInt(num))

    rl.question('Enter the number to search: ', (num) => {
        const found = binarySearch(arr, parseInt(num), 0, arr.length - 1);
        if (found === -1) {
            console.log('Not found');
        } else {
            console.log('Found at ', found + 1);
        }

        rl.close()
    })
})

function binarySearch(arr = [], searchKey, low, high) {
    if (low > high || low < 0 || high >= arr.length) {
        return -1;
    }
    
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === searchKey) {
        return mid;
    } else {
        if (searchKey < arr[mid]) {
            return binarySearch(arr, searchKey, low, mid - 1);
        } else {
            return binarySearch(arr, searchKey, mid + 1, high);
        }
    }
}