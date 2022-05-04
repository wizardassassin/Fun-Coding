import java.util.Arrays;

public class ConnectFour {
    private int[][] grid;
    private int rows;
    private int cols;
    private int player;
    private boolean finishedGame;

    public ConnectFour(int rows, int cols) {
        this.rows = rows;
        this.cols = cols;
        this.player = 1;
        this.finishedGame = false;
        this.grid = new int[rows][cols];
    }

    public ConnectFour(int[][] grid) {
        this(grid.length, grid[0].length);
        for (int i = 0; i < rows; i++)
            grid[i] = Arrays.copyOf(grid[i], cols);
    }

    public boolean addPiece(int col) {
        if (finishedGame || col >= cols)
            return false;
        for (int i = rows - 1; i >= 0; i--) {
            if (grid[i][col] == 0) {
                grid[i][col] = player;
                checkWin(i, col);
                flipPlayer();
                return true;
            }
        }
        return false;
    }

    private boolean checkWin(int row, int col) {
        return false;
    }

    private boolean checkWinDeep() {
        return false;
    }

    private void flipPlayer() {
        if (player == 1)
            player = 2;
        else
            player = 1;
    }

    public boolean equals(Object other) {
        if (other == this)
            return true;
        if (!(other instanceof ConnectFour))
            return false;
        int[][] grid2 = ((ConnectFour) other).grid;
        return Arrays.deepEquals(grid, grid2);
    }

    public String toString() {
        return Arrays.deepToString(grid).replaceAll("\\], \\[", "],\n        [").replaceAll("\\[\\[", "[\n        [")
                .replaceAll("\\]\\]", "],\n]");
    }
}
