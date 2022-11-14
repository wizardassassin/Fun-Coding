public class Array2centeredAverage {
    public int centeredAverage(int[] nums) {
        int min = nums[0];
        int max = min;
        int sum = 0;
        int len = nums.length;
        for (int num : nums) {
            min = Math.min(min, num);
            max = Math.max(max, num);
            sum += num;
        }
        return (sum - min - max) / (len - 2);
    }
}
