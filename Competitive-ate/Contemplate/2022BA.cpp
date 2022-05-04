#include <bits/stdc++.h>

#pragma GCC optimize("Ofast")
#define M_PIl 3.141592653589793238462643383279502884L

using namespace std;

void solve() {
    long long r, a, b;
    cin >> r >> a >> b;
    long double rt = 0;
    long long t = r;
    bool g = true;
    rt += t * t;
    while (t != 0) {
        if (g) {
            g = false;
            t *= a;
            rt += t * t;
        } else {
            g = true;
            t /= b;
            rt += t * t;
        }
    }
    cout << setprecision(std::numeric_limits<long double>::digits10 + 1)
         << rt * M_PIl;
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