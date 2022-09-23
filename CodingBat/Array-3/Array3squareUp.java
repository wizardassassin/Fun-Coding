public class Array3squareUp {
    public int[] squareUp(int n) {
        int[] ret = new int[n * n];
        for (int i = 0; i < n * n; i += n) {
            for (int j = 0; j <= i / n; j++) {
                ret[i + n - j - 1] = j + 1;
            }
        }
        return ret;
    }
}
