import util from "./sudokuUtil.js";
import _ from "lodash";

import * as self from "./sudoku.js";
export default self;

export function generate(squareCount) {
    squareCount = Math.min(Math.max(Number(squareCount) || 81, 17), 81);
    squareCount = 81 - squareCount;
    const grid = util.generateGrid();
    util.modifyBox(grid, 0, util.shuffle(util.genArr(9)));
    util.modifyBox(grid, 4, util.shuffle(util.genArr(9)));
    util.modifyBox(grid, 8, util.shuffle(util.genArr(9)));
    fill(grid);
    const coords = util
        .genArr2(9, (i) => util.genArr2(9, (j) => new util.Pair(i, j)))
        .flat();
    util.shuffle(coords);
    const coordsLL = util.arrayToLinkedList(coords);
    const coordsLL2 = new util.LinkedList();
    let count = 0;
    let fullCheck = 0;
    while (count < squareCount) {
        const tempCoordNode = coordsLL.shiftNode();
        const tempCoord = tempCoordNode.data;
        const tempVal = grid[tempCoord.first][tempCoord.second];
        grid[tempCoord.first][tempCoord.second] = 0;
        if (!uniqueSolve(grid)) {
            grid[tempCoord.first][tempCoord.second] = tempVal;
            coordsLL.pushNode(tempCoordNode);
            count--;
            // console.log("MISS", 81 - count, count);
            fullCheck++;
            if (coordsLL.length === fullCheck) {
                throw new Error("All checked...");
            }
        } else {
            fullCheck = 0;
            coordsLL2.pushNode(tempCoordNode);
            // console.log("HIT", 81 - count, count);
        }
        count++;
    }
    return grid;
}

export function fill(grid) {
    const gridCopy = _.cloneDeep(grid);
    const rows = grid.length;
    const cols = grid[0].length;
    const len = rows * cols;
    let inc = 1;
    let count = 0;
    const choices = new util.LinkedList();
    while (count < len) {
        if (count < 0) {
            throw new Error("Can't fill grid.");
        }
        const [i, j] = util.convert1Dto2D(count, cols);
        if (gridCopy[i][j] !== 0) {
            count += inc;
            continue;
        }

        let choiceNode;
        if (inc === -1) {
            // Probably won't return undefined
            choiceNode = choices.popNode();
        } else {
            const choiceArr = util.shuffle(util.genArr(9));
            choiceNode = new util.LLNode(util.arrayToLinkedList(choiceArr));
        }

        let choice = choiceNode.data;

        if (choice.length === 0) {
            grid[i][j] = 0;
            count += inc;
            continue;
        }

        let isValid;
        do {
            let pick = choice.popNode();
            grid[i][j] = pick.data;
            isValid = util.isValidGrid(grid);
        } while (choice.length !== 0 && !isValid);

        if (!isValid) {
            grid[i][j] = 0;
            inc = -1;
            count += inc;
            continue;
        }

        inc = 1;
        choices.pushNode(choiceNode);
        count += inc;
    }
}

export function uniqueSolve(grid) {
    let foundSolution = false;
    const gridCopy = _.cloneDeep(grid);
    const rows = grid.length;
    const cols = grid[0].length;
    const len = rows * cols;
    let inc = 1;
    let count = 0;
    while (count >= 0) {
        if (count === len) {
            if (foundSolution) {
                return false;
            }
            foundSolution = true;
            inc = -1;
            count += inc;
        }
        const [i, j] = util.convert1Dto2D(count, cols);
        if (grid[i][j] !== 0) {
            count += inc;
            continue;
        }

        do {
            gridCopy[i][j]++;
        } while (gridCopy[i][j] !== 10 && !util.isValidGrid(gridCopy));

        if (gridCopy[i][j] === 10) {
            gridCopy[i][j] = 0;
            inc = -1;
            count += inc;
            continue;
        }

        inc = 1;
        count += inc;
    }
    return true;
}

export function solve(grid, func) {
    const gridCopy = _.cloneDeep(grid);
    const rows = grid.length;
    const cols = grid[0].length;
    const len = rows * cols;
    let inc = 1;
    let count = 0;
    while (count < len) {
        if (count < 0) {
            throw new Error("Can't find solution.");
        }
        const [i, j] = util.convert1Dto2D(count, cols);
        if (grid[i][j] !== 0) {
            count += inc;
            continue;
        }

        do {
            gridCopy[i][j]++;
        } while (gridCopy[i][j] !== 10 && !func(gridCopy));

        if (gridCopy[i][j] === 10) {
            gridCopy[i][j] = 0;
            inc = -1;
            count += inc;
            continue;
        }

        inc = 1;
        count += inc;
    }
    return gridCopy;
}
