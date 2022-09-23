public class Recursion2groupNoAdj {
    public boolean groupNoAdj(int start, int[] nums, int target) {
        return target == 0 || start < nums.length
                && (groupNoAdj(start + 2, nums, target - nums[start]) || groupNoAdj(start + 1, nums, target));
        /*
         * if (target == 0)
         * return true;
         * if (start >= nums.length)
         * return false;
         * if (groupNoAdj(start + 2, nums, target - nums[start]))
         * return true;
         * if (groupNoAdj(start + 1, nums, target))
         * return true;
         * return false;
         */
    }
}