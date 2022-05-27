#include <bits/stdc++.h>

#pragma GCC optimize("Ofast,unroll-loops")
#pragma GCC target("avx,avx2,fma")

using namespace std;

void solve() {
    int n, x, y;
    cin >> n >> x >> y;
    int s1 = x + y;
    int n1 = n;
    n = (n + 1) * n / 2;
    if (n % s1 != 0) {
        cout << "IMPOSSIBLE";
        return;
    }
    int s2 = n / s1 * x;
    int t2 = n1;
    vector<int> v;
    while (s2 != 0) {
        if (t2 < s2) {
            v.push_back(t2);
            s2 -= t2;
            t2--;
        } else {
            v.push_back(s2);
            break;
        }
    }
    cout << "POSSIBLE\n" << v.size() << "\n";
    for (int num : v) {
        cout << num << " ";
    }
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