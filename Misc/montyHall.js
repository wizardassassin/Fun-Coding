const options = {
    numTimes: 10**9, // number of times to run the scenario
    numDoors: 3, // number of doors in the scenario
    numRevealed: 1, // number of doors to reveal
};
const players = [
    {
        // Always switches
        wins: 0, // number of wins
        loses: 0, // number of loses
        winRate: 0, // win rate
        doesSwitch: (numDoors, doorPicked, doorsRevealed) => true, // whether or not to switch
    },
    {
        // Never switches
        wins: 0,
        loses: 0,
        winRate: 0, // win rate
        doesSwitch: (numDoors, doorsRevealed) => false,
    },
    {
        // 50/50 chance to switch
        wins: 0,
        loses: 0,
        winRate: 0, // win rate
        doesSwitch: (numDoors, doorsRevealed) => Math.random() < 0.5,
    },
];

const start = Date.now();
for (let i = 0; i < options.numTimes; i++) {
    simulateGame();
}
for (let player of players) {
    player.winRate = player.wins / (player.loses + player.wins);
    delete player.doesSwitch;
    console.log(player);
}
const end = Date.now();
const duration = end - start;
const format = msFormat(duration);
console.log({ duration, format });

function simulateGame() {
    const { numDoors } = options;
    const correctDoor = Math.floor(Math.random() * numDoors);
    const pickedDoor = Math.floor(Math.random() * numDoors);

    for (const player of players) {
        const a = correctDoor != pickedDoor;
        const b = player.doesSwitch();
        player[a == b ? "wins" : "loses"]++;
    }
}

function msFormat(time) {
    let milliseconds = Math.floor(time);
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    return `${days}:${String(hours % 24).padStart(2, "0")}:${String(
        minutes % 60
    ).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}.${String(
        milliseconds % 1000
    ).padStart(3, "0")}`;
}
