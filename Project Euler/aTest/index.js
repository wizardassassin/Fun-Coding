/*

*/

const n = 38;

const sum = Array.from({ length: n }, (x, i) => []);
for (let i = 0; i < n; i++) {
    for (let j = 1; j <= i; j++) {
        let k = i - j;
        for (let l of sum[k]) {
            if (l[0] > j) {
                break;
            }
            sum[i].push(j + "");
        }
    }
    sum[i].push(i + 1 + "");
}

const sum2 = [];
for (let i of sum) {
    const sum3 = Array.from({ length: n }, (x, i) => 0);
    for (let j of i) {
        sum3[j - 1]++;
    }
    sum2.push(sum3);
}
console.table(sum2);
