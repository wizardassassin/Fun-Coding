import java.util.Scanner;

/**
 * GridPaths
 * Hi, I like to code. Do you like to code?
 * What is the meaning of life? That is the
 * question to be answered...
 */
public class GridPaths {

    public static int paths = 0; // valid paths counter
    public static int[][] checks = { { -1, 0 }, { 0, 1 }, { 1, 0 }, { 0, -1 } }; // checking up, right, down, left
    public static int[][] deadEnds = { { 0, -1, -1, 0, 0, 1 }, { -1, 0, 0, 1, 1, 0 }, { 0, -1, 1, 0, 0, 1 },
            { -1, 0, 0, -1, 1, 0 } }; // dead end checks for up, right, down, left
    public static int[] direct = new int[48]; // forced direction from input
    public static boolean[][] grid = new boolean[7][7]; // grid to brute force the all solutions

    public static void main(String[] args) {
        // Scanner class for getting input
        Scanner scanner = new Scanner(System.in);

        String input;
        input = scanner.nextLine();

        scanner.close();
        // Parsing input
        for (int i = 0; i < 48; i++) {
            String inputChar = input.substring(i, i + 1);
            if (inputChar.equals("U")) {
                direct[i] = 0; // force up
            } else if (inputChar.equals("R")) {
                direct[i] = 1; // force right
            } else if (inputChar.equals("D")) {
                direct[i] = 2; // force down
            } else if (inputChar.equals("L")) {
                direct[i] = 3; // force left
            } else {
                direct[i] = 4; // no force
            }
            // switch (inputChar) {
            //     case "U":
            //         direct[i] = 0; // force up
            //         break;
            //     case "R":
            //         direct[i] = 1; // force right
            //         break;
            //     case "D":
            //         direct[i] = 2; // force down
            //         break;
            //     case "L":
            //         direct[i] = 3; // force left
            //         break;
            //     default:
            //         direct[i] = 4; // no force
            //         break;
            // }
        }

        path(0, 0, 0);

        System.out.print(paths);

    }

    public static void path(int curr_i, int curr_j, int cellInd) {
        // Optimization 1
        /* ========================================= */
        if (curr_i == 6 && curr_j == 0) {
            if (cellInd == 48) {
                paths++; // Increment if path is valid
            }
            return;
        }
        if (cellInd == 48) {
            return;
        }
        /* ========================================= */
        boolean[] valid = new boolean[4];
        int[][] next = new int[4][2];
        for (int i = 0; i < 4; i++) { // Storing values
            int next_i = curr_i + checks[i][0];
            int next_j = curr_j + checks[i][1];
            valid[i] = !valid_point(next_i, next_j);
            next[i][0] = next_i;
            next[i][1] = next_j;
        }
        // Optimization 2
        /* ========================================= */
        if (valid[0] && valid[2] && !valid[1] && !valid[3]) {
            return;
        }

        if (valid[1] && valid[3] && !valid[0] && !valid[2]) {
            return;
        }
        /* ========================================= */
        grid[curr_i][curr_j] = true;

        int nextDirect = direct[cellInd];
        if (nextDirect != 4) { // Forced move
            if (valid[nextDirect]) {
                path(next[nextDirect][0], next[nextDirect][1], cellInd + 1);
            }
            grid[curr_i][curr_j] = false;
            return;
        }
        // Optimization 3
        /* ========================================= */
        for (int i = 0; i < 4; i++) {
            if (valid[i]) {
                int next_i = next[i][0];
                int next_j = next[i][1];
                if (next_i != 6 && next_j != 0) {
                    boolean isValidA = valid_point(next_i + deadEnds[i][0], next_j + deadEnds[i][1]);
                    boolean isValidB = valid_point(next_i + deadEnds[i][2], next_j + deadEnds[i][3]);
                    boolean isValidC = valid_point(next_i + deadEnds[i][4], next_j + deadEnds[i][5]);
                    boolean sum = atLeastTwo(isValidA, isValidB, isValidC);
                    if (sum) {
                        path(next_i, next_j, cellInd + 1);
                        grid[curr_i][curr_j] = false;
                        return;
                    }
                }
            }
        }
        /* ========================================= */

        for (int i = 0; i < 4; i++) {
            if (valid[i]) {
                path(next[i][0], next[i][1], cellInd + 1); // Try other possible solutions
            }
        }
        grid[curr_i][curr_j] = false;
    }

    public static boolean valid_point(int curr_i, int curr_j) {
        return !(curr_i >= 0 && curr_i < 7 && curr_j >= 0 && curr_j < 7 &&
                !grid[curr_i][curr_j]);
    }

    public static boolean atLeastTwo(boolean a, boolean b, boolean c) {
        return (a && (b || c)) || (b && c);
    }

}