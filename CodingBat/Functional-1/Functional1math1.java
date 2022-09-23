import java.util.List;

public class Functional1math1 {
    public List<Integer> math1(List<Integer> nums) {
        nums.replaceAll(x -> 10 * (x + 1));
        return nums;
    }
}
