#include <bits/stdc++.h>

using namespace std;

long long compute(long long n) {
    long long counter = 1;
    long long length = 0;
    long long t = 1;
    while (length + 9 * counter * t <= n) {
        length += 9 * counter * t;
        counter *= 10;
        t++;
    }
    long long remain = n - length;
    long long num = counter + remain / t;
    long long digit = remain % t;
    cout << remain << endl;
    cout << num << endl;
    cout << digit << endl;
    cout << counter << endl;
    cout << length << endl;
    return (long long) (num / pow(10, digit)) % 10;
}

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    long long n;
    cin >> n;

    cout << compute(n);
}

/*
#include <bits/stdc++.h>

using namespace std;

// set<long long> s;
// map<long long, int> m;

// void compute(long long n) {
//     int t;
//     m.insert(pair(n, t));
// }

void compute(long long n) {
    long long counter = 1;
    long long length = 0;
    long long t = 1;
    while (length + 9 * counter * t < n) {
        length += 9 * counter * t;
        counter *= 10;
        t++;
    }
    long long remain = n - length;
    long long num = counter + remain / t;
    long long digit = remain % t;

    if (digit == 0) {
        cout << (num - 1) % 10 << '\n';
    } else {
    cout << (num / (long long) pow(10, t - digit)) % 10 << '\n';
    }
}

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    int q;
    cin >> q;
    while (q--) {
        long long k;
        cin >> k;
        compute(k);
    }
    // long long k[q];
    // for (int i = 0; i < q; i++) {
    //     long long t;
    //     cin >> t;
    //     k[i] = t;
    //     s.insert(t);
    // }

    // for (auto i = s.begin(); i != s.end(); i++) {
    //     compute(*i);
    // }

    // for (int i = 0; i < q; i++) {
    //     cout << m.at(k[i]) << '\n';
    // }
}
*/