#include <bits/stdc++.h>

using namespace std;

int main() {
    int t;
    cin >> t;
    for (int i = 0; i < t; i++) {
        int a, b;
        cin >> a >> b;
        if (b < a)
            b += a,
            a = b - a,
            b -= a;
        if ((float)b / a > 2) {
            cout << "NO" << "\n";
            continue;
        }
        ((-b + 2 * a) % 3) ? cout << "NO" : cout << "YES";
        cout << "\n";
    }
}