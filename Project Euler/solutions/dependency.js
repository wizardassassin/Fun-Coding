import _ from 'lodash';

export function factorial(n) {
    let ret = 1n;
    n = BigInt(n);
    for (let i = 2n; i <= n; i++)
        ret *= i;
    return ret;
}

export function permutation(n, fixed = 0) {
    let permute = [];
    let gLength = n.length - 1;
    (function Permutation(n, fixed = 0) { // I learned some basic permutations!
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
    })(n, fixed); // Instead of finding all permutations, just find them in order! It would be O(n) instead of O(n!)
    return permute;
}



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

export function gcd(a, b) {
    while (b != 0)
        [a, b] = [b, a % b];
    return a;
}

// { // Euclid's algorithm??
//     if (b == 0)
//         return a;
//     return gcd(b, a % b); // a mod b = a - b * Math.floor(a / b);
// }

export function lcm(a, b) { // some formula
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
    if (a <= 1) return false;
    if (a == 2 || a == 3) return true;

    if (a % 2 === 0 || a % 3 === 0) return false;

    for (let i = 5, e = Math.sqrt(a); i <= e; i += 6)
        if (a % i === 0 || a % (i + 2) === 0)
            return false;

    return true;
    /*
    if (a < 2) return false;
    for (let i = 2, e = Math.sqrt(a); i <= e; i++)
        if (a % i == 0)
            return false;
    return true;
    */
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

export function permutations(n, r) {
    return factorial(n) / factorial(n - r);
}

export function combinations(n, r) {
    return permutations(n, r) / factorial(r);
}

export function primeSieve(n) {
    const vect = Array(n + 1).fill(false);
    const primes = Array();
    let p = 2,
        nn = Math.sqrt(n);
    while (p <= nn) {
        if (vect[p] == false) {
            primes.push(p);
            for (let i = p ** 2; i <= n; i += p)
                vect[i] = true;
        }
        p++;
    }
    while (p <= n) {
        if (vect[p] == false)
            primes.push(p);
        p++;
    }
    return primes;
}

export function totientSieve(n) {
    let phi = [...Array(n + 1).keys()];
    let p = 2;
    while (p <= n) {
        if (phi[p] == p) {
            phi[p] = p - 1;
            for (let i = p * 2; i <= n; i += p)
                phi[i] *= (p - 1) / p;
        }
        p++;
    }
    return phi;
}

export function arraySwapAtDirt(array, a, b) {
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

export function arraySwapAt(array, a, b) {
    const deep = _.cloneDeep(array);
    const temp = deep[a];
    deep[a] = deep[b];
    deep[b] = temp;
    return deep;
}

export function heapPermutation(arr) {
    const out = [];
    (function gen(n, genArr) {
        if (n === 1) {
            out.push(_.clone(genArr));
            return;
        }
        gen(n - 1, genArr);
        for (let i = 0; i < n - 1; i++) {
            arraySwapAtDirt(genArr, (n % 2 === 0) ? i : 0, n - 1);
            gen(n - 1, genArr);
        }
    })(arr.length, _.clone(arr));
    return out;
}

export function infiniteContinuedFraction(i) {
    let sqrt = Math.sqrt(i);
    if (Number.isInteger(sqrt))
        return [];
    let m = 0;
    let d = 1;
    let a = Math.floor(sqrt);
    let list = [a];
    let a2 = a * 2;
    do {
        m = d * a - m;
        d = (i - m ** 2) / d;
        a = Math.floor((sqrt + m) / d);
        list.push(a);
    } while (a != a2);
    return list;
}

export function patritionSieve(n) {
    let strip1 = new Array(n);
    let strip2 = new Array();
    let i = 0;
    let k = 1;
    strip2[i] = (k * (3 * k - 1)) / 2;
    while (strip2[i] < n) {
        k = -k;
        strip2[i + 1] = (k * (3 * k - 1)) / 2;
        k = -k + 1;
        strip2[i + 2] = (k * (3 * k - 1)) / 2;
        i += 2;
    }
    strip1[0] = 1n;
    for (let i = 1; i < n; i++) {
        let val = 0n;
        let j;
        let k = 0;
        j = strip2[k++];
        while (j <= i) {
            if (Math.floor((k - 1) / 2) % 2 == 0) val += strip1[i - j];
            else val -= strip1[i - j];
            j = strip2[k++];
        }
        strip1[i] = val;
    }
    return strip1;
}

export function digitSum(n) {
    let sum = 0;
    while (n) {
        sum += Number(n[0]);
        n = n.slice(1);
    }
    return sum;
}

/*
DO: https://en.wikipedia.org/wiki/M%C3%B6bius_inversion_formula
*/