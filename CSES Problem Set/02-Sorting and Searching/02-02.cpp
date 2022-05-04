#include <bits/stdc++.h>

#pragma GCC optimize("Ofast")

using namespace std;

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    int n, m, k;
    cin >> n >> m >> k;

    int a[n];
    int b[m];

    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
    sort(a, a + n);
    for (int i = 0; i < m; i++) {
        cin >> b[i];
    }
    sort(b, b + m);

    int i = 0;
    int j = 0;
    int c = 0;
    while (i < n && j < m) {
        if (abs(a[i] - b[j]) <= k) {
            i++;
            j++;
            c++;
        } else if (a[i] > b[j]) {
            j++;
        } else {
            i++;
        }
    }

    cout << c;
}