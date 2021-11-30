/*const sieve = primeSieve(100000);

for (let n = 90001; n < 100000; n += 2) {
	if (sieve.has(n)) {
		continue;
	}
	console.log("Candidate:", n);
	let d = n - 1;
	let s = 0;
	while (d % 2 == 0) {
		d /= 2;
		s++;
	}
	for (let i = 2; i < n - 1; i++) {
		let val = 1;
		for (let j = 0; j < s; j++) {
			for (let k = 0; k < d; k++) {
				val *= i;
				val %= n;
			}
			if (val == 1 || val == n - 1) {
				console.log("Liar:", i);
				break;
			}
		}
	}
}

function primeSieve(n) {
    const vect = Array(n + 1).fill(false);
    const primes = new Set();
    let p = 2,
        nn = Math.sqrt(n);
    while (p <= nn) {
        if (vect[p] == false) {
            primes.add(p);
            for (let i = p ** 2; i <= n; i += p) vect[i] = true;
        }
        p++;
    }
    while (p <= n) {
        if (vect[p] == false) primes.add(p);
        p++;
    }
    return primes;
}*/
let n = 97;
let d = n - 1;
let s = 0;
while (d % 2 == 0) {
    d /= 2;
    s++;
}
console.log(s, d);
for (let i = 2; i < n - 1; i++) {
    // console.log("c", i);
    let val = 1;
    for (let k = 0; k < d; k++) {
        val = (val * i) % n;
    }
    for (let j = 0; j < s; j++) {
        // console.log("a", val);
        if (val == 1 || val == n - 1) {
            console.log(i);
            break;
        }
        val = val ** 2 % n;
    }
}

function pM(i, d, n, s = 1) {
    let val = s;
    for (let k = 0; k < d; k++) {
        val *= i;
        val %= n;
    }
    return val;
}

function pM2(i, d, n) {
    return BigInt(i) ** BigInt(d) % BigInt(n);
}
