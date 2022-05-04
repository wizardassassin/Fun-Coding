#include <bits/stdc++.h>

#pragma GCC optimize("Ofast")

using namespace std;

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    int n, x;
    cin >> n >> x;

    int p[n];

    for (int i = 0; i < n; i++) cin >> p[i];
    sort(p, p + n);

    int j = n - 1;
    int i = 0;
    int c = 0;
    while (j > i) {
        if (p[i] + p[j] <= x) i++;
        j--;
        c++;
    }
    if (j == i) c++;

    cout << c;
}