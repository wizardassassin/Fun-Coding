#include <bits/stdc++.h>

#pragma GCC optimize("Ofast,unroll-loops")
#pragma GCC target("avx,avx2,fma")

// Should I follow best practices?

using namespace std;
using namespace chrono;

// Computes a value.
void compute(long long& r, long long n, string t) {
    long long ret = 1;
    for (long long i = 1; i < n; i++) {
        ret += i;
        ret %= n;
    }
    // this_thread::sleep_for(std::chrono::milliseconds(n));
    r = ret;
    // Prevent race condition
    cout << "Thread " << t << ": " << ret << "\n";
}

// Should I follow best practices?
int main(int argc, char const* argv[]) {
    // ios::sync_with_stdio(0);
    // cin.tie(0);

    auto start1 = steady_clock::now();

    cout << "Main Thread: "
         << "Start"
         << "\n";

    long long n = 1451822436;
    int threadCount = 8;
    vector<thread> threads;
    vector<long long> outputs(threadCount);

    for (int i = 0; i < threadCount; i++) {
        threads.push_back(thread(compute, ref(outputs[0]), n, to_string(i)));
    }

    for (auto& thread : threads) {
        thread.join();
    }

    int sum = 0;
    for (const auto& output : outputs) {
        sum += output;
        sum %= n;
    }

    cout << "Main Thread: " << sum << "\n";

    auto end1 = steady_clock::now();

    cout << "Main Thread: "
         << duration_cast<nanoseconds>(end1 - start1).count() / 1000000.0
         << " ms"
         << "\n";

    cout << "Main Thread: "
         << "End"
         << "\n";

    return 0;
}
