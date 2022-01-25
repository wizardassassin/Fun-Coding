#include <bits/stdc++.h>

using namespace std;

int *a, m = 0;
long long v;

void small(int i, long long s) {
    v = min(v, abs(s));
    if (v == 0) {
        cout << v;
        exit(0);
    }
    while (++i < m) {
        small(i, s - 2 * a[i - 1]);
    }
    v = min(v, abs(s - 2 * a[m - 1]));
}

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    int n;
    cin >> n;

    a = new int[n];

    long long s = 0;
    while (m < n) {
        int t;
        cin >> t;
        a[m++] = t;
        s += t;
    }
    v = LLONG_MAX;

    small(0, s);
    cout << v;
}