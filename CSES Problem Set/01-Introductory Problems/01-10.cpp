#include <bits/stdc++.h>

using namespace std;

int main() {
    int n, a = 0;
    cin >> n;
    for (int i = 5; n / i >= 1; i *= 5)
        a += n / i;
    cout << a;
}