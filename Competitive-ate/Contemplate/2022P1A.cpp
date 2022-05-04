#include <bits/stdc++.h>

using namespace std;

void solve() {
    int n, m;
    cin >> n >> m;
    int s = 0;
    while (n--) {
        int t;
        cin >> t;
        s += t;
    }
    cout << s % m;
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