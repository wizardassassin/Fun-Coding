public class Recursion2splitOdd10 {
    public boolean splitOdd10(int[] nums) {
        return splitOdd10Helper(nums, 0, 0, 0);
    }

    public boolean splitOdd10Helper(int[] arr, int index, int left, int right) {
        if (arr.length == index) {
            return left % 10 == 0 && right % 2 == 1;
        }
        int temp = arr[index];
        boolean bool1 = splitOdd10Helper(arr, index + 1, left + temp, right);
        boolean bool2 = splitOdd10Helper(arr, index + 1, left, right + temp);
        return bool1 || bool2;
    }
}
