#include <bits/stdc++.h>

// #pragma GCC optimize("Ofast,unroll-loops")
// #pragma GCC target("avx,avx2,fma")

using namespace std;

int main(int argc, char const *argv[]) {
    // cout << "What is 1 + 1: "
    //      << "\n";
    // string userInput;
    // cin >> userInput;
    // int parsedInput = stoi(userInput);  // No exception plz
    // if (parsedInput == 2) {
    //     cout << "Correct!"
    //          << "\n";
    // } else {
    //     cout << "Incorrect!"
    //          << "\n";
    // }
    int min = 0;
    int max = 1000000;
    random_device rd;
    mt19937 mt(rd());
    uniform_int_distribution<int> distribution(min, max);
    int answer = distribution(mt);
    int guessCount = 0;
    cout << "My number is between " << min << " and " << max << "\n";
    bool isCorrect = false;
    do {
        int guess;
        cin >> guess;
        if (guess < answer) {
            cout << "Too Low!" << "\n";
        } else if (guess > answer) {
            cout << "Too High!" << "\n";
        } else {
            isCorrect = true;
        }
        guessCount++;
    } while (!isCorrect);
    cout << "Correct! My number was " << answer << "! " << guessCount << " Try/Tries!" << "\n";
    return 0;
}
