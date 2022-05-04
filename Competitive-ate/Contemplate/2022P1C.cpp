#include <bits/stdc++.h>

using namespace std;

void solve() {
    int n;
    cin >> n;
    map<int, int> s;
    int cur = 1;
    for (int i = 1; i <= n; i++) {
        int t;
        cin >> t;
        if (t <= cur) {
            cout << cur << " ";
            continue;
        }
        auto iter = s.find(t);
        if (iter == s.end()) {
            s.insert(pair(t, 1));
        } else {
            iter->second++;
        }
        int sum = 0;
        for (auto iter1 = s.rbegin(); iter1 != s.rend(); iter1++) {
            if (iter1->first <= cur) {
                break;
            }
            if (cur < iter1->second + sum) {
                cur = min(iter1->first, iter1->second + sum);
                break;
            }
            sum += iter1->second;
        }
        cout << cur << " ";
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