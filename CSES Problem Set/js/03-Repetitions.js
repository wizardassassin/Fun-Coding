let inputString = "";

process.stdin.on('data', input => {
    inputString += input;
});

process.stdin.on('end', () => {
    inputString = inputString.trim();
    let acc = 0,
        curL,
        curN = 0;
    for (let i = 0, e = inputString.length; i <= e; i++) {
        if (curL != inputString[i])
            acc = Math.max(acc, curN),
            curL = inputString[i],
            curN = 0;
        curN++
    }
    acc = Math.max(acc, curN)
    process.stdout.write(String(acc));
});