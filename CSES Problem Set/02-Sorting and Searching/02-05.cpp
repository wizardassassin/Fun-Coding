#include <bits/stdc++.h>

#pragma GCC optimize("Ofast")

using namespace std;

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    int n;
    cin >> n;

    int a[n];
    int b[n];

    for (int i = 0; i < n; i++) {
        int t1, t2;
        cin >> t1 >> t2;
        a[i] = t1;
        b[i] = t2;
    }

    sort(a, a + n);
    sort(b, b + n);

    int i = 0;
    int j = 0;
    int c = 0;
    int m = 0;
    while (i < n && j < n) {
        if (a[i] < b[j]) {
            c++;
            m = max(m, c);
            i++;
        } else {
            c--;
            j++;
        }
    }

    cout << m;
    
}
