public class Recursion1array6 {
    public boolean array6(int[] nums, int index) {
        if (index >= nums.length)
            return false;
        if (nums[index] == 6)
            return true;
        return array6(nums, index + 1);
    }
}
