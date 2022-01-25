#include <bits/stdc++.h>

using namespace std;

string input;
int paths = 0;
int checks[4][2] = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};
int direct[48];
bool grid[7][7];

bool valid_point(int curr_i, int curr_j) {
    return !(curr_i >= 0 && curr_i < 7 && curr_j >= 0 && curr_j < 7 &&
             !grid[curr_i][curr_j]);
}

void path(int curr_i, int curr_j, int cellInd) {
    if (curr_i == 6 && curr_j == 0) {
        if (cellInd == 48) {
            paths++;
        }
        return;
    }
    if (cellInd == 48) {
        return;
    }

    bool valid[4];
    int next[4][2];
    for (int i = 0; i < 4; i++) {
        int next_i = curr_i + checks[i][0];
        int next_j = curr_j + checks[i][1];
        valid[i] = next_i >= 0 && next_i < 7 && next_j >= 0 && next_j < 7 &&
                   !grid[next_i][next_j];
        next[i][0] = next_i;
        next[i][1] = next_j;
    }

    if (valid[0] && valid[2] && !valid[1] && !valid[3]) {
        return;
    }

    if (valid[1] && valid[3] && !valid[0] && !valid[2]) {
        return;
    }

    grid[curr_i][curr_j] = true;

    int nextDirect = direct[cellInd];
    if (nextDirect != 4) {
        if (valid[nextDirect]) {
            path(next[nextDirect][0], next[nextDirect][1], cellInd + 1);
        }
        grid[curr_i][curr_j] = false;
        return;
    }

    if (valid[0]) {
        int next_i = next[0][0];
        int next_j = next[0][1];
        int sum = valid_point(next_i, next_j - 1) +
                  valid_point(next_i - 1, next_j) +
                  valid_point(next_i, next_j + 1);
        if (sum >= 2) {
            path(next[0][0], next[0][1], cellInd + 1);
            grid[curr_i][curr_j] = false;
            return;
        }
    }

    if (valid[1]) {
        int next_i = next[1][0];
        int next_j = next[1][1];
        int sum = valid_point(next_i - 1, next_j) +
                  valid_point(next_i, next_j + 1) +
                  valid_point(next_i + 1, next_j);
        if (sum >= 2) {
            path(next[1][0], next[1][1], cellInd + 1);
            grid[curr_i][curr_j] = false;
            return;
        }
    }

    if (valid[2]) {
        int next_i = next[2][0];
        int next_j = next[2][1];
        if (next_i != 6 && next_j != 0) {
            int sum = valid_point(next_i, next_j - 1) +
                      valid_point(next_i + 1, next_j) +
                      valid_point(next_i, next_j + 1);
            if (sum >= 2) {
                path(next[2][0], next[2][1], cellInd + 1);
                grid[curr_i][curr_j] = false;
                return;
            }
        }
    }

    if (valid[3]) {
        int next_i = curr_i + checks[3][0];
        int next_j = curr_j + checks[3][1];
        if (next_i != 6 && next_j != 0) {
            int sum = valid_point(next_i - 1, next_j) +
                      valid_point(next_i, next_j - 1) +
                      valid_point(next_i + 1, next_j);
            if (sum >= 2) {
                path(next[3][0], next[3][1], cellInd + 1);
                grid[curr_i][curr_j] = false;
                return;
            }
        }
    }

    for (int i = 0; i < 4; i++) {
        if (valid[i]) {
            path(next[i][0], next[i][1], cellInd + 1);
        }
    }
    grid[curr_i][curr_j] = false;
}

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    cin >> input;

    for (int i = 0; i < 48; i++) {
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

    path(0, 0, 0);

    cout << paths;
}