#include <bits/stdc++.h>

using namespace std;

// int ops[10][3] = {
//     {0, 1, 2}, {1, 2, 3}, {2, 3, 4}, {3, 4, 5}, {4, 5, 6},
//     {5, 6, 7}, {6, 7, 8}, {7, 8, 9}, {8, 9, 0}, {9, 0, 1},
// };

void solve() {
    int n;
    cin >> n;
    vector<int> s(n);
    for (int i = 0; i < n; i++) {
        char t;
        cin >> t;
        s[i] = (int)t - 48;
    }

    int i = s.size() - 1;
    while (i > 0) {
        int a = 0;
        auto c = s.at(i);
        auto p = s.at(i - 1);
        if (p == (c + 9) % 10) {
            
        }
    }

    // bool didOP = false;
    // do {
    //     didOP = false;
    //     for (int a = 0; a < 10; a++) {
    //         int i = 0;
    //         while (i < s.size() - 1) {
    //             if (s.at(i) == ops[a][0] && s.at(i + 1) == ops[a][1]) {
    //                 s.at(i) = ops[a][2];
    //                 s.erase(s.begin() + i + 1);
    //                 didOP = true;
    //             }
    //             i++;
    //         }
    //     }
    // } while (didOP);

    for (int c : s) cout << c;
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