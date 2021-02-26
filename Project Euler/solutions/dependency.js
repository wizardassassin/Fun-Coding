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
    for (let i = 2, e = Math.sqrt(a); i <= e; i++)
        if (a % i == 0)
            return false;
    return true;
}

export function nextLexicographicPermutation(a) {
    let pre,
        cur,
        ind;
    for (let i = a.length - 1; i >= 0; i--) {
        cur = a[i];
        if (pre > cur) {
            ind = i;
            break;
        }
        pre = cur;
    }
    return a.slice(0, ind) + a[] + a.slice(ind + 1).split('').sort().join('');
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

export class bigFrac {
    constructor(numerator = 0, denominator = 1) {
        this.numerator = BigInt(numerator);
        this.denominator = BigInt(denominator);
    }
    arithmetic(operation = "+", numerator = 0, denominator = 1) {
        switch (operation) {
            case "+":
                this.numerator += BigInt(numerator);
                this.denominator += BigInt(denominator);
                break;
            case "-":

                break;
            case "*":

                break;
            case "/":

                break;
            case "%":

                break;
            case "":

                break;
            case "":

                break;
        }

    }

}