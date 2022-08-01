console.log("Pizza");

let counter = 0;

for (let i = 0; i < 100; i++) {
    counter++;
}

console.log(counter);

counter = 0;

for (let i = 0; i < 100; i++) {
    if (Math.random() < 0.5) {
        counter++;
    }
}

console.log(counter);

function totientSieve(n) {
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

function patritionSieve(n) {
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

console.log(totientSieve(50))
console.log(patritionSieve(50))

const vals = [
    [0, 1],
    [0, 4],
    [0, 9],
    [1, 6],
    [2, 5],
    [3, 6],
    [4, 9],
    [6, 4],
    [8, 1],
];

const equ = [
    [6, 9],
];

const def = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const siz = def.length;
const r = 6;

function problem90(n = -1) {
    let store = [];
    (function gen(arr, ind, len) {
        if (len == r) {
            store.push(arr);
            return;
        }
        while (siz - ind + len >= r) {
            gen([...arr, def[ind]], ind + 1, len + 1);
            ind++;
        }
    })([], 0, 0);
    store = store.map(x => {
        let ret = new Set(x);
        for (const [a, b] of equ) {
            if (ret.has(a)) {
                ret.add(b);
            }
            if (ret.has(b)) {
                ret.add(a);
            }
        }
        return ret;
    });
    let len = store.length;
    let sum = 0;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (canDisplay(store[i], store[j])) {
                sum++;
            }
        }
    }
    return sum;
}

function canDisplay(set1, set2) {
    for (let [f, s] of vals) {
        if (!((set1.has(f) && set2.has(s)) || (set2.has(f) && set1.has(s)))) {
            return false;
        }
    }
    return true;
}

console.log(problem90())