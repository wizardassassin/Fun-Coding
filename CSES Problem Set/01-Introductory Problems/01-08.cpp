#include <bits/stdc++.h>

using namespace std;

int main() {
    int n, b = 1;
    cin >> n;
    n--;
    switch (n % 4) {
    case 0:
    case 1:
        cout << "NO";
        break;
    case 3:
        b++;
    case 2:
        cout << "YES" << "\n";
        int a = n / 4;
        b += a;
        a = 2 * (a + 1);
        cout << a << "\n" << b;
        for (int i = b + 1; i < b + a; i++)
            cout << " " << i;
        n++;
        cout << "\n" << n - a << "\n" << n;
        for (int i = 1; i < b; i++)
            cout << " " << i;
        for (int i = n - 1; i >= b + a; i--)
            cout << " " << i;
        break;
    }
}