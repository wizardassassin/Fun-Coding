#include <bits/stdc++.h>

#pragma GCC optimize("Ofast,unroll-loops")
#pragma GCC target("avx,avx2,fma")

using namespace std;

void solve() {
    int n, q;
    cin >> n >> q;
    string str;
    cin >> str;
    vector<pair<int, int>> vect(q);
    for (int i = 0; i < q; i++) {
        int l, r;
        cin >> l >> r;
        vect[i] = pair(l, r);
    }
    sort(vect.begin(), vect.end(),
         [](pair<int, int> &a, pair<int, int> &b) -> bool {
             if (a.first != b.first) {
                 return a.first < b.first;
             }
             return a.second < b.second;
         });
    // for (auto &&i : vect) {
    //     cout << i.first << "-" << i.second << ",";
    // }
    int c2 = 0;
    vector<int> vect2(26);
    int prev = -1;
    int prev2 = -1;
    for (auto &&p : vect) {
        int f = p.first;
        int s = p.second;
        if (prev != f) {
            for (int j = 0; j < 26; j++) {
                vect2[j] = 0;
            }
            prev2 = f - 1;
        }
        for (int i = prev2; i < s; i++) {
            int cInd = str[i] - 65;
            vect2[cInd]++;
        }
        int count = 0;
        for (auto &&p : vect2) {
            if (p % 2 == 1) {
                count++;
                if (count == 2) {
                    break;
                }
            }
        }
        if (count <= 1) {
            c2++;
        }
        prev = f;
        prev2 = s;
    }

    cout << c2;
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