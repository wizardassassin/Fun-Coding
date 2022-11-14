public class Array2bigDiff {
    public int bigDiff(int[] nums) {
        // int min = nums[0];
        // int max = min;
        // for (int n : nums) {
        // min = Math.min(min, n);
        // max = Math.max(max, n);
        // }
        // return max - min;
        return max(nums, 0) - min(nums, 0);
        // Arrays.sort(nums);
        // return nums[nums.length - 1] - nums[0];
    }

    public int min(int[] nums, int i) {
        if (nums.length - 1 == i)
            return nums[i];
        return Math.min(nums[i], min(nums, i + 1));
    }

    public int max(int[] nums, int i) {
        if (nums.length - 1 == i)
            return nums[i];
        return Math.max(nums[i], max(nums, i + 1));
    }
}
