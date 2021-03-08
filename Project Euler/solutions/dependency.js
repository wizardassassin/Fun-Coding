export function factorial(n) {
    let ret = 1n;
    n = BigInt(n);
    for (let i = 2n; i <= n; i++)
        ret *= i;
    return ret;
}

let permute;
export function permutation(n, fixed = 0) {
    permute = [];
    Permutation(n, fixed);
    return permute;
}

function Permutation(n, fixed = 0) { // I learned some basic permutations!
    if (fixed >= gLength) {
        permute.push(n);
    } else {
        for (let i = fixed; i <= gLength; i++) {
            let temp = _.cloneDeep(n);
            let a = temp[i];
            temp[i] = temp[fixed];
            temp[fixed] = a;
            Permutation(temp, fixed + 1);
        }
    }
} // Instead of finding all permutations, just find them in order! It would be O(n) instead of O(n!)

export function fullReptendPrime(n) { // Using the work of google and big brain
    let arr = Array.from({
        length: n - 1
    }, (_, a) => 10n ** BigInt(a + 1) % BigInt(n));
    return (new Set(arr).size == arr.length);
}

export function primeLength(a, b) {
    let n = 0;
    while (isPrime(n ** 2 + a * n + b))
        n++;
    return n;
}

export function gcd(a, b) { // Euclid's algorithm??
    if (b == 0)
        return a;
    return gcd(b, a % b); // a mod b = a - b * Math.floor(a / b);
}

export function lcd(a, b) { // some formula
    return Math.abs(a * b) / gcd(a, b);
}

export function palindrome(a) {
    for (let s = 0, e = a.length - 1; s <= e; s++, e--) {
        if (a[s] != a[e])
            return false;
    }
    return true;
}

export function truncatable(a, l = true, r = true) {
    let right = String(a),
        left = right;
    if (r)
        while (right.length > 0) {
            if (!isPrime(right))
                return false;
            right = right.slice(0, -1)
        }
    if (l)
        while (left.length > 0) {
            if (!isPrime(left))
                return false;
            left = left.slice(1)
        }
    return true;
}

export function isPrime(a) {
    if (a < 2) return false;
    for (let i = 2, e = Math.sqrt(a); i <= e; i++)
        if (a % i == 0)
            return false;
    return true;
}

export function nextLexicographicPermutation(a) {
    a = String(a);
    let len = a.length,
        first,
        second;
    for (let s = len - 2; s >= 0; s--) {
        if (a[s] < a[s + 1]) {
            first = s;
            break;
        }
    }
    for (let s = first + 1; s < len; s++)
        if (a[s] > a[first] && (!second || a[s] < a[second]))
            second = s;
    a = swapAt(a, first, second);
    return a.slice(0, first + 1) + a.slice(first + 1).split('').sort().join('');
}

export function swapAt(string, index1, index2) {
    if (index1 < 0 || index2 < 0)
        console.log('may not work with negative numbers')
    if (index1 > index2)
        [index1, index2] = [index2, index1];
    else if (index1 == index2)
        return string;
    return string.slice(0, index1) + string[index2] + string.slice(index1 + 1, index2) + string[index1] + string.slice(index2 + 1);
}

export function wordSum(word) {
    word = word.toLowerCase();
    let acc = 0;
    Array.from(word, (letter) => acc += letter.charCodeAt() - 96); // - 64 if UpperCase. Assumes a = 1
    return acc;
}

export function numString(start, end, interval = 1) { // do a num array
    let acc = "";
    interval = Math.abs(interval);
    while (start <= end)
        acc += start,
        start += interval;
    if (acc === "")
        while (start >= end)
            acc += start,
            start -= interval;
    if (acc === "")
        acc += start;
    return acc;
}

export function nextPrime(a) {
    if (a < 2) return 2;
    if (a < 3) return 3;
    let b = nextMultiple(a, 6);
    if (typeof b === "number")
        while (true) { // Scary Stuff
            if (isPrime(b - 1) && b - 1 > a)
                return b - 1;
            if (isPrime(b + 1))
                return b + 1;
            b += 6;
        }
    return -1;
}

export function prevPrime(a) {
    let b = nextMultiple(a, -6);
    for (; b >= 6; b -= 6) {
        if (isPrime(b + 1) && b + 1 < a)
            return b + 1;
        if (isPrime(b - 1))
            return b - 1;
    }
    if (a > 3) return 3;
    if (a > 2) return 2;
    return -1;
}

export function nextMultiple(a, b) { // Negative b will get the prev multiple
    return Math.ceil(a / b) * b;
}

export function primeFactors(a) {
    if (a < 2)
        return -1;
    let arr = [];
    let fac = 2;
    while (a > 1) {
        while (a % fac == 0) {
            arr.push(fac);
            a /= fac;
        }
        fac = nextPrime(fac);
    }
    return arr;
}

export function distinctPrimeFactors(a) { // Only difference is that it uses a set
    if (a < 2)
        return -1;
    let arr = new Set();
    let fac = 2;
    while (a > 1) {
        while (a % fac == 0) {
            arr.add(fac);
            a /= fac;
        }
        fac = nextPrime(fac);
    }
    return arr;
}

export function distinctPrimeFactorsSum(a) { // Not a big diff
    if (a < 2)
        return -1;
    let arr = 0;
    let fac = 2;
    while (a > 1) {
        if (a % fac == 0) {
            do
                a /= fac;
            while (a % fac == 0);
            ++arr;
        }
        fac = nextPrime(fac);
    }
    return arr;
}

export function primeFactorsSum(a) { // Not a big diff too
    if (a < 2)
        return -1;
    let arr = 0;
    let fac = 2;
    while (a > 1) {
        while (a % fac == 0) {
            ++arr;
            a /= fac;
        }
        fac = nextPrime(fac);
    }
    return arr;
}