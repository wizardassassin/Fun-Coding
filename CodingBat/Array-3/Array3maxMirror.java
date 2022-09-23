public class Array3maxMirror {
    /*
     * public int maxMirror(int[] nums) {
     * int max = 0;
     * int len = nums.length;
     * HashMap<Integer, ArrayList<Integer>> map = new HashMap<Integer,
     * ArrayList<Integer>>();
     * for (int i = 0; i < nums.length; i++) {
     * if (!map.containsKey(nums[i])) {
     * map.put(nums[i], new ArrayList<Integer>());
     * }
     * map.get(nums[i]).add(i);
     * }
     * for (HashMap.Entry<Integer, ArrayList<Integer>> entry : map.entrySet()) {
     * ArrayList<Integer> arrLis = entry.getValue();
     * for (Integer i : arrLis) {
     * for (Integer j : arrLis) {
     * int t = 1;
     * for (int k = 1; i + k < len && j - k >= 0; k++) {
     * if (nums[i + k] == nums[j - k]) {
     * t++;
     * } else {
     * break;
     * }
     * }
     * max = Math.max(max, t);
     * }
     * }
     * }
     * return max;
     * }
     */
    /*
     * public int maxMirror(int[] nums) {
     * int count = 0;
     * HashMap<Integer, ArrayList<Integer>> map = new HashMap<Integer,
     * ArrayList<Integer>>();
     * for (int i = 0; i < nums.length; i++) {
     * if (!map.containsKey(nums[i])) {
     * map.put(nums[i], new ArrayList<Integer>());
     * }
     * map.get(nums[i]).add(i);
     * }
     * for (int i = nums.length - 1; i >= 0; i--) {
     * if (map.containsKey(nums[i])) {
     * for (int k : map.get(nums[i])) {
     * int tempCount = 0;
     * for (int j = k; j < nums.length && i - tempCount >= 0; j++) {
     * if (nums[j] == nums[i - tempCount]) {
     * tempCount++;
     * } else {
     * break;
     * }
     * count = Math.max(count, tempCount);
     * }
     * }
     * }
     * }
     * return count;
     * }
     */

    public int maxMirror(int[] arr) {
        // if (arr.length == 1) {
        // return 1;
        // }
        int len = arr.length;
        int max = 0;
        for (int i = 0; i < len; i++) {
            for (int j = len - 1; j >= 0; j--) {
                if (arr[i] == arr[j]) {
                    int t = 1;
                    for (int k = 1; 0 <= j - k && len > j - k && 0 <= i + k && len > i + k; k++) {
                        if (arr[i + k] == arr[j - k]) {
                            t++;
                        } else {
                            break;
                        }
                    }
                    max = Math.max(max, t);
                }
            }
        }
        return max;
    }

}
