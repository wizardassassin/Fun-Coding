# Project Euler
This place is where I solve [Project Euler](https://projecteuler.net/) problems using [Node.js](https://nodejs.org/).  
## Current Directory
[index.js](./index.js) runs the [solutions](./solutions) from problem 1 to problem X. With the help of some [Node.js documentation](https://nodejs.org/api/async_hooks.html#async-resource-worker-pool), index.js can be ran using multiple threads (Multithreading! Yay!).  
[task_processor.js](./task_processor.js) is the file that evaluates the problem solutions.  
[worker_pool.js](./worker_pool.js) is the file that controls worker threads for multithreading using Node.js.  
[data.json](./data.json) is a data dump for the most recent execution of index.js.  
## Solutions Subdirectory
problemXXX.js is where all the problem solutions reside in.  
[answers.js](./solutions/answers.js) is an array of solutions for the problems.  
[bench.js](./solutions/bench.js) is where I benchmark code to determine the most efficient method of doing something.  
[debug.js](./solutions/debug.js) was a framework for task_processor.js. I still use it to debug the problems I work on.  
[dependency.js](./solutions/dependency.js) is where I keep functions and methods that might seem useful to me later on.  
[index.js](./solutions/index.js) is a depreciated file. I used to use it, but not any more!  
[meta.js](./solutions/meta.js) is a file that writes javascript. Cool, right?  
### Legal
All problems taken from Project Euler are under a Creative Commons Licence:  
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).  
Summary: https://creativecommons.org/licenses/by-nc-sa/4.0/  
Legal: https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode  
Modifications are due to syntactical substitutions.  
All coding solutions are under the [MIT Licence](../LICENSE).  
