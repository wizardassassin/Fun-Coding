import java.util.List;

public class Functional2no34 {
    public List<String> no34(List<String> strings) {
        strings.removeIf(x -> x.length() == 4 || x.length() == 3);
        return strings;
    }
}
