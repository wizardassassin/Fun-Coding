import java.util.List;

public class Functional2noTeen {
    public List<Integer> noTeen(List<Integer> nums) {
        nums.removeIf(x -> 13 <= x && x <= 19);
        return nums;
    }
}
