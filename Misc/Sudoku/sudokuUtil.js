import { e } from "mathjs";
import * as self from "./sudokuUtil.js";
export default self;

export let rows = 9;
export let cols = 9;
export let boxes = 9;
export let boxCount = 9;
export let boxRowCount = 3;
export let boxColCount = 3;
export let boxRowLen = 3;
export let boxColLen = 3;

export function generateGrid(rowLen = rows, colLen = cols) {
    return Array.from({ length: rowLen }, () =>
        Array.from({ length: colLen }, () => 0)
    );
}

export function isValidRow(grid, row) {
    const values = new Set();
    for (let j = 0; j < cols; j++) {
        const val = grid[row][j];
        if (val !== 0 && values.has(val)) {
            return false;
        }
        values.add(val);
    }
    return true;
}

export function isValidCol(grid, col) {
    const values = new Set();
    for (let i = 0; i < rows; i++) {
        const val = grid[i][col];
        if (val !== 0 && values.has(val)) {
            return false;
        }
        values.add(val);
    }
    return true;
}

export function boxToCoords(a, box) {
    const i =
        Math.floor(box / boxColCount) * boxColLen + Math.floor(a / boxColLen);
    const j = (box % boxColCount) * boxColLen + (a % boxColLen);
    return [i, j];
}

export function isValidBox(grid, box) {
    const values = new Set();
    for (let a = 0; a < boxCount; a++) {
        const [i, j] = boxToCoords(a, box);
        const val = grid[i][j];
        if (val !== 0 && values.has(val)) {
            return false;
        }
        values.add(val);
    }
    return true;
}

export function isValidGrid(grid) {
    for (let a = 0; a < rows; a++) {
        if (!isValidRow(grid, a)) {
            return false;
        }
    }
    for (let a = 0; a < cols; a++) {
        if (!isValidCol(grid, a)) {
            return false;
        }
    }
    for (let a = 0; a < boxes; a++) {
        if (!isValidBox(grid, a)) {
            return false;
        }
    }
    return true;
}

export function modifyRow(grid, row, arr) {
    for (let a = 0; a < rows; a++) {
        grid[row][a] = arr[a];
    }
    return grid;
}

export function modifyCol(grid, col, arr) {
    for (let a = 0; a < cols; a++) {
        grid[a][col] = arr[a];
    }
    return grid;
}

export function modifyBox(grid, box, arr) {
    for (let a = 0; a < boxCount; a++) {
        const [i, j] = boxToCoords(a, box);
        grid[i][j] = arr[a];
    }
    return grid;
}

export function shuffle(arr) {
    let i = arr.length;
    while (i > 1) {
        const pos = Math.floor(Math.random() * i);
        [arr[pos], arr[i - 1]] = [arr[i - 1], arr[pos]];
        i--;
    }
    return arr;
}

export function genArr(len) {
    return Array.from({ length: len }, (_, i) => i + 1);
}

export function genArr2(len, callback) {
    return Array.from({ length: len }, (_, i) => callback(i));
}

export function convert1Dto2D(pos, cols) {
    const i = Math.floor(pos / cols);
    const j = pos % cols;
    return [i, j];
}

export function gridToString(grid) {
    const line = "+-------+-------+-------+\n";
    let retArr = "";
    for (let i = 0; i < 9; i++) {
        if (i % 3 === 0) {
            retArr += line;
        }
        for (let j = 0; j < 9; j++) {
            if (j % 3 === 0) {
                retArr += "| ";
            }
            const val = grid[i][j];
            if (val === 0) {
                retArr += ".";
            } else {
                retArr += val;
            }
            retArr += " ";
        }
        retArr += "|\n";
    }
    retArr += line;
    return retArr.trim();
}

export class Timer {
    startTime;
    stopTime;
    static staticStartTime;
    static staticStopTime;
    constructor() {
        this.startTime = 0;
        this.stopTime = 0;
        this.start();
        this.stop();
    }
    static {
        this.staticStartTime = 0;
        this.staticStopTime = 0;
        this.staticStart();
        this.staticStop();
    }
    start() {
        this.startTime = performance.now();
    }
    static staticStart() {
        this.staticStartTime = performance.now();
    }
    stop() {
        this.stopTime = performance.now();
    }
    static staticStop() {
        this.staticStopTime = performance.now();
    }
    duration() {
        return this.stopTime - this.startTime;
    }
    static staticDuration() {
        return this.staticStopTime - this.staticStartTime;
    }
}

export class LLNode {
    data;
    /** @type {LLNode} */
    next;
    /** @type {LLNode} */
    prev;

    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

export class LinkedList {
    /** @type {LLNode} */
    firstNode;
    /** @type {LLNode} */
    lastNode;
    length;

    constructor() {
        this.firstNode = null;
        this.lastNode = null;
        this.length = 0;
    }

    /**
     *
     * @callback findNodeCallback
     * @param {LLNode} nodeIter
     * @returns {Boolean}
     */

    /**
     *
     * @param {findNodeCallback} func
     */
    findNode(func) {
        let nodeIter = this.firstNode;
        while (nodeIter !== null && !func(nodeIter)) {
            nodeIter = nodeIter.next;
        }
        return nodeIter;
    }

    /**
     *
     * @param {findNodeCallback} func
     */
    findNodePrev(func) {
        let nodeIter = this.lastNode;
        while (nodeIter !== null && !func(nodeIter)) {
            nodeIter = nodeIter.prev;
        }
        return nodeIter;
    }

    /**
     *
     * @param {LLNode} node1
     * @param {LLNode} node2
     */
    insertNodeAfter(node1, node2) {
        this.length++;
        node2.prev = node1;
        node2.next = node1.next;
        if (node1 === this.lastNode) {
            this.lastNode = node2;
        } else {
            node1.next.prev = node2;
        }
        node1.next = node2;
    }

    /**
     *
     * @param {LLNode} node1
     * @param {LLNode} node2
     */
    insertNodeBefore(node1, node2) {
        this.length++;
        node2.prev = node1.prev;
        node2.next = node1;
        if (node1 === this.firstNode) {
            this.firstNode = node2;
        } else {
            node1.prev.next = node2;
        }
        node1.prev = node2;
    }

    /**
     *
     * @param {LLNode} node1
     * @param {LLNode} node2
     */
    replaceNode(node1, node2) {
        if (this.firstNode === this.lastNode) {
            this.firstNode = node2;
            this.lastNode = node2;
            return;
        }
        if (node1.prev) {
            node1.prev.next = node2;
            node2.prev = node1.prev;
        }
        if (node1.next) {
            node1.next.prev = node2;
            node2.next = node1.next;
        }
    }

    /**
     *
     * @param {LLNode} node
     */
    pushNode(node) {
        this.length++;
        if (!this.firstNode && !this.lastNode) {
            this.firstNode = node;
            this.lastNode = node;
            return;
        }
        node.prev = this.lastNode;
        this.lastNode.next = node;
        this.lastNode = node;
    }

    /**
     *
     * @param {LLNode} node
     */
    unshiftNode(node) {
        this.length++;
        if (!this.firstNode && !this.lastNode) {
            this.firstNode = node;
            this.lastNode = node;
            return;
        }
        node.next = this.firstNode;
        this.firstNode.prev = node;
        this.firstNode = node;
    }

    /**
     *
     * @param {LLNode} node
     */
    removeNode(node) {
        this.length--;
        if (node.prev) {
            node.prev.next = node.next;
        }
        if (node.next) {
            node.next.prev = node.prev;
        }
    }

    popNode() {
        const retNode = this.lastNode;
        if (this.firstNode === this.lastNode) {
            this.length--;
            this.firstNode = null;
            this.lastNode = null;
            return retNode;
        }
        this.removeNode(this.lastNode);
        this.lastNode = this.lastNode.prev;
        return retNode;
    }

    shiftNode() {
        const retNode = this.firstNode;
        if (this.firstNode === this.lastNode) {
            this.length--;
            this.firstNode = null;
            this.lastNode = null;
            return retNode;
        }
        this.removeNode(this.firstNode);
        this.firstNode = this.firstNode.next;
        return retNode;
    }
}

export class Pair {
    first;
    second;

    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
}

/**
 *
 * @param {Array} arr
 */
export function arrayToLinkedList(arr) {
    const linkList = new LinkedList();
    for (const val of arr) {
        linkList.pushNode(new LLNode(val));
    }
    return linkList;
}
