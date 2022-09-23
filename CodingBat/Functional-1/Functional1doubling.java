import java.util.List;

public class Functional1doubling {
    public List<Integer> doubling(List<Integer> nums) {
        nums.replaceAll(x -> x * 2);
        return nums;
    }
}
