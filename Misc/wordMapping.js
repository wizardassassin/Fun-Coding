import _ from "lodash";

let sentence = "the lazy dog jumped over the quick brown fox";

let sentence2 = "I found out how to encode words yay!";

let encoded = "";

let encoded2 = "";

let words = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];

let words2 = [];

let words3 = _.cloneDeep(words);

while (words3.length) {
    words2.push(words3.splice(Math.floor(Math.random() * words3.length), 1));
}

let map1 = [];

words.forEach((_, i) => map1.push([words[i], words2[i]]));

let map2 = [];

words.forEach((_, i) => map2.push([words2[i], words[i]]));

let map11 = new Map(map1);

let map22 = new Map(map2);

for (let i of sentence) encoded += map11.get(i) || i;

for (let i of sentence2) encoded2 += map11.get(i) || i;

console.log(encoded);
console.log(encoded2);

let translate1 = "";
let translate2 = "";

for (let i of encoded) translate1 += map22.get(i) || i;

for (let i of encoded2) translate2 += map22.get(i) || i;

console.log(translate1);
console.log(translate2);

console.log(map11);
console.log(map22);

// TODO: fix some bugs