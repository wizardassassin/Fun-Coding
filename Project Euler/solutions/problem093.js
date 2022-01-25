/*
Arithmetic expressions

By using each of the digits from the set, {1, 2, 3, 4}, exactly once, and making use of
the four arithmetic operations (+, −, *, /) and brackets/parentheses,
it is possible to form different positive integer targets.

For example,

8 = (4 * (1 + 3)) / 2
14 = 4 * (3 + 1 / 2)
19 = 4 * (2 + 3) − 1
36 = 3 * 4 * (2 + 1)

Note that concatenations of the digits, like 12 + 34, are not allowed.

Using the set, {1, 2, 3, 4}, it is possible to obtain thirty-one different
target numbers of which 36 is the maximum, and each of the numbers 1 to 28 can
be obtained before encountering the first non-expressible number.

Find the set of four distinct digits, a < b < c < d, for which the longest
set of consecutive positive integers, 1 to n, can be obtained, giving your answer as a string: abcd.

https://projecteuler.net/problem=93

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

export default function problem93(n = 10) {
    let max = 0;
    let ret = "";
    for (let a = 1; a < n; a++) {
        for (let b = a + 1; b < n; b++) {
            for (let c = b + 1; c < n; c++) {
                for (let d = c + 1; d < n; d++) {
                    let testArray = [a, b, c, d];
                    let set = new Set();
                    // Recursively brute forces all possible combinations
                    (function run(val = 0, arr = testArray) {
                        for (let i = 0; i < arr.length; i++) {
                            let val2 = arr[i];
                            let arr2 = arr.slice();
                            arr2.splice(i, 1);
                            run(val + val2, arr2);
                            run(val - val2, arr2);
                            run(val * val2, arr2);
                            run(val / val2, arr2);
                        }
                        if (Number.isInteger(val) && val > 0) {
                            set.add(val);
                        }
                    })();
                    let arr3 = [...set];
                    arr3.sort((a, b) => a - b);
                    var j = 0;
                    for (let i of arr3) {
                        if (i != j + 1) {
                            break;
                        }
                        j++;
                    }
                    if (j > max) {
                        max = j;
                        ret = "" + a + b + c + d;
                    }
                }
            }
        }
    }
    return ret;
}
