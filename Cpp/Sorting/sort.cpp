#include <bits/stdc++.h>

#pragma GCC optimize("Ofast,unroll-loops")
#pragma GCC target("avx,avx2,fma")

using namespace std;
using namespace chrono;

// TODO: Maybe change the output format.
// TODO: Maybe reduce some repeated code.

int testLen = 100000;
int minVal = 0;
int maxVal = 100000000;

vector<vector<string>> dataCSV;

// TODO: Implement This
void blockSort(vector<int>& arr, int start, int end) {
    // TODO: Put Code Here
}

// TODO: Implement This
void shellSort(vector<int>& arr, int start, int end) {
    // TODO: Put Code Here
}

// TODO: Implement This
void heapSort(vector<int>& arr, int start, int end) {
    // TODO: Put Code Here
}

/**
 * @brief Helper method for quick sort. Sorts the array.
 *
 * @param arr Array to fill
 * @param start Starting index of section
 * @param end Ending index of section
 */
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
    int left = end;
    int right = end;
    while (left > realStart && arr[left - 1] == pivot) {
        left--;
    }
    while (right < realEnd && arr[right + 1] == pivot) {
        right++;
    }
    quickSortHelper(arr, realStart, left - 1);
    quickSortHelper(arr, right + 1, realEnd);
}

/**
 * @brief Sorts an array using quick sort.
 *
 * @param arr Array to sort
 * @param len Length of the array
 */
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

/**
 * @brief Helper method for merge sort. Merges the two sections together into
 * the array.
 *
 * @param arr Array to merge,
 * @param start1 Starting index for the first section.
 * @param end1 Ending index for the first section.
 * @param start2 Starting index for the second section.
 * @param end2 Ending index for the second section.
 */
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

/**
 * @brief Helper method for merge sort. Splits and merges the array.
 *
 * @param arr Array to sort.
 * @param start Starting index of the array section
 * @param end Ending index of the array section
 */
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
        arr[j] = insert;
        i++;
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
 * @brief Helper method for the built in quick sort. Compares the elements.
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
 * @param min Min int value
 * @param max Max int value
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
 * @brief Fills an array with ints in lexicographically increasing order.
 * TODO: Take care of edge cases (division)
 *
 * @param arr Array to fill
 * @param min Min int value
 * @param max Max int value
 */
void increasingArr(vector<int>& arr, int min, int max) {
    int len = arr.size();
    for (int i = 0; i < len; i++) {
        arr[i] = max * i / (len - 1) + min;
    }
}

/**
 * @brief Fills an array with ints in lexicographically decreasing order.
 * TODO: Take care of edge cases (division)
 *
 * @param arr Array to fill
 * @param min Min int value
 * @param max Max int value
 */
void decreasingArr(vector<int>& arr, int min, int max) {
    int len = arr.size();
    for (int i = 0; i < len; i++) {
        arr[i] = max * (len - 1 - i) / (len - 1) + min;
    }
}

/**
 * @brief Fills an array with ints of the same value.
 *
 * @param arr Array to fill
 * @param min Min int value
 * @param max Max int value
 */
void repeatingArr(vector<int>& arr, int min, int max) {
    int val = (min + max) / 2;
    int len = arr.size();
    for (int i = 0; i < len; i++) {
        arr[i] = val;
    }
}

/**
 * @brief Fills an array with ints in lexicographically increasing order with
 * equal spacing.
 *
 * @param arr Array to fill
 * @param min Min int value
 * @param max Max int value
 */
void linearIncreasingArr(vector<int>& arr, int min, int max) {
    int len = arr.size();
    int val = max / (len - 1);
    for (int i = 0; i < len; i++) {
        arr[i] = val * i + min;
    }
}

/**
 * @brief Fills an array with ints in lexicographically decreasing order with
 * equal spacing.
 *
 * @param arr Array to fill
 * @param min Min int value
 * @param max Max int value
 */
void linearDecreasingArr(vector<int>& arr, int min, int max) {
    int len = arr.size();
    int val = max / (len - 1);
    for (int i = 0; i < len; i++) {
        arr[i] = val * (len - 1 - i) + min;
    }
}

/**
 * @brief Gets len number of non-repeating values from [0,max].
 * TODO: Take care of edge cases & improve efficiency
 *
 * @param max Max int value
 * @param len Number of values
 * @return vector<int>
 */
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

/**
 * @brief Fills an array with random ints 75% of the time.
 * TODO: Take care of edge cases
 *
 * @param arr Array to fill
 * @param min Minimum value
 * @param max Maximum value
 */
void almostRandomArr(vector<int>& arr, int min, int max) {
    randomArr(arr, min, max);
    int len = arr.size();
    vector<int> ranVect = randomNonRepeatingIndexes(len - 1, len * 0.25);
    int len2 = ranVect.size();

    vector<int> vect2(len2);
    for (int i = 0; i < len2; i++) {
        int fIndex = ranVect[i];
        vect2[i] = arr[fIndex];
    }
    sort(vect2.begin(), vect2.end());
    for (int i = 0; i < len2; i++) {
        int fIndex = ranVect[i];
        arr[fIndex] = vect2[i];
    }
}

/**
 * @brief Fills an array with ints in lexicographically increasing order with
 * equal spacing 75% of the time.
 * TODO: Take care of edge cases
 *
 * @param arr Array to fill
 * @param min Minimum value
 * @param max Maximum value
 */
void almostIncreasingArr(vector<int>& arr, int min, int max) {
    increasingArr(arr, min, max);
    int len = arr.size();
    vector<int> ranVect = randomNonRepeatingIndexes(len - 1, len * 0.25);
    int len2 = ranVect.size();

    for (int i = 0; i < len2 - 1; i += 2) {
        int fIndex = ranVect[i];
        int sIndex = ranVect[i + 1];
        swap(arr[fIndex], arr[sIndex]);
    }
}

/**
 * @brief Fills an array with ints in lexicographically decreasing order with
 * equal spacing 75% of the time.
 * TODO: Take care of edge cases
 *
 * @param arr Array to fill
 * @param min Minimum value
 * @param max Maximum value
 */
void almostDecreasingArr(vector<int>& arr, int min, int max) {
    decreasingArr(arr, min, max);
    int len = arr.size();
    vector<int> ranVect = randomNonRepeatingIndexes(len - 1, len * 0.25);
    int len2 = ranVect.size();

    for (int i = 0; i < len2 - 1; i += 2) {
        int fIndex = ranVect[i];
        int sIndex = ranVect[i + 1];
        swap(arr[fIndex], arr[sIndex]);
    }
}

/**
 * @brief Fills an array with ints of the same value 75% of the time.
 * TODO: Take care of edge cases
 *
 * @param arr Array to fill
 * @param min Minimum value
 * @param max Maximum value
 */
void almostRepeatingArr(vector<int>& arr, int min, int max) {
    repeatingArr(arr, min, max);
    int len = arr.size();
    vector<int> ranVect = randomNonRepeatingIndexes(len - 1, len * 0.25);
    int len2 = ranVect.size();
    for (int i = 0; i < len2; i++) {
        int fIndex = ranVect[i];
        if (i % 2 == 0) {
            arr[fIndex] = min;
        } else {
            arr[fIndex] = max;
        }
    }
}

/**
 * @brief Fills an array with ints in lexicographically increasing order with
 * equal spacing 75% of the time.
 *
 * @param arr Array to fill
 * @param min Min int value
 * @param max Max int value
 */
void almostLinearIncreasingArr(vector<int>& arr, int min, int max) {
    linearIncreasingArr(arr, min, max);
    int len = arr.size();
    vector<int> ranVect = randomNonRepeatingIndexes(len - 1, len * 0.25);
    int len2 = ranVect.size();

    for (int i = 0; i < len2 - 1; i += 2) {
        int fIndex = ranVect[i];
        int sIndex = ranVect[i + 1];
        swap(arr[fIndex], arr[sIndex]);
    }
}

/**
 * @brief Fills an array with ints in lexicographically decreasing order with
 * equal spacing 75% of the time.
 *
 * @param arr Array to fill
 * @param min Min int value
 * @param max Max int value
 */
void almostLinearDecreasingArr(vector<int>& arr, int min, int max) {
    linearDecreasingArr(arr, min, max);
    int len = arr.size();
    vector<int> ranVect = randomNonRepeatingIndexes(len - 1, len * 0.25);
    int len2 = ranVect.size();

    for (int i = 0; i < len2 - 1; i += 2) {
        int fIndex = ranVect[i];
        int sIndex = ranVect[i + 1];
        swap(arr[fIndex], arr[sIndex]);
    }
}

/**
 * @brief Prints an array to standard output.
 *
 * @param arr Array to print
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
    int testLen1 = max(testLen / 100, 100);
    int minVal1 = max(minVal / 1000, 0);
    int maxVal1 = max(maxVal / 1000, 10000);

    vector<int> testArr(testLen1);
    randomArr(testArr, minVal, maxVal);
    vector<int> expectedArr(testArr.begin(), testArr.end());
    sort(expectedArr.begin(), expectedArr.end());

    cout << "Validation:\n";
    int sortsLen = sorts.size();
    for (int i = 0; i < sortsLen; i++) {
        vector<int> resultArr(testArr.begin(), testArr.end());

        // vector<int> resultArr(testLen1);
        // randomArr(resultArr, minVal1, maxVal1);
        // vector<int> expectedArr(resultArr.begin(), resultArr.end());
        // sort(expectedArr.begin(), expectedArr.end());

        string sortName = sorts[i].first;
        cout << sortName << ": ";
        sorts[i].second(resultArr, testLen1);
        if (resultArr == expectedArr) {
            cout << "Passed";
            dataCSV[i + 1][1] = "Passed";
        } else {
            cout << "Failed";
            dataCSV[i + 1][1] = "Failed";
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
 * @param sorts Array of name-function pairs to time on
 * @param fills Array of name-function pairs to fill arrays
 */
void timeSorts(
    vector<pair<string, function<void(vector<int>&, int)>>>& sorts,
    vector<pair<string, function<void(vector<int>&, int, int)>>> fills) {
    int sortsLen = sorts.size();
    int fillsLen = fills.size();

    for (int j = 0; j < sortsLen; j++) {
        dataCSV[j + 1][0] = sorts[j].first;
    }

    cout << "Timings:";

    for (int i = 0; i < fillsLen; i++) {
        vector<int> testArr(testLen);
        function<void(vector<int>&, int, int)> fillFunct = fills[i].second;
        string fillName = fills[i].first;
        fillFunct(testArr, minVal, maxVal);
        cout << "\n--" << fillName << "--\n";
        dataCSV[0][i + 2] = fillName;
        for (int j = 0; j < sortsLen; j++) {
            vector<int> tempArr(testArr.begin(), testArr.end());

            // vector<int> tempArr(testLen);
            // fillFunct(tempArr, minVal, maxVal);

            string sortName = sorts[j].first;
            function<void(vector<int>&, int)> sortFunct = sorts[j].second;
            cout << sortName << ": ";
            cout << flush;

            auto start = steady_clock::now();
            sortFunct(tempArr, testLen);
            auto end = steady_clock::now();

            auto duration = duration_cast<nanoseconds>(end - start);
            double duration2 = duration.count() / 1000000.0;
            cout << duration2 << " ms";
            string duration3 = to_string(duration2);
            if (!isIncreasing(tempArr)) {
                cout << " (Failed)";
                duration3 += " (Failed)";
            }
            dataCSV[j + 1][i + 2] = duration3;
            cout << "\n";
        }
    }
    if (fillsLen == 0) {
        cout << "\n";
    }
}

/**
 * @brief Prints the current configuration.
 *
 */
void printConfiguration() {
    cout << "Configuration:\n";
    cout << "Array Length: " << testLen << "\n";
    cout << "Minimum Value: " << minVal << "\n";
    cout << "Maximum Value: " << maxVal << "\n";
}

/**
 * @brief Prints the data in CSV format. Prints each row on a line.
 *
 */
void printDataCSV1() {
    string strCSV = "";
    int len1 = dataCSV.size();
    for (int i = 0; i < len1; i++) {
        vector<string> vect = dataCSV[i];
        int len2 = vect.size();
        for (int j = 0; j < len2; j++) {
            strCSV += vect[j];
            if (j < len2 - 1) {
                strCSV += ",";
            }
        }
        strCSV += "\n";
    }
    cout << strCSV;
}

/**
 * @brief Prints the data in CSV format. Prints each column on a line.
 *
 */
void printDataCSV2() {
    string strCSV = "";
    int len2 = dataCSV[0].size();
    for (int j = 0; j < len2; j++) {
        int len1 = dataCSV.size();
        for (int i = 0; i < len1; i++) {
            strCSV += dataCSV[i][j];
            if (i < len1 - 1) {
                strCSV += ",";
            }
        }
        strCSV += "\n";
    }
    cout << strCSV;
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
    ios::sync_with_stdio(0);
    cin.tie(0);

    auto start1 = steady_clock::now();

    cout << setprecision(4) << fixed;
    // cout << unitbuf;

    vector<pair<string, function<void(vector<int>&, int)>>> sorts = {
        pair("Insertion Sort", insertionSort),
        pair("Selection Sort", selectionSort),
        pair("Quick Sort", quickSort),
        pair("Merge Sort", mergeSort),
        // pair("Heap Sort", heapSort),
        // pair("Shell Sort", shellSort),
        // pair("Block Sort", blockSort),
        pair("Bubble Sort", bubbleSort),
        pair("Gnome Sort", gnomeSort),
        pair("Built in Sort", builtInSort),
        pair("Built in Quick Sort", builtInQuickSort),
    };

    vector<pair<string, function<void(vector<int>&, int, int)>>> fills = {
        pair("Random Array", randomArr),
        pair("Increasing Array", increasingArr),
        pair("Decreasing Array", decreasingArr),
        pair("Linear Increasing Array", linearIncreasingArr),
        pair("Linear Decreasing Array", linearDecreasingArr),
        pair("Repeating Array", repeatingArr),
        pair("Almost Random Array", almostRandomArr),
        pair("Almost Increasing Array", almostIncreasingArr),
        pair("Almost Decreasing Array", almostDecreasingArr),
        pair("Almost Linear Increasing Array", almostLinearIncreasingArr),
        pair("Almost Linear Decreasing Array", almostLinearDecreasingArr),
        pair("Almost Repeating Array", almostRepeatingArr),
    };

    int sortsLen = sorts.size();
    int fillsLen = fills.size();
    for (int i = 0; i < sortsLen + 1; i++) {
        dataCSV.push_back(vector<string>(fillsLen + 2));
    }

    dataCSV[0][0] = "Sorting Methods/Array Fill Methods/Milliseconds";
    dataCSV[0][1] = "Passed Validation";

    cout << "Sorting Algorithm Validation & Timings:\n";
    cout << "\n\n";
    printConfiguration();
    cout << "\n\n";
    validateSorts(sorts);
    cout << "\n\n";
    timeSorts(sorts, fills);
    cout << "\n\n";
    auto end1 = steady_clock::now();
    cout << "Statistics:\n"
         << "Elapsed Time: "
         << duration_cast<nanoseconds>(end1 - start1).count() / 1000000.0
         << " ms\n";
    cout << "\n\n";
    printDataCSV1();
    cout << "\n\n";
    printDataCSV2();

    return 0;
}