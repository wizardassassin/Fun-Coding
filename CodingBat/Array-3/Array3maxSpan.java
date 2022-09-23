import java.util.HashMap;

public class Array3maxSpan {
    public int maxSpan(int[] nums) {
        if (nums.length <= 1)
            return nums.length;
        int max = 1;
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        int len = nums.length;
        for (int i = 0; i < len; i++) {
            int val = nums[i];
            if (map.containsKey(val)) {
                max = Math.max(max, i - map.get(val) + 1);
            } else {
                map.put(val, i);
            }
        }
        return max;
    }
}
