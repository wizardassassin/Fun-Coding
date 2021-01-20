/*
Largest prime factor

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

https://projecteuler.net/problem=3
*/

export default function problem3(n = 600851475143) {
    let prime;
    do {
        if (n % 2 == 0) {
            prime = 2;
        } else if (n % 3 == 0) {
            prime = 3;
        } else {
            let skip = false;
            for (let i = 6, end = Math.sqrt(n) + 1; i <= end; i += 6) {
                if (n % (i - 1) == 0) {
                    prime = i - 1;
                    skip = true;
                    break;
                } else if (n % (i + 1) == 0) {
                    skip = true;
                    prime = i + 1;
                    break;
                }
            }
            if (!skip) {
                prime = n;
            }
        }
        n /= prime;
    } while (n > 1)
    return prime;
}
