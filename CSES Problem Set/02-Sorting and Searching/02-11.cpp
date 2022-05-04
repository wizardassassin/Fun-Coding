#include <bits/stdc++.h>

#pragma GCC optimize("Ofast")

using namespace std;

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    int n;
    cin >> n;

    vector<int> v(n);

    for (int i = 0; i < n; i++) {
        int t;
        cin >> t;
        v[t - 1] = i;
    }

    int c = 1;
    for (int i = 1; i < n; i++) {
        if (v[i] < v[i - 1]) c++;
    }

    cout << c;
}