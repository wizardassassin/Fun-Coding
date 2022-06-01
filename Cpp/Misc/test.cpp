#include <bits/stdc++.h>

using namespace std;
using namespace chrono;

void printArr(vector<int>& arr) {
    int len = arr.size();
    for (int i = 0; i < len; i++) {
        cout << arr[i] << " ";
    }
    cout << "\n";
}

vector<int> randomNonRepeatingIndexes(int max, int len) {
    random_device rd;
    mt19937 mt(rd());
    uniform_int_distribution<int> distribution(0, max);
    unordered_set<int> vals;
    while (vals.size() < len) {
        vals.insert(distribution(mt));
    }
    vector<int> vect(vals.begin(), vals.end());
    return vect;
}

void linearDecreasingArr(vector<int>& arr, int min, int max) {
    int len = arr.size();
    int val = max / (len - 1);
    for (int i = 0; i < len; i++) {
        arr[i] = val * (len - 1 - i) + min;
    }
}

int test = 100;

int main(int argc, char const* argv[]) {
    vector<int> arr(100);
    linearDecreasingArr(arr, 0, 1000);
    printArr(arr);

    cout << test << "\n";
    int test2 = test + 1;
    cout << test2 << "\n";

    cout << "a"
         << "\n";

    return 0;
}
