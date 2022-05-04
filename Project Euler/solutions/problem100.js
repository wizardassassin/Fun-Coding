/*
// Insert Title Here

// Insert Problem Here

https://projecteuler.net/problem=100

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

export default function problem100(n = 1000000000000) {
    
}

/* 
function problem100(n = 1000000000000) {
    let i = new Decimal(n).mul(2).sub(1).pow(2).add(1).div(2).sqrt(2).ceil();
    while (true) {
        if (i.pow(2).mul(2).sub(1).sqrt().mod(2).eq(1)) {
            return [
                i.add(1).div(2),
                i.pow(2).mul(2).sub(1).sqrt().add(1).div(2),
                i.pow(2).mul(2).sub(1).sqrt(),
                i
            ];
            // return i.add(1).div(2);
            // return i.pow(2).mul(2).sub(1).sqrt().add(1).div(2);
        }
        i = i.add(2);
    }
}
 */