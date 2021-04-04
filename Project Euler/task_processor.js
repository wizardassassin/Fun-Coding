import {
    parentPort,
    threadId
} from 'worker_threads';

import {
    performance
} from "perf_hooks";

parentPort.on('message', async ({
    Problem,
    answer
}) => {
    const aStart = performance.now(),
        debug = await import(`./solutions/problem${Problem}.js`).catch((res) => {
            throw res;
        }),
        start = performance.now(),
        StartTime = (start - aStart).toFixed(4) + "ms",
        Output = debug.default(),
        Answer = (Output == answer) ? true : answer,
        Runtime = (performance.now() - start).toFixed(4) + "ms";
    parentPort.postMessage({
        Problem,
        StartTime,
        Output,
        Answer,
        Runtime,
        threadId
    });
});