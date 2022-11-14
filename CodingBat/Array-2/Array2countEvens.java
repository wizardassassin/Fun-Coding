public class Array2countEvens {
    public int countEvens(int[] nums) {
        int s = 0;
        for (int n : nums)
            if (n % 2 == 0)
                s++;
        return s;
    }
}
