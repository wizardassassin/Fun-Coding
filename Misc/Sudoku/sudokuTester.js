import assert from "assert/strict";
import _ from "lodash";
import sudoku from "./sudoku.js";
import util from "./sudokuUtil.js";

const defaultGrid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
];
assert.deepStrictEqual(util.generateGrid(), defaultGrid);

const rowGrid = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
];
assert.deepStrictEqual(util.isValidRow(rowGrid, 0), true);
assert.deepStrictEqual(util.isValidRow(rowGrid, 1), false);
assert.deepStrictEqual(util.isValidRow(rowGrid, 2), true);

const colGrid = [
    [1, 1, 0, 0, 0, 0, 0, 0, 0],
    [2, 1, 0, 0, 0, 0, 0, 0, 0],
    [3, 0, 0, 0, 0, 0, 0, 0, 0],
    [4, 0, 0, 0, 0, 0, 0, 0, 0],
    [5, 0, 0, 0, 0, 0, 0, 0, 0],
    [6, 0, 0, 0, 0, 0, 0, 0, 0],
    [7, 0, 0, 0, 0, 0, 0, 0, 0],
    [8, 0, 0, 0, 0, 0, 0, 0, 0],
    [9, 0, 0, 0, 0, 0, 0, 0, 0],
];
assert.deepStrictEqual(util.isValidCol(colGrid, 0), true);
assert.deepStrictEqual(util.isValidCol(colGrid, 1), false);
assert.deepStrictEqual(util.isValidCol(colGrid, 2), true);

assert.deepStrictEqual(util.boxToCoords(3, 4), [4, 3]);
assert.deepStrictEqual(util.boxToCoords(5, 2), [1, 8]);

const boxGrid = [
    [1, 2, 3, 1, 1, 0, 0, 0, 0],
    [4, 5, 6, 0, 0, 0, 0, 0, 0],
    [7, 8, 9, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
];
assert.deepStrictEqual(util.isValidBox(boxGrid, 0), true);
assert.deepStrictEqual(util.isValidBox(boxGrid, 1), false);
assert.deepStrictEqual(util.isValidBox(boxGrid, 2), true);

const fullGrid = [
    [4, 3, 5, 9, 7, 6, 8, 2, 1],
    [9, 2, 8, 1, 3, 4, 6, 7, 5],
    [6, 1, 7, 8, 5, 2, 9, 4, 3],
    [7, 8, 9, 5, 6, 3, 2, 1, 4],
    [3, 6, 4, 2, 8, 1, 5, 9, 7],
    [2, 5, 1, 4, 9, 7, 3, 8, 6],
    [5, 9, 3, 7, 4, 8, 1, 6, 2],
    [1, 7, 6, 3, 2, 9, 4, 5, 8],
    [8, 4, 2, 6, 1, 5, 7, 3, 9],
];
assert.deepStrictEqual(util.isValidGrid(fullGrid), true);
assert.deepStrictEqual(util.isValidGrid(boxGrid), false);
assert.deepStrictEqual(util.isValidGrid(defaultGrid), true);

const modifyArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const modifyGrid1 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
];
const modifyGrid2 = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
];
const modifyGrid3 = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 0, 0, 0, 0, 0, 0, 0, 0],
    [4, 0, 0, 0, 0, 0, 0, 0, 0],
    [5, 0, 0, 0, 0, 0, 0, 0, 0],
    [6, 0, 0, 0, 0, 0, 0, 0, 0],
    [7, 0, 0, 0, 0, 0, 0, 0, 0],
    [8, 0, 0, 0, 0, 0, 0, 0, 0],
    [9, 0, 0, 0, 0, 0, 0, 0, 0],
];
const modifyGrid4 = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [4, 5, 6, 0, 0, 0, 0, 0, 0],
    [7, 8, 9, 0, 0, 0, 0, 0, 0],
    [4, 0, 0, 0, 0, 0, 0, 0, 0],
    [5, 0, 0, 0, 0, 0, 0, 0, 0],
    [6, 0, 0, 0, 0, 0, 0, 0, 0],
    [7, 0, 0, 0, 0, 0, 0, 0, 0],
    [8, 0, 0, 0, 0, 0, 0, 0, 0],
    [9, 0, 0, 0, 0, 0, 0, 0, 0],
];
util.modifyRow(modifyGrid1, 0, modifyArr);
assert.deepStrictEqual(modifyGrid1, modifyGrid2);
util.modifyCol(modifyGrid2, 0, modifyArr);
assert.deepStrictEqual(modifyGrid2, modifyGrid3);
util.modifyBox(modifyGrid3, 0, modifyArr);
assert.deepStrictEqual(modifyGrid3, modifyGrid4);

const shuffle1 = [1, 2, 3];
const shuffle2 = [
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1],
];
util.shuffle(shuffle1);
assert.deepStrictEqual(
    shuffle2.some((a) => a.every((b, i) => b === shuffle1[i])),
    true
);

const genArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
assert.deepStrictEqual(util.genArr(9), genArr1);

const genArr2 = [2, 3, 4, 5, 6, 7, 8, 9, 10];
assert.deepStrictEqual(
    util.genArr2(9, (i) => i + 1),
    genArr1
);

assert.deepStrictEqual(util.convert1Dto2D(20, 9), [2, 2]);

// Not testing Timer

// Not testing LLNode

// Not testing LinkedList

// Not testing Pair

// Not testing arrayToLinkedList()

// Not testing fill()

// Not testing solve()

util.Timer.staticStart();
const sudokuGrid = sudoku.generate(30);
util.Timer.staticStop();
console.log(Number(util.Timer.staticDuration().toFixed(4)));
// console.log(sudokuGrid);
console.log(81 - sudokuGrid.flat().filter((x) => x === 0).length);
assert.deepStrictEqual(util.isValidGrid(sudokuGrid), true);

const sudokuGrid2 = [
    [4, 3, 0, 0, 0, 0, 0, 8, 0],
    [0, 7, 9, 0, 0, 0, 1, 6, 0],
    [0, 0, 2, 0, 0, 0, 9, 5, 0],
    [0, 0, 0, 0, 8, 0, 7, 4, 2],
    [0, 0, 0, 5, 0, 3, 0, 0, 0],
    [0, 0, 0, 0, 0, 9, 0, 0, 0],
    [0, 0, 0, 4, 0, 6, 5, 0, 8],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 5, 2, 0, 0, 0, 3, 0],
];

const sudokuGrid3 = sudoku.solve(sudokuGrid2, (grid) => util.isValidGrid(grid));
assert.deepStrictEqual(util.isValidGrid(sudokuGrid3), true);

function isValid2(grid) {
    for (let a = 0; a < 17; a++) {
        let i;
        let j;
        let c;
        if (a < 9) {
            i = a;
            j = 0;
            c = i;
        } else {
            i = 8;
            j = a - 8;
            c = 9 - j;
        }
        const values = new Set([grid[i][j]]);
        for (let b = 0; b < c; b++) {
            let first = grid[i][j];
            let second = grid[i - 1][j + 1];
            if (
                (first !== 0 && second !== 0 && Math.abs(first - second) < 4) ||
                (second !== 0 && values.has(second))
            ) {
                return false;
            }
            values.add(second);
            i--;
            j++;
        }
    }
    return true;
}
const test3 = [
    [0, 6, 5, 7, 0, 0, 1, 0, 0],
    [0, 0, 3, 0, 6, 9, 8, 5, 7],
    [8, 0, 0, 1, 5, 3, 4, 0, 0],
    [5, 0, 0, 6, 4, 1, 0, 9, 3],
    [0, 0, 6, 0, 0, 5, 0, 0, 4],
    [7, 4, 1, 9, 3, 0, 5, 0, 6],
    [6, 3, 0, 0, 0, 0, 0, 2, 0],
    [0, 0, 2, 0, 9, 0, 6, 7, 0],
    [9, 0, 7, 0, 1, 0, 0, 0, 5],
];
const test2 = sudoku.solve(test3, (grid) => util.isValidGrid(grid));
console.log(util.gridToString(test2));

function solveDiagonal(grid) {
    let copyArr = _.cloneDeep(grid);
    let i = 8;
    let j = 0;
    let a = 0;
    let dir = 1;
    while (a < 9) {
        if (copyArr[i][j] === 0) {
            do {
                grid[i][j]++;
            } while (grid[i][j] !== 10 && !isValid2(grid));
            if (grid[i][j] === 10) {
                grid[i][j] = 0;
                dir = -1;
            } else {
                dir = 1;
            }
        }
        i -= dir;
        j += dir;
        a += dir;
    }
}
const test1 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 2, 0, 0, 0, 0, 0, 0],
];
console.log(isValid2(test1));
console.log(util.gridToString(test1));
util.Timer.staticStart();
solveDiagonal(test1);
util.Timer.staticStop();
console.log(Number(util.Timer.staticDuration().toFixed(4)));
console.log(util.gridToString(test1));
util.Timer.staticStart();
const test4 = sudoku.solve(
    test1,
    (grid) => util.isValidGrid(grid) && isValid2(grid)
);
util.Timer.staticStop();
console.log(Number(util.Timer.staticDuration().toFixed(4)));
console.log(util.gridToString(test4));
