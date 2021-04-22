#include <iostream>
#include <map>
#include <vector>

using namespace std;

int main() {
    int n, term = 0;
    cin >> n;
    if (n < 1)
        return 0;
    map<int, int> aMap;
    vector<int> aVector(n);
    cout << 0;
    aVector[0]++;
    for (int i = 1; i < n; i++) {
        int aVar = aMap[term];
        aMap[term] = i;
        if (aVar == 0)
            term = 0;
        else
            term = i - aVar;
        cout << " " << term;
        aVector[term]++;
    }
    cout << endl;
    for (auto const& x : aMap) {
        cout << x.first << ":" << x.second << "," << aVector[x.first] << " ";
    }
    cout << endl;
    int i = 0;
    for (auto x : aVector) {
        if (x == 0)
            cout << i << " ";
        i++;
    }
}