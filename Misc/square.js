import _ from "lodash";

const valid = [];
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
(function gen(n, genArr) {
    if (n === 1) {
        modify(_.cloneDeep(genArr));
        return;
    }
    gen(n - 1, genArr);
    for (let i = 0; i < n - 1; i++) {
        arraySwapAtDirt(genArr, n % 2 === 0 ? i : 0, n - 1);
        gen(n - 1, genArr);
    }
})(arr.length, _.cloneDeep(arr));

function arraySwapAtDirt(array, a, b) {
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

function modify(arr) {
    if (
        arr[2] + arr[5] + 10 * (arr[1] + arr[4] + 10 * (arr[0] + arr[3])) ==
            arr[8] + 10 * (arr[7] + 10 * arr[6]) &&
        unique(arr, valid)
    ) {
        // console.log('pushed')
        valid.push(arr);
        // console.log(valid);
    }
}

function unique(arr, valid) {
    // console.log(valid)
    for (const i of valid) {
        let [a1, a2, a3] = arr.slice(-3).sort();
        let [b1, b2, b3] = i.slice(-3).sort();
        // console.log('te21s')
        // console.log(arr.slice(-3))
        // console.log(i.slice(-3))
        if (a1 == b1 && a2 == b2 && a3 == b3) {
            return false;
        }
    }
    return true;
}

console.log(valid);