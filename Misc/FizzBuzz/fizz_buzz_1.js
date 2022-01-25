function main(i) {
    let a = i % 3;
    let b = i % 5;
    if (a + b) {
        if (a)
            if (b) return i;
            else return "Buzz";
        return "Fizz";
    }
    return "FizzBuzz";
}

for (let i = 1; i <= 100; i++) console.log(main(i));
