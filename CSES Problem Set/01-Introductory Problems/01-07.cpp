#include <bits/stdc++.h>

using namespace std;

int main() {
    int n;
    cin >> n;
    cout << 0;
    if (n >= 2)
        cout << "\n" << 6;
    for (int i = 3; i <= n; i++) {
        cout << "\n" << (long long)i * i * (i * i - 1) / 2 - 4 * (i - 1) * (i - 2);
    }
}