const time = Date.now();
import * as problem from "./solutions/index.js"; // It takes such a long time to load this :(
import answers from "./solutions/answers.js"
let arr = Array();
let a = 0;
for (let i in problem) {
    let start = Date.now();
    let result = problem[i]();
    arr.push([result, (result == answers[a]) ? true : answers[a], Date.now() - start, Date.now() - time]);
    a++;
}
console.table(arr);
console.log(["Problem - 1", "Output", "Answer", "Duration", "Elapsed"]);