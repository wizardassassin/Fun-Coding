let inputString = "";

process.stdin.on('data', input => {
    inputString += input;
});

process.stdin.on('end', () => {
    inputString = String(inputString).trim();
    process.stdout.write(inputString);
    while (inputString > 1) {
        if (inputString % 2)
        inputString = 3 * inputString + 1;
        else
        inputString /= 2;
    process.stdout.write(" " + inputString);
    }
});