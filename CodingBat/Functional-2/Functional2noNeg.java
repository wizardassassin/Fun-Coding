import java.util.List;

public class Functional2noNeg {
    public List<Integer> noNeg(List<Integer> nums) {
        nums.removeIf(x -> x < 0);
        return nums;
    }
}
