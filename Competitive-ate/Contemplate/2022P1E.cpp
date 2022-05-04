#include <bits/stdc++.h>

#pragma GCC optimize("Ofast")

using namespace std;

void solve() {
    int n, m, p;
    cin >> n >> m >> p;
    vector<int> ops(p);
    vector<bool> opt(p);
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < p; j++) {
            char t;
            cin >> t;
            if (t == '1') {
                ops[j]++;
            }
        }
    }
    for (int i = 0; i < p; i++) {
        int t = ops[i];
        if (t * 2 < n) {
            opt[i] = 0;
        } else if (t * 2 > n) {
            opt[i] = 1;
        } else {
            opt[i] = 2;
        }
    }
    cout << 0;
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