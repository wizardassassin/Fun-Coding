#include <bits/stdc++.h>

#pragma GCC optimize("Ofast")

using namespace std;

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    int n;
    cin >> n;

    int x[n];

    for (int i = 0; i < n; i++) cin >> x[i];

    sort(x, x + n);

    long long m = 1;

    for (int v : x) {
        if (v > m) break;
        m += v;
    }

    cout << m;
}