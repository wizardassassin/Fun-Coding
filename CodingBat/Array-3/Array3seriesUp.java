public class Array3seriesUp {
    public int[] seriesUp(int n) {
        int[] ret = new int[n * (n + 1) / 2];
        int i = 0;
        int k = 1;
        while (i < ret.length) {
            for (int j = 1; j <= k; j++) {
                ret[i++] = j;
            }
            k++;
        }
        return ret;
    }
}
