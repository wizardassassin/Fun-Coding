#include <bits/stdc++.h>

using namespace std;

set<int> values;

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    int n;
    cin >> n;

    while (n--) {
        int t;
        cin >> t;
        values.insert(t);
    }

    cout << values.size();
    
}