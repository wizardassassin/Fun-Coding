#include <bits/stdc++.h>

#pragma GCC optimize("Ofast")

using namespace std;

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    int n;
    cin >> n;

    int s[n];

    for (int i = 0; i < n; i++) cin >> s[i];

    sort(s, s + n);

    int l = s[n / 2];

    long long c = 0;
    for (int i = 0; i < n; i++) {
        c += abs(l - s[i]);
    }

    cout << c;
}