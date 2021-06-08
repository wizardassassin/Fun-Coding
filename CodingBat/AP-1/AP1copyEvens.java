import java.util.Arrays;

public class AP1copyEvens {
    public static void main(String[] args) {
        int[] result = new AP1copyEvens().copyEvens(new int[] { 3, 2, 4, 5, 8 }, 2);
        int[] expected = new int[] { 2, 4 };
        System.out.println(
                Arrays.toString(result) + " " + Arrays.toString(expected) + " " + Arrays.equals(result, expected));
    }

    public int[] copyEvens(int[] nums, int count) {
        int[] arr = new int[count];
        int index = 0;
        for (int i = 0; index < count; i++)
            if (nums[i] % 2 == 0)
                arr[index++] = nums[i];
        return arr;
    }
}
