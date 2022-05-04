#include <bits/stdc++.h>

#pragma GCC optimize("Ofast")
#pragma GCC target("avx,avx2,fma")
#pragma GCC optimization("unroll-loops")

using namespace std;

void solve() {
    string n;
    cin >> n;
    int sDig = 0;
    for (char &c : n) {
        sDig += c - 48;
    }
    sDig = (9 - sDig % 9) % 9;
    int i = 0;
    if (sDig == 0) {
        i = 1;
    }
    int len = n.length();
    while (i < len) {
        int fs = n[i] - 48;
        if (fs > sDig) {
            cout << n.substr(0, i) + to_string(sDig) + n.substr(i);
            return;
        }
        i++;
    }
    cout << n + to_string(sDig);
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