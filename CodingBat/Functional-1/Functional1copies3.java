import java.util.List;

public class Functional1copies3 {
    public List<String> copies3(List<String> strings) {
        strings.replaceAll(x -> x + x + x);
        return strings;
    }
}
