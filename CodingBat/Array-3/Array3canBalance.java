public class Array3canBalance {
    public boolean canBalance(int[] nums) {
        for (int i = 0; i < nums.length - 1; i++) {
            if (sum(0, i, nums) == sum(i + 1, nums.length - 1, nums)) {
                return true;
            }
        }
        return false;
    }

    public int sum(int start, int end, int[] nums) {
        int acc = 0;
        for (int i = start; i <= end; i++)
            acc += nums[i];
        return acc;
    }
}
