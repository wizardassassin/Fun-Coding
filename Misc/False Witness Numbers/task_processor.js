import { parentPort, threadId } from "worker_threads";

parentPort.on("message", ({ start, stop, sieve }) => {
    const arr = [];
    for (let n = start; n < stop; n += 2) {
        if (sieve.has(n)) {
            continue;
        }
        const tmpArr = [];
        let d = n - 1;
        let s = 0;
        while (d % 2 == 0) {
            d /= 2;
            s++;
        }
        for (let i = 2; i < n - 1; i++) {
            let val = 1;
            for (let k = 0; k < d; k++) {
                val = (val * i) % n;
            }
            for (let j = 0; j < s; j++) {
                if (val == 1 || val == n - 1) {
                    tmpArr.push(i);
                    break;
                }
                val = val ** 2 % n;
            }
        }
        arr.push([n, tmpArr]);
    }
    parentPort.postMessage({ result: arr, threadId, start, stop });
});
