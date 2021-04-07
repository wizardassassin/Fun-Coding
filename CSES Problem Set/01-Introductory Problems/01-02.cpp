#include <bits/stdc++.h>

using namespace std;

int main() {
    long long n, a = 0;
    cin >> n;
    for (int i = 1; i < n; i++) {
        int b;
        cin >> b;
        a += b;
    }
    cout << n * (n + 1) / 2 - a;
}