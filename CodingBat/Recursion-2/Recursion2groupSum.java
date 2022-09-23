public class Recursion2groupSum {
    public boolean groupSum(int start, int[] nums, int target) {
        return target == 0 || start < nums.length
                && (groupSum(start + 1, nums, target - nums[start]) || groupSum(start + 1, nums, target));
        /*
         * if (target == 0)
         * return true;
         * if (start >= nums.length)
         * return false;
         * if (groupSum(start + 1, nums, target - nums[start]))
         * return true;
         * if (groupSum(start + 1, nums, target))
         * return true;
         * return false;
         */
    }
}
