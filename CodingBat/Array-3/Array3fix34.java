import java.util.ArrayList;

public class Array3fix34 {
    public int[] fix34(int[] nums) {
        ArrayList<Integer> list = new ArrayList<Integer>();
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == 4 && nums[i - 1] != 3) {
                list.add(i);
            }
        }
        for (int i = 0; i < nums.length - 1; i++) {
            if (nums[i] == 3 && list.size() > 0) {
                swap(i + 1, list.remove(0), nums);
            }
        }
        return nums;
    }

    public void swap(int one, int two, int[] nums) {
        int temp = nums[one];
        nums[one] = nums[two];
        nums[two] = temp;
    }
}
