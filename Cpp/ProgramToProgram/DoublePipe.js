// Resorting to this cus I can't find a better option

import { spawn, exec } from "child_process";
import fs from "fs";
import { performance } from "perf_hooks";
import { promisify } from "util";

const { Path1, Path2 } = JSON.parse(
    fs.readFileSync("./.hide.path.json", "utf-8")
);

const runBuild = true;
const runTimes = 10;

const logOutput = true;
const logError = false;
const logExit = false;

const args = "-Og";
const name = "coin_flip_cheater";

console.log({ args, name });

const Path1Parsed = Path1.replaceAll("${args}", args).replaceAll(
    "${name}",
    name
);
const Path2Parsed = Path2.replaceAll("${args}", args).replaceAll(
    "${name}",
    name
);

const promiseExec = promisify(exec);
const promiseSpawn = promisify(spawn);

const shellArgs = {
    shell: "pwsh",
    cwd: "../build",
};
const shellArgs2 = {
    shell: "pwsh",
    cwd: "./",
};

if (runBuild) {
    await build();
}

execute();

// for (let i = 0; i < runTimes; i++) {
//     // execute();
//     await execute();
// }

// Build Programs
async function build() {
    const start = Date.now();
    const buildProgram = promiseExec(Path1Parsed, shellArgs2);
    const buildUser = promiseExec(Path2Parsed, shellArgs2);
    await Promise.all([buildProgram, buildUser]); // Error Handling?
    console.log("Build Time:", Date.now() - start);
}

// Execute Programs
async function execute() {
    let count = 0;
    const start2 = Date.now();
    const programShell = spawn(`./${name}_program.exe`, shellArgs);
    const userShell = spawn(`./${name}_user.exe`, shellArgs);

    programShell.stdout.on("data", (data) => {
        if (logOutput) {
            console.log(`programShell:\n${data.toString().trim()}`); // uh.
            // console.log(`programShell: "${data.toString().trim()}"`); // uh.
        }
        userShell.stdin.write(data);
        //   programShell.stdin.end();
    });

    programShell.stderr.on("data", (data) => {
        if (logError) {
            // console.log(`${data.toString().trim()}`);
            console.log(`programShell-err:\n${data.toString().trim()}`);
        }
    });

    programShell.on("close", (code) => {
        // console.log(`programShell: child process close all stdio with code ${code}`);
    });

    programShell.on("exit", (code) => {
        if (logExit) {
            console.log(`programShell: child process exited with code ${code}`);
        }
        if (++count == 2) {
            console.log("Execute Time:", Date.now() - start2);
            // execute();
        }
    });

    userShell.stdout.on("data", (data) => {
        if (logOutput) {
            console.log(`userShell:\n${data.toString().trim()}`); // uh.
            // console.log(`userShell: "${data.toString().trim()}"`); // uh.
        }
        programShell.stdin.write(data);
    });

    userShell.stderr.on("data", (data) => {
        if (logError) {
            console.log(`userShell:\n${data.toString().trim()}`);
        }
    });

    userShell.on("close", (code) => {
        // console.log(`userShell: child process close all stdio with code ${code}`);
    });

    userShell.on("exit", (code) => {
        if (logExit) {
            console.log(`userShell: child process exited with code ${code}`);
        }
        if (++count == 2) {
            console.log("Execute Time:", Date.now() - start2);
            // execute();
        }
    });
}

process.on("exit", (code) => {
    console.log("Elapsed Time:", Number(performance.now().toFixed(0)));
    console.log(`About to exit with code: ${code}`);
});
