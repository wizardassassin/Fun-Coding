#include <bits/stdc++.h>

#pragma GCC optimize("Ofast")

using namespace std;

bool palin(long long n) {
    string s = to_string(n);
    long long l = s.length();
    for (int i = 0; i < l / 2; i++) {
        if (s[i] != s[l - i - 1]) {
            return false;
        }
    }
    return true;
}

void solve() {
    long long a;
    cin >> a;
    long long i = 1;
    long long s = 0;
    long double e = sqrt(a);
    while (i < e) {
        if (a % i == 0) {
            if (palin(i)) {
                s++;
            }
            if (palin(a / i)) {
                s++;
            }
        }
        i++;
    }
    if (floor(e) == e && a % i == 0) {
        if (palin(i)) {
            s++;
        }
    }
    cout << s;
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