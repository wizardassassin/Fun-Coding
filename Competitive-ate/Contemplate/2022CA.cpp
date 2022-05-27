#include <bits/stdc++.h>

#pragma GCC optimize("Ofast,unroll-loops")
#pragma GCC target("avx,avx2,fma")

using namespace std;

void solve() {
    int n;
    cin >> n;
    bool isUp = false;
    bool isLow = false;
    bool isDig = false;
    bool isSpec = false;
    string s;
    cin >> s;
    int i = 0;
    while (i < n) {
        char c = s[i];
        if (isupper(c)) {
            isUp = true;
        }
        if (islower(c)) {
            isLow = true;
        }
        if (isdigit(c)) {
            isDig = true;
        }
        if (!isalnum(c)) {
            isSpec = true;
        }
        i++;
    }
    if (!isUp) {
        s += "A";
    }
    if (!isLow) {
        s += "a";
    }
    if (!isDig) {
        s += "0";
    }
    if (!isSpec) {
        s += "@";
    }
    if (s.length() < 7) {
        s += string(7 - s.length(), 'a');
    }
    cout << s;
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