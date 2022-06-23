#include <bits/stdc++.h>

// #pragma GCC optimize("Ofast,unroll-loops")
// #pragma GCC target("avx,avx2,fma")

using namespace std;

int main(int argc, char const *argv[]) {
    // string userInput;
    // getline(cin, userInput);
    // if (userInput.find("1 + 1") != string::npos) {
    //     cout << "2"
    //          << "\n";
    // } else {
    //     cout << "Idk"
    //          << "\n";
    // }
    string userInput;
    getline(cin, userInput);
    int min;
    int max;
    stringstream ss;
    ss << userInput;
    string tmpStr;
    int tmpInt;
    bool setMin = false;
    while (!ss.eof()) {
        ss >> tmpStr;
        if (stringstream(tmpStr) >> tmpInt) {
            if (!setMin) {
                min = tmpInt;
                setMin = true;
            } else {
                max = tmpInt;
                break;
            }
        }
        tmpStr = "";
    }
    int prevGuess;
    prevGuess = (min + max) / 2;
    cout << prevGuess << "\n";
    getline(cin, userInput);
    while (userInput.find("Correct") == string::npos) {
        if (userInput.find("High") != string::npos) {
            max = prevGuess - 1;
        } else {
            min = prevGuess + 1;
        }
        prevGuess = (min + max) / 2;
        cout << prevGuess << "\n";
        getline(cin, userInput);
    }
    return 0;
}
