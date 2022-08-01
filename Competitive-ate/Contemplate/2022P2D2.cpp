#include <bits/stdc++.h>

#pragma GCC optimize("Ofast,unroll-loops")
#pragma GCC target("avx,avx2,fma")

using namespace std;

void solve() {
    string inStr;
    cin >> inStr;
    if (regex_match(inStr, regex(".*([aeiou].*[aeiou]).*[aeiou].*\\1.*"))) {
        cout << "Spell!";
    } else {
        cout << "Nothing.";
    }
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