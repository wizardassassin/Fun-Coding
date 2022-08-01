#include <bits/stdc++.h>

#pragma GCC optimize("Ofast")

using namespace std;

bool isEqual(const string &str, const int leftMost, const int rightMost, const int space) {
    for (int i = 0; i < space; i++) {
        if (str[leftMost + i] != str[rightMost + i]) {
            return false;
        }
    }
    return true;
}

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    cout << isEqual("abcdaabc", 0, 4, 3) << endl;
}