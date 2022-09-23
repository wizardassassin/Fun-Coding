import java.util.List;

public class Functional2square56 {
    public List<Integer> square56(List<Integer> nums) {
        nums.replaceAll(x -> x * x + 10);
        nums.removeIf(x -> x % 10 == 5 || x % 10 == 6);
        return nums;
    }
}
