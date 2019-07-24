/**
 * @author Sumeet Dewangan<dewangan.sumeet700@gmail.com>
 * 
 * @description
 *  complexity: O(n)
 */

const rl = require('../utils/readline-interface');

rl.question('Enter the numbers (separarated by spaces) ', (numbers) => {
    const arr = numbers.split(' ').map(num => parseInt(num))

    rl.question('Enter the number to search: ', (num) => {
        let i = 0;
        for (; i < arr.length; i++) {
            if (arr[i] === parseInt(num)) {
                console.log('Found at', i + 1);
                break;
            }
        }

        if (i === arr.length) {
            console.log('Not Found');
        }

        rl.close();
    });
})