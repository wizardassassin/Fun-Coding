#include <bits/stdc++.h>

using namespace std;

void move(int n, int s, int d, int a) {
    if (n <= 1) {
        cout << "\n" << s << " " << d;
    }
    else {
        move(n - 1, s, a, d);
        cout << "\n" << s << " " << d;
        move(n - 1, a, d, s);
    }
}

int main() {
    int n;
    cin >> n;
    cout << pow(2, n) - 1;
    move(n, 1, 3, 2);
}