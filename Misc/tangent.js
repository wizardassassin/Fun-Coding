/*
Calculates if the absolute value of a tangent of an integer is 
greater than the integer from 0 to any value(default: infinity).

The video I got the idea from:
https://www.youtube.com/watch?v=A7eJb8n8zAw
*/
const limit = process.argv[2] || Infinity;

const {
    tan,
    abs,
} = Math;
 
function calculate(a) {
    let i = 0;
    while (i <= a) {
        if (abs(tan(i)) > i)
            console.log(i, tan(i))
        i++;
    }
}

const max = () => {
    let i = 0;
    while (true) {
        if (abs(tan(i)) > i)
            console.log(i, tan(i))
        i++;
    }
};

if (Number(limit) == NaN || limit == Infinity)
    max();
else
    calculate(Number(limit));