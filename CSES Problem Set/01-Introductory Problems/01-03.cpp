#include <bits/stdc++.h>

using namespace std;

int main() {
    int acc = 0, cur = 0;
    string str;
    cin >> str;
    char cha = str[0];
    for (char c : str) {
        if (c == cha)
            cur++;
        else {
            cha = c;
            acc = max(acc, cur);
            cur = 1;
        }
    }
    cout << max(acc, cur);
}