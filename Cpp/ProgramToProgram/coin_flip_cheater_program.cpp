#include <bits/stdc++.h>

// #pragma GCC optimize("Ofast,unroll-loops")
// #pragma GCC target("avx,avx2,fma")

using namespace std;

// Percents are out of 100
// 50 means 50% or 0.5
int startingCoins = 100;
int winAmount = 15;
int loseAmount = 30;
int cheaterChance = 50;  // 50% to be a cheater
int cheaterCoin = 75;    // 75% heads

int main(int argc, char const *argv[]) {
    // ios::sync_with_stdio(0);
    // cin.tie(0);

    random_device rd;
    mt19937 mt(rd());
    uniform_int_distribution<int> distribution(0, 100 - 1);

    cout << "input: int:numFlips, string:fair, string:cheater"
         << "\n";
    cout << "startingCoins: " << startingCoins << " winAmount: " << winAmount
         << " loseAmount: " << loseAmount << " cheaterChance: " << cheaterChance
         << " cheaterCoin: " << cheaterCoin << "\n";

    int coins = startingCoins;
    int score = 0;
    int players = 0;
    int trueNegatives = 0;
    int falsePositives = 0;
    int falseNegatives = 0;
    int truePositives = 0;
    // Game Loop
    while (true) {
        bool isCheating = distribution(mt) < 50;
        int coinChance;  // heads if under coinChance
        if (isCheating) {
            coinChance = cheaterCoin;
        } else {
            coinChance = 50;
        }
        int flips = 0;
        int heads = 0;
        int tails = 0;
        bool isCheatingGuess;
        // Guess loop
        do {
            cout << "score: " << score << " coins: " << coins << "\n";
            cout << "players: " << players
                 << " trueNegatives: " << trueNegatives
                 << " falsePositives: " << falsePositives
                 << " falseNegatives: " << falseNegatives
                 << " truePositives: " << truePositives << "\n";
            cout << "flips: " << flips << " heads: " << heads
                 << " tails: " << tails << "\n";
            string input;
            cin >> input;
            if (input == "fair") {
                isCheatingGuess = false;
                break;
            }
            if (input == "cheater") {
                isCheatingGuess = true;
                break;
            }
            int flip = min(stoi(input), coins);
            flips += flip;
            coins -= flip;
            for (int i = 0; i < flip; i++) {
                bool isHeads = distribution(mt) < coinChance;
                if (isHeads) {
                    heads++;
                } else {
                    tails++;
                }
            }
        } while (true);
        if (isCheating == isCheatingGuess) {
            // Correct
            if (isCheating) {
                truePositives++;
            } else {
                trueNegatives++;
            }
            coins += winAmount;
            score++;
            cout << "Correct!"
                 << "\n";
        } else {
            // Incorrect
            if (isCheating) {
                falseNegatives++;
            } else {
                falsePositives++;
            }
            coins -= loseAmount;
            cout << "Incorrect!"
                 << "\n";
        }
        players++;
        if (coins < 0) {
            cout << "Game Over!"
                 << "\n";
            break;
        }
    }
    cout << "score: " << score << " coins: " << coins << "\n";
    cout << "players: " << players << " trueNegatives: " << trueNegatives
         << " falsePositives: " << falsePositives
         << " falseNegatives: " << falseNegatives
         << " truePositives: " << truePositives << "\n";
    cerr << score << "\n";
    return 0;
}
