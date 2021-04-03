#include <iostream>

using namespace std;

int main() {
    int a;
    cin >> a;
    while (a--) {
        long long temp = 0, y, x;
        cin >> y >> x;
        if (y > x) {
            temp += y * y - y + 1;
            if (y % 2)
                temp -= y - x;
            else
                temp += y - x;
        }
        else {
            temp += x * x - x + 1;
            if (x % 2)
                temp += x - y;
            else
                temp -= x - y;
        }
        cout << temp << "\n";
    }
}