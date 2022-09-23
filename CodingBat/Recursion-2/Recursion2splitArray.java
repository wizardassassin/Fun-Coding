public class Recursion2splitArray {
    public static void main(String[] args) {
        boolean res = new Recursion2splitArray().splitArray(new int[] { 1, 3, 4 });
        System.out.println(res);
    }

    public boolean splitArray(int[] nums) {
        return splitArrayHelper(nums, 0, 0);
    }

    public boolean splitArrayHelper(int[] arr, int index, int sum) {
        if (arr.length == index) {
            return sum == 0;
        }
        int temp = arr[index];
        // System.out.println(temp);
        boolean bool1 = splitArrayHelper(arr, index + 1, sum + temp);
        boolean bool2 = splitArrayHelper(arr, index + 1, sum - temp);
        return bool1 || bool2;
    }
}
