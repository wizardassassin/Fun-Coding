#include <bits/stdc++.h>

using namespace std;

unsigned long long factorial(int n) {
    unsigned long long a = 1;
    while (n)
        a *= n--;
    return a;
}

long long factor(int n) {
    long long a = 1;
    while (n)
        a *= n--;
    return a;
}

long factors(int n) {
    long a = 1;
    while (n)
        a *= n--;
    return a;
}

double factor1(int n) {
    double a = 1;
    while (n)
        a *= n--;
    return a;
}

long double factor2(int n) {
    long double a = 1;
    while (n)
        a *= n--;
    return a;
}

int main() {
    int s;
    cin >> s;
    cout << factorial(s) << "\n" << factor(s) << "\n" << factors(s) << "\n" << factor1(s) << "\n" << factor2(s);
}