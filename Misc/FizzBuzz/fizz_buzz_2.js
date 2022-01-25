let conditions = [
    [3, "Fizz"],
    [5, "Buzz"],
];

for (let i = 1; i <= 100; i++) {
    let output = "";
    for (const [num, val] of conditions) {
        if (i % num == 0) {
            output += val;
        }
    }
    console.log(output || i);
}
