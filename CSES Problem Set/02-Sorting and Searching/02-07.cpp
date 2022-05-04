#include <bits/stdc++.h>

#pragma GCC optimize("Ofast")

using namespace std;

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    int n, x;
    cin >> n >> x;
    
    map<int, int> a;
    
    for (int i = 0; i < n; i++) {
        int t;
        cin >> t;
        auto it = a.find(t);
        if (it == a.end()) {
            a.insert(pair(x - t, i + 1));
        } else {
            cout << it->second << " " << i + 1;
            exit(0);
        }
    };

    cout << "IMPOSSIBLE";

}