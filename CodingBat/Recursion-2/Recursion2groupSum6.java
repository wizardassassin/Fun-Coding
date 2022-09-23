public class Recursion2groupSum6 {
    public boolean groupSum6(int start, int[] nums, int target) {
        return start >= nums.length && target == 0
                || start < nums.length && (groupSum6(start + 1, nums, target - nums[start])
                        || nums[start] != 6 && groupSum6(start + 1, nums, target));
        /*
         * if (start >= nums.length && target == 0)
         * return true;
         * if (start >= nums.length)
         * return false;
         * if (groupSum6(start + 1, nums, target - nums[start]))
         * return true;
         * if (nums[start] != 6 && groupSum6(start + 1, nums, target))
         * return true;
         * return false;
         */
    }
}
