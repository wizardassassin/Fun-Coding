public class Recursion2split53 {
    public boolean split53(int[] nums) {
        return split53Helper(nums, 0, 0, 0);
    }

    public boolean split53Helper(int[] arr, int index, int group1, int group2) {
        if (arr.length == index) {
            return group1 == group2;
        }
        int temp = arr[index];
        if (temp % 5 == 0) {
            return split53Helper(arr, index + 1, group1 + temp, group2);
        }
        if (temp % 3 == 0) {
            return split53Helper(arr, index + 1, group1, group2 + temp);
        }
        boolean bool1 = split53Helper(arr, index + 1, group1 + temp, group2);
        boolean bool2 = split53Helper(arr, index + 1, group1, group2 + temp);
        return bool1 || bool2;
    }
}
