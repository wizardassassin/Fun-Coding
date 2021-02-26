/*
Code that writes code for you!!! META
When you're too lazy to copy and paste 10 squared lines of code, you make the code do it for you!!!
*/

// Intermediate file laziness
// ----------------------------------------------------------------------------------
const a = (b, c = 3) => {
    let d = '0'.repeat(c - String(b).length) + b;
    return `export { default as problem${d} } from './problem${d}.js';` // Who likes typing this export line 100+ times anyway?
}; // "The shorter your code is, the faster it will run." - "Smart" Person

for (let i = 0; i <= 999; i++) { // You should change 999 to 1000 :)
    break; // Delete this line for the code to run
    console.log(a(i));
}
// ----------------------------------------------------------------------------------


// Problem formatting
// ----------------------------------------------------------------------------------
import * as fs from 'fs';

const p = (q, r = 3) => {
    let s = '0'.repeat(r - String(q).length) + q; // Probably should create a function for doing this, but eh
    let t = `/*
// Insert Title Here

// Insert Problem Here

https://projecteuler.net/problem=${q}

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

export default function problem${q}(n = -1) {
    
}`;
    fs.appendFileSync(`./problem${s}.js`, t);
    return 'Done! Problem ' + q;
};
for (let i = 22; i <= 50; i++) {
    break; // Delete this line for the code to run
    console.log(p(i));
}
// ----------------------------------------------------------------------------------