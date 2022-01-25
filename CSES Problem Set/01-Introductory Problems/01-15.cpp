#include <bits/stdc++.h>

using namespace std;

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    string s;
    cin >> s;

    sort(s.begin(), s.end());

    unordered_map<char, int> m;
    for_each(s.begin(), s.end(), [&m](char const& c) {
        auto t = m.find(c);
        if (t == m.end()) {
            m.insert(pair<char, int>(c, 0));
        } else {
            t->second += 1;
        }
    });

    int v = ceil(tgamma(s.length() + 1));
    for_each(m.begin(), m.end(), [&v](pair<char, int> const& p) {
        if (p.second) v /= tgamma(p.second + 2);
    });
    cout << v << "\n";

    do {
        cout << s << "\n";
    } while (next_permutation(s.begin(), s.end()));
}