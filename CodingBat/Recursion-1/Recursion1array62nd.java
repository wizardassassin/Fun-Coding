public class Recursion1array62nd {
    public boolean array6(int[] nums, int index) {
        if (index == nums.length)
            return false;
        if (nums[index] == 6)
            return true;
        return array6(nums, index + 1);
    }
}
