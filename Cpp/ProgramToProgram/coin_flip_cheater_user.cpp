#include <bits/stdc++.h>

// #pragma GCC optimize("Ofast,unroll-loops")
// #pragma GCC target("avx,avx2,fma")

using namespace std;

int main(int argc, char const *argv[]) {
    // ios::sync_with_stdio(0);
    // cin.tie(0);

    string voidStr;
    getline(cin, voidStr);
    getline(cin, voidStr);
    while (true) {
        string gameOver;
        getline(cin, gameOver);
        if (gameOver == "Game Over!") {
            break;
        }
        int coins;
        stringstream ss;
        // cout << ss.eof(); // Start of ss
        ss << gameOver;
        ss >> voidStr;
        ss >> voidStr;
        ss >> voidStr;
        ss >> coins;
        // cout << ss.eof(); // End of ss
        getline(cin, voidStr);
        int flips;
        int heads;
        int tails;
        cin >> voidStr >> flips >> voidStr >> heads >> voidStr >> tails;
        getline(cin, voidStr);
        // logic
        int f = 4;
        int c = 2;
        if (coins != 0 && flips == 0) {
            cout << f << "\n";
            continue;
        }
        if (coins == 0 || flips == f) {
            if (heads > f - c) {
                cout << "cheater"
                     << "\n";
            } else {
                cout << "fair"
                     << "\n";
            }
            getline(cin, voidStr);
            continue;
        }
    }
    return 0;
}
