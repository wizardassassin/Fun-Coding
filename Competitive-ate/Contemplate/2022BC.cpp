#include <bits/stdc++.h>

#pragma GCC optimize("Ofast")

using namespace std;

vector<long long> v1;
long long siz;
long long n, d;

long long fromTo(long long a, long long b) {
    if (a > b) {
        swap(a, b);
    }
    return min(b - a, d - b + a);
}

long long sol(long long start, long long end) {
    if (start == 0 && end == siz - 1) {
        return min(fromTo(v1[start], 0), fromTo(v1[end], 0));
    }
    if (start == 0) {
        return fromTo(v1[start], v1[end + 1]) + sol(start, end + 1);
    }
    if (end == siz - 1) {
        return fromTo(v1[end], v1[start - 1]) + sol(start - 1, end);
    }
    if (v1[start - 1] == v1[end + 1]) {
        return fromTo(v1[start], v1[start - 1]) + sol(start - 1, end + 1);
    }
    return min(fromTo(v1[start], v1[start - 1]) + sol(start - 1, end), fromTo(v1[start], v1[end + 1]) + sol(start, end + 1));
}

void solve() {
    cin >> n >> d;
    long long p1 = -1;
    for (long long i = 0; i < n; i++) {
        long long t;
        cin >> t;
        if (t != p1) {
            v1.push_back(t);
            p1 = t;
        }
    }
    siz = v1.size();
    long long r = LLONG_MAX;
    for (long long i = 0; i < siz; i++) {
        r = min(r, sol(i, i));
    }
    cout << r;
    v1.clear();
}

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    int t, i = 1;
    cin >> t;
    while (t--) {
        cout << "Case #" << i++ << ": ";
        solve();
        cout << "\n";
    }
}