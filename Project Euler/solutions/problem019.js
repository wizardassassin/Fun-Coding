/*
Counting Sundays

You are given the following information, but you may prefer to do some research for yourself.

1 Jan 1900 was a Monday.

Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.

A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

https://projecteuler.net/problem=19

The preceding problem was taken from Project Euler and is under a Creative Commons Licence:
Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
This does not apply to the solution/code.
*/

// import * as fs from 'fs';

export default function problem19(n = -1) { // Not sure how to implement n here
    let count = 0;
    let day = 2;
    for (let y = 1901; y <= 2000; y++) {
        for (let m = 1; m <= 12; m++) {
            // fs.appendFileSync('file', day + '\n')
            if (day == 0) {
                count++;
            }
            switch (m) {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    day += 31;
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    day += 30;
                    break;
                case 2:
                    day += 28;
                    if (y % 4 == 0 && (y % 100 != 0 || y % 400 == 0))
                        day++;
                    break;
            }
            day %= 7;
        }
    }
    return count;
}

/*
// oops :) :(
let convert = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12
}
// Time to reinvent the wheel!! Hooray :(
function DidWrongProblem(n = 0) { // Not sure how to implement n here Sumday?
    let dayOfTheWeek = 1; // Mon = 1, Tues = 2, ..., Sat = 6, Sun = 0 it's in modulo 7
    dayOfTheWeek = 2; // Magic
    let data = ['1 Jan 1901', '31 Dec 2000'];
    data = data.map(i => i.split(' '));
    let [
        [startDay, startMonth, startYear],
        [endDay, endMonth, endYear]
    ] = data;
    startMonth = convert[startMonth];
    endMonth = convert[endMonth];
    let counter = 0;
    while (startDay <= endDay && startMonth <= endMonth && startYear <= endYear) {
        // Thinking is overrated, incrementing by each day is much easier to work out
        // than making a function that converts a date into days since 1 Jan 1900,
        // subtracting the start and end dates, dividing the start and end dates
        // by 7, taking the floor of that result, adding the floor to the total,
        // finding the difference of (the start and end dates) and (the total times 7),
        // adding one to the total if ((the difference) plus (the start day of the week))
        // meets or exceeds the number which (start day plus the number) modulo 7 meets
        // day of the week being counted. sun to sat => 0 to 6
        /*
        theoretical code goes here :)
        *\/ (Remove the \)
        startDay++; // *
        counter++; // *
        if (startDay > 27) {
            let dayInMonth;
            switch (startMonth) {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    dayInMonth = 31;
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    dayInMonth = 30;
                    break;
                case 2:
                    dayInMonth = 28;
                    if (startYear % 4 == 0 && (startYear % 100 != 0 || startYear % 400 == 0))
                        dayInMonth++;
                    break;
            }
            if (dayInMonth <= startDay) {
                startDay = 0;
                startMonth++;
                if (startMonth > 12) {
                    startMonth = 1;
                    startYear++;
                }
            }
        }
        // *
        // *
    } // counter now equals the days it takes for the start date to reach the end date
    let weeks = Math.floor(counter / 7);
    let remainder = counter % 7;
    while (remainder > 0) {
        dayOfTheWeek++;
        if (dayOfTheWeek % 7 == n)
            weeks++;
        remainder--;
    }
    return weeks;
}

function months(month, year) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            31
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            30
            break;
        case 2:
            28
            if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0))
                1
            break;

    }
}
*/