#include <bits/stdc++.h>

#pragma GCC optimize("Ofast,unroll-loops")
#pragma GCC target("avx,avx2,fma")

using namespace std;
using namespace chrono;

// TODO: Maybe make it possible to pass in an array of array creating functions.
// TODO: Maybe change the output format.
// TODO: Implement the functions at around line 265.

void quickSortHelper(vector<int>& arr, int start, int end) {
    if (start >= end) {
        return;
    }
    int realStart = start;
    int realEnd = end;
    int mid = (start + end) / 2;
    if (arr[mid] < arr[start]) {
        swap(arr[start], arr[mid]);
    }
    if (arr[end] < arr[start]) {
        swap(arr[start], arr[end]);
    }
    if (arr[mid] < arr[end]) {
        swap(arr[mid], arr[end]);
    }
    int pivot = arr[end];
    while (start < end) {
        if (arr[start] > pivot) {
            arr[end] = arr[start];
            arr[start] = arr[end - 1];
            end--;
        } else {
            start++;
        }
    }
    arr[end] = pivot;
    quickSortHelper(arr, realStart, end - 1);
    quickSortHelper(arr, end + 1, realEnd);
}

void quickSort(vector<int>& arr, int len) {
    quickSortHelper(arr, 0, len - 1);
}

/**
 * @brief Sorts an array using gnome sort.
 *
 * @param arr Array to sort
 * @param len Length of the array
 */
void gnomeSort(vector<int>& arr, int len) {
    int i = 0;
    while (i < len) {
        if (i == 0 || arr[i] >= arr[i - 1]) {
            i++;
        } else {
            swap(arr[i], arr[i - 1]);
            i--;
        }
    }
}

/**
 * @brief Sorts an array using bubble sort.
 *
 * @param arr Array to sort
 * @param len Length of the array
 */
void bubbleSort(vector<int>& arr, int len) {
    bool swapped;
    do {
        swapped = false;
        for (int i = 1; i < len; i++) {
            if (arr[i - 1] > arr[i]) {
                swap(arr[i - 1], arr[i]);
                swapped = true;
            }
        }
        len--;
    } while (swapped);
}

void mergeHelper(vector<int>& arr, int start1, int end1, int start2, int end2) {
    vector<int> arr2(arr.begin() + start1, arr.begin() + end2 + 1);
    int i = 0;
    int len1 = end1 - start1;
    int j = len1 + 1;
    int len2 = end2 - start1;
    int k = start1;
    while (i <= len1 && j <= len2) {
        int first = arr2[i];
        int second = arr2[j];
        if (first < second) {
            arr[k++] = first;
            i++;
        } else {
            arr[k++] = second;
            j++;
        }
    }
    while (i <= len1) {
        int first = arr2[i];
        arr[k++] = first;
        i++;
    }
    while (j <= len2) {
        int second = arr2[j];
        arr[k++] = second;
        j++;
    }
}

void mergeSortHelper(vector<int>& arr, int start, int end) {
    if (start >= end) {
        return;
    }
    int mid = (start + end) / 2;
    mergeSortHelper(arr, start, mid);
    mergeSortHelper(arr, mid + 1, end);
    mergeHelper(arr, start, mid, mid + 1, end);
}

/**
 * @brief Sorts an array using an iterative implementation of merge sort.
 * 70% familiarity.
 *
 * @param arr Array to sort
 * @param len Length of the array
 */
void mergeSort(vector<int>& arr, int len) {
    mergeSortHelper(arr, 0, len - 1);
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
 * @brief
 *
 * @param a
 * @param b
 * @return int
 */
int compare(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

/**
 * @brief Sorts an array using the built in quick sort function.
 *
 * @param arr Array to sort
 * @param len Length of the array
 */
void builtInQuickSort(vector<int>& arr, int len) {
    qsort(&arr[0], arr.size(), sizeof(int), compare);
}

/**
 * @brief Sorts an array using the built in sort function.
 *
 * @param arr Array to sort
 * @param len Length of the array
 */
void builtInSort(vector<int>& arr, int len) {
    sort(arr.begin(), arr.end());
}

/**
 * @brief Fills an array with random ints.
 *
 * @param arr Array to fill
 * @param min Min int to fill
 * @param max Max int to fill
 */
void randomArr(vector<int>& arr, int min, int max) {
    random_device rd;
    mt19937 mt(rd());
    uniform_int_distribution<int> distribution(min, max);
    int len = arr.size();
    for (int i = 0; i < len; i++) {
        arr[i] = distribution(mt);
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
 * @brief Fills an array with ints of value val.
 *
 * @param arr Array to fill
 * @param val Value to use
 */
void repeatingArr(vector<int>& arr, int val) {
    int len = arr.size();
    for (int i = 0; i < len; i++) {
        arr[i] = val;
    }
}

void almostRandomArr(vector<int>& arr, int len) {
}

void almostIncreasingArr(vector<int>& arr, int) {
}

void almostDecreasingArr(vector<int>& arr, int len) {
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
 * @brief Validates sorting methods.
 *
 * @param sorts Array of name-function pairs to validate
 */
void validateSorts(
    vector<pair<string, function<void(vector<int>&, int)>>>& sorts) {
    int testLen = 100;
    int minVal = 0;
    int maxVal = 10000;

    vector<int> testArr(testLen);
    randomArr(testArr, minVal, maxVal);
    vector<int> expectedArr(testArr.begin(), testArr.end());
    sort(expectedArr.begin(), expectedArr.end());

    cout << "Validation:\n";
    int sortsLen = sorts.size();
    for (int i = 0; i < sortsLen; i++) {
        vector<int> resultArr(testArr.begin(), testArr.end());

        // vector<int> resultArr(testLen);
        // randomArr(resultArr, minVal, maxVal);
        // vector<int> expectedArr(resultArr.begin(), resultArr.end());
        // sort(expectedArr.begin(), expectedArr.end());

        string sortName = sorts[i].first;
        cout << sortName << ": ";
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
}

/**
 * @brief Times sorting methods.
 *
 * @param sorts Array of name-function pairs to time
 */
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

        // vector<int> tempArr(testLen);
        // randomArr(tempArr, minVal, maxVal);

        string sortName = sorts[i].first;
        function<void(vector<int>&, int)> sortFunct = sorts[i].second;
        cout << sortName << ": ";

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

    int testLen = 100000;
    int minVal = 0;
    int maxVal = 100000000;

    vector<pair<string, function<void(vector<int>&, int)>>> sorts = {
        pair("Insertion Sort", insertionSort),
        pair("Selection Sort", selectionSort),
        pair("Bubble Sort", bubbleSort),
        pair("Gnome Sort", gnomeSort),
        pair("Quick Sort", quickSort),
        pair("Merge Sort", mergeSort),
        pair("Built in Sort", builtInSort),
        pair("Built in Quick Sort", builtInQuickSort),
    };

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