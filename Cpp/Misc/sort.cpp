#include <bits/stdc++.h>

#pragma GCC optimize("Ofast,unroll-loops")
#pragma GCC target("avx,avx2,fma")

using namespace std;
using namespace chrono;

/**
 * @brief Merges two sorted arrays into one combined sorted array.
 * len1 + len2 = len3.
 *
 * @param arr1 First array to merge with
 * @param arr2 Second array to merge with
 * @param arr3 Array to merge into
 * @param len1 Length of the first array
 * @param len2 Length of the second array
 * @param len3 Length of the third array
 */
void mergeHelper(vector<int>& arr1, vector<int>& arr2, vector<int>& arr3,
                 int len1, int len2, int len3) {
    int i = 0;
    int j = 0;
    int k = 0;
    while (i < len1 && j < len2) {
        int first = arr1[i];
        int second = arr2[j];
        if (first < second) {
            arr3[k++] = first;
            i++;
        } else {
            arr3[k++] = second;
            j++;
        }
    }
    while (i < len1) {
        int first = arr1[i];
        arr3[k++] = first;
        i++;
    }
    while (j < len2) {
        int second = arr2[j];
        arr3[k++] = second;
        j++;
    }
}

/**
 * @brief Sorts an array using an iterative implimentation of merge sort.
 * 70% familiarity.
 *
 * @param arr Array to sort
 * @param len Length of the array
 */
void mergeSort(vector<int>& arr, int len) {
    if (len <= 1) {
        return;
    }
    int half = len / 2;
    vector<int> firstHalf(arr.begin(), arr.begin() + half);
    vector<int> secondHalf(arr.begin() + half, arr.end());
    mergeSort(firstHalf, half);
    mergeSort(secondHalf, len - half);
    mergeHelper(firstHalf, secondHalf, arr, half, len - half, len);
}

/**
 * @brief Sorts an array using insertion sort.
 * 90% familiarity.
 *
 * @param arr Array to sort
 * @param len Length of the array
 */
void insertionSort(vector<int>& arr, int len) {
    int i = 1;
    while (i < len) {
        int j = i;
        int insert = arr[i];
        while (j > 0 && arr[j - 1] > insert) {
            arr[j] = arr[j - 1];
            j--;
        }
        i++;
        arr[j] = insert;
    }
}

/**
 * @brief Sorts an array using selection sort.
 * 95% familiarity.
 *
 * @param arr Array to sort
 * @param len Length of the array
 */
void selectionSort(vector<int>& arr, int len) {
    for (int i = 0; i < len - 1; i++) {
        int jMin = i;
        int temp1 = arr[jMin];
        for (int j = i + 1; j < len; j++) {
            if (arr[j] < temp1) {
                jMin = j;
                temp1 = arr[j];
            }
        }
        arr[jMin] = arr[i];
        arr[i] = temp1;
    }
}

/**
 * @brief Fills an array with random ints.
 *
 * @param arr Array to fill
 * @param min Min int to fill
 * @param max Max int to fill
 */
void randomArr(vector<int>& arr, int min, int max) {
    default_random_engine generator;
    uniform_int_distribution<int> distribution(min, max);
    int len = arr.size();
    for (int i = 0; i < len; i++) {
        arr[i] = distribution(generator);
    }
}

/**
 * @brief Fills an array with ints in lexicographically increasing order from 0
 * to len-1.
 *
 * @param arr Array to fill
 */
void ascendingArr(vector<int>& arr) {
    int len = arr.size();
    for (int i = 0; i < len; i++) {
        arr[i] = i;
    }
}

/**
 * @brief Fills an array with ints in lexicographically decreasing order from
 * len-1 to 0.
 *
 * @param arr Array to fill
 */
void descendingArr(vector<int>& arr) {
    int len = arr.size();
    for (int i = 0; i < len; i++) {
        arr[i] = len - 1 - i;
    }
}

/**
 * @brief Prints an array to standard output with a newline.
 *
 * @param arr Array to fill
 */
void printArr(vector<int>& arr) {
    int len = arr.size();
    for (int i = 0; i < len; i++) {
        cout << arr[i] << " ";
    }
    cout << "\n";
}

/**
 * @brief Determines whether or not an array is in increasing order.
 *
 * @param arr Array to check
 * @return bool
 */
bool isIncreasing(vector<int>& arr) {
    int len = arr.size();
    for (int i = 1; i < len; i++) {
        if (arr[i - 1] > arr[i]) {
            return false;
        }
    }
    return true;
}

/**
 * @brief Determines whether or not an array is in decreasing order.
 *
 * @param arr Array to check
 * @return bool
 */
bool isDecreasing(vector<int>& arr) {
    int len = arr.size();
    for (int i = 1; i < len; i++) {
        if (arr[i - 1] > arr[i]) {
            return false;
        }
    }
    return true;
}

/**
 * @brief Validates the user written sorting methods.
 *
 * @param sorts Array of name-function pairs to validate
 * @return bool
 */
bool validateSorts(
    vector<pair<string, function<void(vector<int>&, int)>>>& sorts) {
    int testLen = 100;
    int minVal = 0;
    int maxVal = 10000;
    bool isValid = true;

    vector<int> testArr(testLen);
    randomArr(testArr, minVal, maxVal);
    vector<int> expectedArr(testArr.begin(), testArr.end());
    sort(expectedArr.begin(), expectedArr.end());

    cout << "Validation:\n";
    int sortsLen = sorts.size();
    for (int i = 0; i < sortsLen; i++) {
        vector<int> resultArr(testArr.begin(), testArr.end());
        string sortname = sorts[i].first;
        cout << sortname << ": ";
        sorts[i].second(resultArr, testLen);
        if (resultArr == expectedArr) {
            cout << "Passed";
        } else {
            cout << "Failed";
            cout << "\nExpected: [\n";
            printArr(expectedArr);
            cout << "]\nResult: [\n";
            printArr(resultArr);
            cout << "]";
        }
        cout << "\n";
    }

    return isValid;
}

void timeSorts(vector<pair<string, function<void(vector<int>&, int)>>>& sorts) {
    int testLen = 100000;
    int minVal = 0;
    int maxVal = 100000000;

    vector<int> testArr(testLen);
    randomArr(testArr, minVal, maxVal);

    cout << "Timings:\n";
    int sortsLen = sorts.size();
    for (int i = 0; i < sortsLen; i++) {
        vector<int> tempArr(testArr.begin(), testArr.end());
        string sortname = sorts[i].first;
        function<void(vector<int>&, int)> sortFunct = sorts[i].second;
        cout << sortname << ": ";

        auto start = steady_clock::now();
        sortFunct(tempArr, testLen);
        auto end = steady_clock::now();

        auto duration = duration_cast<nanoseconds>(end - start);
        cout << duration.count() / 1000000.0 << " ms";
        if (!isIncreasing(tempArr)) {
            cout << " (Failed)";
        }
        cout << "\n";
    }
}

/**
 * @brief Driver Code.
 * https://en.wikipedia.org/wiki/Sorting_algorithm
 *
 * @param argc
 * @param argv
 * @return int
 */
int main(int argc, char const* argv[]) {
    // ios::sync_with_stdio(0);
    // cin.tie(0);

    cout << setprecision(4) << fixed;

    vector<pair<string, function<void(vector<int>&, int)>>> sorts = {
        pair("Merge Sort", mergeSort),
        pair("Insertion Sort", insertionSort),
        pair("Selection Sort", selectionSort),
    };

    int testLen = 100000;
    int minVal = 0;
    int maxVal = 100000000;

    cout << "Sorting Algorithm Validation & Timings:\n";
    cout << "\n";
    cout << "Configuration:\n";
    cout << "Array Length: " << testLen << "\n";
    cout << "Minimum Value: " << minVal << "\n";
    cout << "Maximum Value: " << maxVal << "\n";
    cout << "\n";
    validateSorts(sorts);
    cout << "\n";
    timeSorts(sorts);

    return 0;
}
