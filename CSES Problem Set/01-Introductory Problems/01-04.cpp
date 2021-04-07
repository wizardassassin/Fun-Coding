#include <bits/stdc++.h>

using namespace std;

int main() {
    long long acc = 0;
    int len, cur, pre;
    cin >> len >> pre;
    for (int i = 1; i < len; i++) {
        cin >> cur;
        int add = max(pre - cur, 0);
        pre = cur + add;
        acc += add;
    }
    cout << acc;
}