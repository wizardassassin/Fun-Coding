#include <bits/stdc++.h>

using namespace std;

int main() {
    string s;
    cin >> s;
    vector<int> vet(26);
    int o = 0;
    char oo;
    for (char c : s)
        vet[c - 65]++;
    for (int i = 0; i < 26; i++) {
        if (vet[i] % 2) {
            o++;
            oo = i + 65;
        }
        vet[i] /= 2;
    }
    if (s.size() % 2) {
        if (o != 1) {
            cout << "NO SOLUTION";
            return 0;
        }
    }
    else {
        if (o > 0) {
            cout << "NO SOLUTION";
            return 0;
        }
    }
    for (int i = 0; i < 26; i++) {
        int j = vet[i];
        while (j--) {
            cout << char(i + 65);
        }
    }
    if (o == 1) {
        cout << oo;
    }
    for (int i = 25; i >= 0; i--) {
        int j = vet[i];
        while (j--) {
            cout << char(i + 65);
        }
    }
}