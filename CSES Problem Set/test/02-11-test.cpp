#include <bits/stdc++.h>

#pragma GCC optimize("Ofast")

using namespace std;

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    int n;
    cin >> n;

    set<int> v;

    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        auto it = v.find(x);
        if (it != v.end()) {
            v.erase(it);
        }
        v.insert(x + 1);
    }
    
    cout << v.size();
    
}