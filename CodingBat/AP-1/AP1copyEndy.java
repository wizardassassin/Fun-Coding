import java.util.Arrays;

public class AP1copyEndy {
    public static void main(String[] args) {
        int[] result = new AP1copyEndy().copyEndy(new int[] { 9, 11, 90, 22, 6 }, 2);
        int[] expected = new int[] { 9, 90 };
        System.out.println(
                Arrays.toString(result) + " " + Arrays.toString(expected) + " " + Arrays.equals(result, expected));
    }

    public int[] copyEndy(int[] nums, int count) {
        int[] arr = new int[count];
        int i = 0;
        int ii = 0;
        while (count > 0) {
            if (isEndy(nums[i++])) {
                arr[ii++] = nums[i - 1];
                count--;
            }

        }
        return arr;
    }

    public boolean isEndy(int n) {
        return (0 <= n && n <= 10) || (90 <= n && n <= 100);
    }
}
