#include <bits/stdc++.h>

#pragma GCC optimize("Ofast")

using namespace std;

bool sortArr(const pair<int, int>& a, const pair<int, int>& b) {
    return a.second < b.second;
}

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    int n;
    cin >> n;

    pair<int, int> m[n];

    for (int i = 0; i < n; i++) {
        int a, b;
        cin >> a >> b;
        m[i] = pair(a, b);
    }

    sort(m, m + n, sortArr);

    int i = 0;
    int t = 0;
    int c = 0;
    while (i < n) {
        int a = m[i].first;
        int b = m[i].second;
        if (t <= a) {
            t = b;
            c++;
        }
        i++;
    }

    cout << c;
}