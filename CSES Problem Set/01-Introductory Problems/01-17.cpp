#include <bits/stdc++.h>

using namespace std;

int p = 0;

void flip(char t[], int l) {
    int r = l / 8;
    int c = l % 8;

    for (int i = 0; i < 8; i++) {
        t[r * 8 + i] = '*';
        t[i * 8 + c] = '*';
    }

    int mnl = min(r, c);
    int mxl = min(7 - r, 7 - c);
    int sl1 = (r - mnl) * 8 + (c - mnl);
    int sl2 = (r + mxl) * 8 + (c + mxl);
    for (int i = sl1; i <= sl2; i += 9) {
        t[i] = '*';
    }

    int mnr = min(r, 7 - c);
    int mxr = min(7 - r, c);
    int sr1 = (r - mnr) * 8 + (c + mnr);
    int sr2 = (r + mxr) * 8 + (c - mxr);
    for (int i = sr1; i <= sr2; i += 7) {
        t[i] = '*';
    }
}

void simulate(char *b, char *e, int l, int q) {
    if (q == 8) {
        p++;
        return;
    }

    char t[64];
    copy(b, e, begin(t));
    if (q++ != 0) flip(t, l++);
    for (int i = l; i < 64; i++)
        if (t[i] != '*') simulate(begin(t), end(t), i, q);
}

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    // char b[64];
    // for (int i = 0; i < 64; i++) b[i] = '.';
    // // for (int i = 0; i < 64; i++) cin >> b[i];
    // flip(b, 29);
    // for (int i = 0; i < 8; i++) {
    //     for (int j = 0; j < 8; j++) {
    //         cout << b[i * 8 + j];
    //     }
    //     cout << '\n';
    // }

    char b[64];
    for (int i = 0; i < 64; i++) cin >> b[i];

    simulate(begin(b), end(b), 0, 0);

    cout << p;
}