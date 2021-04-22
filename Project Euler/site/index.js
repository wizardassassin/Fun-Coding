




function getState(c) {
    let consecutive = 0,
        suit = 1,
        kind,
        kindH,
        high;
    let s = c[0][1];
    for (let i = 0; i < 5; i++) {
        if (c[i][1] != s) {
            suit = 0;
            break;
        }
    }
    
    for (let i = 0; i < 5; i++) {
        c[i] = map1.get(c[i][0])
    }
    console.log(c)
    let max = Math.max(...c);
    consecutive = max;
    c = new Set(c);
    while (consecutive - max-- < 4) {
        if (!c.has(max)) {
            consecutive = 0;
            break;
        }
    }
    console.log(c, {consecutive, suit, kind, kindH, high})
}

const map1 = new Map([
    ['2', 1],
    ['3', 2],
    ['4', 3],
    ['5', 4],
    ['6', 5],
    ['7', 6],
    ['8', 7],
    ['9', 8],
    ['T', 9],
    ['J', 10],
    ['Q', 11],
    ['K', 12],
    ['A', 13],
]);

const map2 = new Map([ 
    ['1', '2'],
    ['2', '3'],
    ['3', '4'],
    ['4', '5'],
    ['5', '6'],
    ['6', '7'],
    ['7', '8'],
    ['8', '9'],
    ['9', 'T'],
    ['10', 'J'],
    ['11', 'Q'],
    ['12', 'K'],
    ['13', 'A'],
]);

getState(["8C", "TC", "JC", "9C", "7H"])