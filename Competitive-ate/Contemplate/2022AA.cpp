#include <bits/stdc++.h>

#pragma GCC optimize("Ofast")
#pragma GCC target("avx,avx2,fma")
#pragma GCC optimization("unroll-loops")

using namespace std;

void solve() {
    string i, p;
    cin >> i >> p;
    int iLen = i.length(), pLen = p.length();

    int iP = 0, jP = 0, s = 0;
    while (iP < iLen && jP < pLen) {
        if (i[iP] == p[jP]) {
            iP++;
            jP++;
        } else {
            jP++;
            s++;
        }
    }
    if (iP != iLen) {
        cout << "IMPOSSIBLE";
        return;
    }
    if (jP != pLen) {
        s += pLen - jP;
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