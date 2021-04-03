import {
    performance
} from "perf_hooks";


let test = 1000000;
let arr = Array.from({length: test - 1}, (_, index) => index + 2);

let start, time, result;

start = performance.now();

result = arr

time = performance.now() - start;

arr.push({
    result,
    time
});

console.log(arr)