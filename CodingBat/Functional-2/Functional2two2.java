import java.util.List;

public class Functional2two2 {
    public List<Integer> two2(List<Integer> nums) {
        nums.replaceAll(x -> x * 2);
        nums.removeIf(x -> x % 10 == 2);
        return nums;
    }
}
