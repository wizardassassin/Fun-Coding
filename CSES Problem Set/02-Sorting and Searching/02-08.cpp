#include <bits/stdc++.h>

#pragma GCC optimize("Ofast")

using namespace std;

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    int n;
    cin >> n;

    long long m = 0;
    long long t = 0;
    long long s = LLONG_MIN;
    bool p = false;
    for (int i = 0; i < n; i++) {
        long long x;
        cin >> x;
        if (x >= 0) {
            p = true;
        }
        s = max(s, x);
        t += x;
        m = max(m, t);
        if (t < 0) {
            t = 0;
        }
    }

    if (!p) {
        cout << s;
    } else {
        cout << m;
    }
}