public class Array3countClumps {
    public int countClumps(int[] nums) {
        int count = 0;
        if (nums.length < 1) {
            return count;
        }
        int n = nums[0];
        boolean counted = false;
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] == n) {
                if (!counted) {
                    count++;
                    counted = true;
                }
            } else {
                n = nums[i];
                counted = false;
            }
        }
        return count;
    }
}
