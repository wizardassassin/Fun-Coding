// Resorting to this cus I can't find a better option

import { spawn, exec } from "child_process";
import fs from "fs";
import { promisify } from "util";

const { Path1, Path2 } = JSON.parse(
    fs.readFileSync("./.hide.path.json", "utf-8")
);

const promiseExec = promisify(exec);

const shellArgs = {
    shell: "pwsh",
    cwd: "../build",
};

// Build Programs
const start = Date.now();
const buildProgram = promiseExec(Path1, shellArgs);
const buildUser = promiseExec(Path2, shellArgs);
await Promise.all([buildProgram, buildUser]); // Error Handling?
const start2 = Date.now();
console.log("Build Time:", start2 - start);

// Execute Programs
const programShell = spawn("./program.exe", shellArgs);
const userShell = spawn("./user.exe", shellArgs);

programShell.stdout.on("data", (data) => {
    console.log(`programShell: ~${data.toString().trim()}~`); // uh.
    userShell.stdin.write(data);
    //   programShell.stdin.end();
});

programShell.on("close", (code) => {
    // console.log(`programShell: child process close all stdio with code ${code}`);
});

programShell.on("exit", (code) => {
    console.log(`programShell: child process exited with code ${code}`);
});

userShell.stdout.on("data", (data) => {
    console.log(`userShell: ~${data.toString().trim()}~`); // uh.
    programShell.stdin.write(data);
});

userShell.on("close", (code) => {
    // console.log(`userShell: child process close all stdio with code ${code}`);
});

userShell.on("exit", (code) => {
    console.log(`userShell: child process exited with code ${code}`);
});

process.on("exit", (code) => {
    console.log("Execute Time:", Date.now() - start2);
    console.log("Elapsed Time:", Date.now() - start);
    console.log(`About to exit with code: ${code}`);
});
