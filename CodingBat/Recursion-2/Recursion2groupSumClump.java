public class Recursion2groupSumClump {
    public boolean groupSumClump(int start, int[] nums, int target) {
        if (start >= nums.length || target == 0) {
            return target == 0;
        }
        int i = start + 1;
        while (i < nums.length) {
            if (nums[i] != nums[start]) {
                break;
            }
            i++;
        }
        return groupSumClump(i, nums, target - nums[start] * (i - start)) || groupSumClump(i, nums, target);
    }
}
