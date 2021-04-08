#include <iostream>
#include <vector>
#include <fstream>
#include <chrono>
#include <cmath>

using namespace std;
using namespace chrono;

vector<bool> SieveOfEratosthenes(unsigned long long n) {
    ofstream myfile("PrimeSieve.dat");
    if (myfile.is_open()) {
        vector<bool> vect(n + 1);
        unsigned long long p = 2, nn = sqrt(n);
        while (p <= nn) {
            if (vect[p] == false) {
                myfile << p << " ";
                for (unsigned long long i = p * p; i <= n; i += p)
                    vect[i] = true;
            }
            p++;
        }
        while (p <= n) {
            if (vect[p] == false)
                myfile << p << " ";
            p++;
        }
        myfile.close();
        return vect;
    }
    else
        cout << "Unable to open file";
    return vector<bool>(0);
}

int main(int argc, char const* argv[]) {
    unsigned long long n;
    if (argc == 1) {
        cin >> n;
    }
    else {
        char* ptr;
        n = strtoull(argv[1], &ptr, 10);
    }
    cout << "Calculating the prime numbers smaller than or equal to " << n << endl;
    auto start = high_resolution_clock::now();
    vector<bool> a = SieveOfEratosthenes(n);
    auto stop = high_resolution_clock::now();
    auto duration = duration_cast<microseconds>(stop - start);
    int b = -2;
    for (bool i : a)
        if (i == false)
            b++;
    cout << "Number of primes below " << n << ": " << b << endl;
    cout << "Time taken by function: " << duration.count() / (double)1000 << " milliseconds" << endl;
    return 0;
}
