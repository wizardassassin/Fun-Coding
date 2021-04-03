let inputString = "";

process.stdin.on('data', input => {
    inputString += input;
});

process.stdin.on('end', () => {
    inputString = inputString.trim().split(/\n|\s/);
    let sum = Number(inputString.shift())
    sum = sum * ((sum) + 1) / 2;
    inputString.forEach(element => {
        sum -= element;
    });
    process.stdout.write(String(sum));
});