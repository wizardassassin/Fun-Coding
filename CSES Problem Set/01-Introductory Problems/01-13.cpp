#include <bits/stdc++.h>

using namespace std;

int main() {
    int n;
    cin >> n;
    for (int i = 0, ii = pow(2, n); i < ii; i++) {
        vector<bool> vet(n);
        int a = i;
        int b = n;
        while (a != 0) {
            vet[--b] = (a % 2) ? true : false;
            a /= 2;
        }
        cout << vet[0];
        for (int i = 0; i < n - 1; i++) {
            cout << (int)(vet[i] ^ vet[i + 1]);
        }
        cout << "\n";
    }
}