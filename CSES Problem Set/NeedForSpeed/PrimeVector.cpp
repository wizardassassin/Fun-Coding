#include <bits/stdc++.h>

using namespace std;

int main() {
    int n;
    unsigned long long a = 2;
    cin >> n;
    vector<int> vect(n);
    for (int i = 0; i < n; i++) {
        while (true) {
            bool br = false;
            for (int j = 0; j < i; j++) {
                if (a % vect[j] == 0) {
                    br = true;
                    break;
                }
            }
            if (br) {
                a++;
            } else {
                vect[i] = a++;
                break;
            }
        }
    }
    for (int i : vect)
        cout << i << " ";
}