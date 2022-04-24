/**
 * Direction:
 * Find the higher value from the array bellow
 *
 * Expected Result:
 * 8
 */
let numbers = [3, 1, 2, 3, 7, 5, 6, 8, 2, 1];

function result(numbers) {
    // Your Code Here
    for (let x = 0; x < numbers.length; x++) {
        for (let i = x + 1; i < numbers.length; i++) {
            if (numbers[x] < numbers[i]) {
                let temp = numbers[x];
                numbers[x] = numbers[i];
                numbers[i] = temp;
            }
        }
    }
    return numbers[0];
}

console.log(result(numbers));