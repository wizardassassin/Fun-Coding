#include <bits/stdc++.h>

// #pragma GCC optimize("Ofast")

using namespace std;

vector<long long> v1 = {1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0};
long long siz = 12;
long long n = 12, d = 2;

long long fromTo(long long a, long long b) {
    if (a > b) {
        swap(a, b);
    }
    return min(b - a, d - b + a);
}

long long sol(long long start, long long end) {
    if (start == 0 && end == siz - 1) {
        long long t = min(fromTo(v1[start], 0), fromTo(v1[end], 0));
        cout << t << " " << start << " " << end << "a" << endl;
        return t;
    }
    if (start == 0) {
        long long t = fromTo(v1[start], v1[end + 1]);
        cout << t << " " << start << " " << end << "b" << endl;
        return t + sol(start, end + 1);
    }
    if (end == siz - 1) {
        long long t = fromTo(v1[start], v1[start - 1]);
        cout << t << " " << start << " " << end << "c" << endl;
        return t + sol(start - 1, end);
    }
    if (v1[start - 1] == v1[end + 1]) {
        long long t = fromTo(v1[start], v1[start - 1]);
        cout << t << " " << start << " " << end << "d" << endl;
        return t + sol(start - 1, end + 1);
    }
    long long t = fromTo(v1[start], v1[start - 1]);
    long long t2 = fromTo(v1[start], v1[end + 1]);
    cout << t << " " << t2 << " " << start << " " << end << "e" << endl;
    return min(t + sol(start - 1, end), t2 + sol(start, end + 1));
}

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    cout << sol(5, 5) << endl;
}