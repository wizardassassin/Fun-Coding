public class Recursion2groupSum5 {
    public boolean groupSum5(int start, int[] nums, int target) {
        if (start >= nums.length && target == 0)
            return true;
        if (start >= nums.length)
            return false;
        if ((start == 0 || (nums[start - 1] % 5 != 0 || nums[start] != 1))
                && groupSum5(start + 1, nums, target - nums[start]))
            return true;
        if (nums[start] % 5 != 0 && groupSum5(start + 1, nums, target))
            return true;
        return false;
    }
}
