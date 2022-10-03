/**
 * Reduced Row Echelon Form
 */

import * as math from "mathjs";
import _ from "lodash";

/** @type {math.Fraction[][]} */
const matrix = [
    [1, 4, 7, 10],
    [4, 7, 10, 13],
    [7, 10, 13, 1],
];
// const matrix = [
//     [1, 1, 1, 4],
//     [2, -3, 1, 2],
//     [-1, 2, -1, -1],
// ];
// const matrix = [
//     [1, 1, -1, 7],
//     [1, -1, 2, 3],
//     [2, 1, 1, 9],
// ];

convert(matrix);

printMatrix(matrix);

// console.log(matrix);
// console.log(math.divide(math.fraction(10), 2));
// console.log(colIsZero(matrix, 0));

RREF(matrix);

printMatrix(matrix);

/**
 * Hi
 *
 * @param {Array<Array<math.Fraction>>} matrix
 */
function RREF(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const minLen = Math.min(rows, cols);
    let j_inc = 0;
    let a = 0;
    while (a < minLen) {
        // if (a == 2) {
        //     break;
        // }
        while (colIsZero(matrix, a + j_inc, 0)) {
            // throw new Error("Entire column was 0...");
            j_inc++;
            if (a + j_inc >= cols) {
                console.log("j_inc out of bounds_1");
                break;
            }
        }
        while (matrix[a][a + j_inc].n === 0) {
            let tmp_swap = firstNonZero(matrix, a + j_inc, a);
            if (tmp_swap !== -1) {
                swapRows(matrix, a, tmp_swap);
            } else {
                j_inc++;
            }
            if (a + j_inc >= cols) {
                console.log("j_inc out of bounds_2");
                break;
            }
            // throw new Error("Pivot was 0...");
        }
        let pivot = matrix[a][a + j_inc];
        let lambda = math.divide(1, pivot);
        multiplyRow(matrix, a, lambda, 0);
        let new_pivot = matrix[a][a + j_inc];
        for (let i_2 = 0; i_2 < rows; i_2++) {
            if (i_2 == a) {
                continue;
            }
            let tmp_row = [_.cloneDeep(matrix[a])];
            let pivot_2 = matrix[i_2][a + j_inc];
            let lambda_2 = math.divide(pivot_2, new_pivot);
            lambda_2 = math.multiply(-1, lambda_2);
            multiplyRow(tmp_row, 0, lambda_2, 0);
            addRow2(matrix, i_2, tmp_row, 0, 0);
        }
        a++;
    }
}

/**
 * Hi
 *
 * @param {Array<Array<math.Fraction>>} matrix
 * @param {Number} col
 * @param {Number} start
 */
function colIsZero(matrix, col, start) {
    for (let i = 0; i < matrix.length; i++) {
        const element = matrix[i][col];
        if (element.n !== 0) {
            return false;
        }
    }
    return true;
}

/**
 * Hi
 *
 * @param {Array<Array<math.Fraction>>} matrix
 * @param {Number} col
 * @param {Number} start
 */
function firstNonZero(matrix, col, start) {
    for (let i = start; i < matrix.length; i++) {
        const element = matrix[i][col];
        if (element.n !== 0) {
            return i;
        }
    }
    return -1;
    // throw new Error("Huh?");
}

/**
 * Hi
 *
 * @param {Array<Array<math.Fraction>>} matrix
 * @param {Number} col
 */
function swapRows(matrix, a, b) {
    [matrix[a], matrix[b]] = [matrix[b], matrix[a]];
}

/**
 * Hi
 *
 * @param {Array<Array<math.Fraction>>} matrix
 * @param {Number} row
 * @param {math.Fraction} scalar
 * @param {Number} start
 */
function multiplyRow(matrix, row, scalar, start) {
    for (let j = start; j < matrix[row].length; j++) {
        matrix[row][j] = math.multiply(matrix[row][j], scalar);
    }
}

/**
 * Hi
 *
 * @param {Array<Array<math.Fraction>>} matrix
 * @param {Number} row
 * @param {math.Fraction} scalar
 * @param {Number} start
 */
function addRow(matrix, row, scalar, start) {
    for (let j = start; j < matrix[row].length; j++) {
        matrix[row][j] = math.add(matrix[row][j], scalar);
    }
}

/**
 * Hi
 *
 * @param {Array<Array<math.Fraction>>} matrix
 * @param {Number} row
 * @param {Array<Array<math.Fraction>>} matrix2
 * @param {Number} row2
 * @param {Number} start
 */
function addRow2(matrix, row, matrix2, row2, start) {
    for (let j = start; j < matrix[row].length; j++) {
        matrix[row][j] = math.add(matrix[row][j], matrix2[row2][j]);
    }
}

function convert(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        const element = matrix[i];
        for (let j = 0; j < element.length; j++) {
            const elem = element[j];
            matrix[i][j] = math.fraction(elem);
        }
    }
    return matrix;
}

function revert(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        const element = matrix[i];
        for (let j = 0; j < element.length; j++) {
            const elem = element[j];
            matrix[i][j] = math.number(elem).toFixed(2);
        }
    }
    return matrix;
}

function printMatrix(matrix) {
    let clonedMatrix = _.cloneDeep(matrix);
    console.log(revert(clonedMatrix));
}
