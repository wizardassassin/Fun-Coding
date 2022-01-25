#include <bits/stdc++.h>

using namespace std;

void compute() {
    long long n;
    cin >> n;

    long long counter = 1;
    long long length = 0;
    long long t = 1;
    while (length + 9 * counter * t <= n) {
        length += 9 * counter * t;
        counter *= 10;
        t++;
    }
    long long remain = n - length;
    long long num = counter + remain / t;
    long long digit = remain % t;

    if (digit == 0) {
        cout << (num - 1) % 10 << '\n';
    } else {
        cout << (num / (long long)pow(10, t - digit)) % 10 << '\n';
    }
}

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    int q;
    cin >> q;
    while (q--) {
        compute();
    }
}