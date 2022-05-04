#include <bits/stdc++.h>

using namespace std;

void solve() {
    string k;
    cin >> k;
    cout << k << " is ruled by ";
    switch (tolower(k[k.size() - 1])) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            cout << "Alice";
            break;
        case 'y':
            cout << "nobody";
            break;
        default:
            cout << "Bob";
            break;
    }
    cout << ".";
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