import fs from "fs";

const rand = (s, e) => Math.floor(Math.random() * (e - s) + s);

fs.writeFileSync(
    "list.txt",
    Array.from({ length: 1000 }, () =>
        (rand(10, 100) ** rand(10, 100)).toPrecision(11)
    ).join(",")
);
