/**
 * @author Sumeet Dewangan<dewangan.sumeet700@gmail.com>
 * 
 * @description
 *  steps: jumps of size m
 *  complexity: O((n/m) + (m-1))
 *  The best case here will be making jumps of size √n, 
 *      as this will make the value of function (n/m) + (m - 1) minimum = 2√n - 1
 */

const rl = require('../utils/readline-interface');

rl.question('Enter the numbers (separarated by spaces) ', (numbers) => {
    const arr = numbers.split(' ').map(num => parseInt(num))

    rl.question('Enter the number to search: ', (num) => {
        const found = jumpSearch(arr, parseInt(num));
        if (found === -1) {
            console.log('Not found');
        } else {
            console.log('Found at ', found + 1);
        }

        rl.close()
    })
})

function jumpSearch(arr = [], searchKey) {
    let i = 0;
    const arrSize = arr.length;
    const iterationSize = Math.floor(Math.sqrt(arr.length));

    while (((i * iterationSize) < arrSize) && (arr[i * iterationSize] < searchKey)) {
        i++;
    }

    const iterateTill = Math.min(((i+1)*iterationSize), arrSize);
    let j = i*iterationSize;

    for (; j < iterateTill; j++) {
        if (arr[j] === searchKey) {
            return j;
        }
    }

    if (j === iterateTill) {
        return -1;
    }
}