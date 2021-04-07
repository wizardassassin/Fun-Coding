#include <bits/stdc++.h>

using namespace std;

int main() {
    int n;
    cin >> n;
    long long a = 1;
    for (; n >= 33; n -= 33) {
        a *= pow(2, 33);
        a %= 1000000007;
    }
    a *= pow(2, n);
    cout << a % 1000000007;
}