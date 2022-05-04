#include <bits/stdc++.h>

#pragma GCC optimize("Ofast")

using namespace std;

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    int n, m;
    cin >> n >> m;

    multiset<int> h;

    for (int i = 0; i < n; i++) {
        int t;
        cin >> t;
        h.insert(t);
    };
    for (int i = 0; i < m; i++) {
        int t;
        cin >> t;
        auto it = h.upper_bound(t);
        if (it == h.begin()) {
            cout << -1 << "\n";
        } else {
            cout << *(--it) << "\n";
            h.erase(it);
        }
    };
}