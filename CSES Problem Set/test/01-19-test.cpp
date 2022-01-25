#include <bits/stdc++.h>

using namespace std;

const int gridSize = 7;
const int pathSize = gridSize * gridSize - 1;
const int bottomInd = gridSize - 1;

string input;
int paths = 0;
int checks[4][2] = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};
int direct[pathSize];

bool valid_cell(int i, int j) {
    return i >= 0 && i < gridSize && j >= 0 && j < gridSize;
}

// int maxSize = 0;
// void printArr(bool arr[gridSize][gridSize]) {
//     for (int i = 0; i < gridSize; i++) {
//         for (int j = 0; j < gridSize; j++) {
//             cout << arr[i][j] << "\t";
//         }
//         cout << endl;
//     }
//         cout << endl;
// }

void path(bool arr[gridSize][gridSize], int curr_i, int curr_j, int cellInd) {
    if (curr_i == bottomInd && curr_j == 0) {
        // maxSize = max(maxSize, cellInd);
        // printArr(arr);
        if (cellInd == pathSize) {
            paths++;
        }
        return;
    }

    bool valid[4];
    int next[4][2];
    for (int i = 0; i < 4; i++) {
        int next_i = curr_i + checks[i][0];
        int next_j = curr_j + checks[i][1];
        valid[i] = valid_cell(next_i, next_j) && !arr[next_i][next_j];
        next[i][0] = next_i;
        next[i][1] = next_j;
    }

    if (valid[0] && valid[2] && !valid[1] && !valid[3]) {
        return;
    }

    if (valid[1] && valid[3] && !valid[0] && !valid[2]) {
        return;
    }

    bool grid[gridSize][gridSize];
    for (int i = 0; i < gridSize; i++) {
        for (int j = 0; j < gridSize; j++) {
            grid[i][j] = arr[i][j];
        }
    }
    grid[curr_i][curr_j] = true;

    int nextInd = cellInd + 1;
    int nextDirect = direct[cellInd];
    // cout << nextDirect << ' ' << cellInd << endl;
    if (nextDirect != 4) {
        if (valid[nextDirect]) {
            path(grid, next[nextDirect][0], next[nextDirect][1], nextInd);
        }
        return;
    }
    for (int i = 0; i < 4; i++) {
        if (valid[i]) {
            path(grid, next[i][0], next[i][1], nextInd);
        }
    }
}

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    cin >> input;

    for (int i = 0; i < pathSize; i++) {
        char inputChar = input[i];
        if (inputChar == 'U') {
            direct[i] = 0;
        } else if (inputChar == 'R') {
            direct[i] = 1;
        } else if (inputChar == 'D') {
            direct[i] = 2;
        } else if (inputChar == 'L') {
            direct[i] = 3;
        } else {
            direct[i] = 4;
        }
    }

    bool grid[gridSize][gridSize] = {false};

    // printArr(grid);

    path(grid, 0, 0, 0);

    // cout << maxSize << endl;

    cout << paths;
}