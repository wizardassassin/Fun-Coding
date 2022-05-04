#include <bits/stdc++.h>

using namespace std;

void solve() {
    string s, f;
    cin >> s >> f;
    int c = 0;
    f += ' ';
    int len = f.length() - 1;
    vector<int> values;

    for (int i = 0; i < len; i++) {
        if (f[i] != f[i + 1]) {
            values.push_back((int)f[i] - 97);
        }
    }

    int counter = 0;
    int len2 = s.length();
    int len3 = values.size();
    for (int i = 0; i < len2; i++) {
        int t1 = abs((int)s[i] - 97 - values.at(0));
        int min1 = min(t1, 26 - t1);
        for (int j = 1; j < len3; j++) {
            int t = abs((int)s[i] - 97 - values.at(j));
            min1 = min(min1, min(t, 26 - t));
        }
        counter += min1;
    }

    cout << counter;
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