#include <bits/stdc++.h>

#pragma GCC optimize("Ofast,unroll-loops")
#pragma GCC target("avx,avx2,fma")

using namespace std;

void solve() {
    int n, m;
    cin >> n >> m;
    vector<int> vect(n);
    for (int i = 0; i < n; i++) {
        cin >> vect[i];
    }
    sort(vect.begin(), vect.end());
    int point = n - 1;
    double sum = 0;
    while (m > 1) {
        sum += vect[point--];
        m--;
    }
    int mid = point / 2;
    if (point % 2 != 0) {
        sum += (vect[mid] + vect[mid + 1]) / 2.0;
    } else {
        sum += vect[mid];
    }
    cout << sum;
}

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    cout << fixed << setprecision(6);

    int t, i = 1;
    cin >> t;
    while (t--) {
        cout << "Case #" << i++ << ": ";
        solve();
        cout << "\n";
    }
}