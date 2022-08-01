#include <bits/stdc++.h>

#pragma GCC optimize("Ofast,unroll-loops")
#pragma GCC target("avx,avx2,fma")

using namespace std;

bool isEqual(const string &str, const int leftMost, const int rightMost,
             const int space) {
    for (int i = 0; i < space; i++) {
        if (str[leftMost + i] != str[rightMost + i]) {
            return false;
        }
    }
    return true;
}

bool isVowel(const char c) {
    return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
}

void solve() {
    string inStr;
    cin >> inStr;
    int strLen = inStr.length();
    vector<int> vect1;
    for (int i = 0; i < strLen; i++) {
        if (isVowel(inStr[i])) {
            vect1.push_back(i);
        }
    }
    int siz = vect1.size();
    if (siz < 5) {
        cout << "Nothing.";
        return;
    }
    int ind = 0;
    int space = 2;
    while (false) {
        int leftInd = vect1[ind];
        int ind2 = 0;
        while (ind + space + space + ind2 < siz) {
            int rightInd = vect1[ind + space + 1 + ind2];
            if (isEqual(inStr, leftInd, rightInd, space)) {
                cout << "Spell!";
                return;
            }
            ind2++;
        }
    }
    cout << "Spell!";
}

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    int t, i = 1;
    cin >> t;
    while (t--) {
        cout << "Case #" << i++ << ": ";
        solve();
        cout << "\n";
    }
}