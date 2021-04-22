#include <bits/stdc++.h>

using namespace std;

void solve() {
    int n, k, a = 0;
    string s;
    cin >> n >> k >> s;
    for (int i = 0, ii = n-- / 2; i < ii; i++) {
        if (s[i] != s[n - i])
            a++;
    }
    cout << abs(k - a);
}

int main() {
    int t, i = 1;
    cin >> t;
    while (t--) {
        cout << "Case #" << i++ << ": ";
        solve();
        cout << "\n";
    }
}