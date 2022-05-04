#include <bits/stdc++.h>

using namespace std;

void solve() {
    int n;
    cin >> n;
    bool r = 0, y = 0, b = 0;
    int s = 0;
    while (n--) {
        char t;
        cin >> t;
        switch (t) {
            case 'U':
                if (r) {
                    s++;
                    r = 0;
                }
                if (y) {
                    s++;
                    y = 0;
                }
                if (b) {
                    s++;
                    b = 0;
                }
                break;
            case 'R':
                r = 1;
                if (y) {
                    s++;
                    y = 0;
                }
                if (b) {
                    s++;
                    b = 0;
                }
                break;
            case 'Y':
                y = 1;
                if (r) {
                    s++;
                    b = 0;
                }
                if (b) {
                    s++;
                    b = 0;
                }
                break;
            case 'B':
                b = 1;
                if (y) {
                    s++;
                    y = 0;
                }
                if (r) {
                    s++;
                    r = 0;
                }
                break;
            case 'O':
                r = 1;
                y = 1;
                if (b) {
                    s++;
                    b = 0;
                }
                break;
            case 'P':
                r = 1;
                b = 1;
                if (y) {
                    s++;
                    y = 0;
                }
                break;
            case 'G':
                y = 1;
                b = 1;
                if (r) {
                    s++;
                    r = 0;
                }
                break;
            case 'A':
                r = 1;
                y = 1;
                b = 1;
                break;
        }
    }
    if (r) {
        s++;
        r = 0;
    }
    if (y) {
        s++;
        y = 0;
    }
    if (b) {
        s++;
        b = 0;
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