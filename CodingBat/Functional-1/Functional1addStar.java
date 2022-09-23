import java.util.List;

public class Functional1addStar {
    public List<String> addStar(List<String> strings) {
        strings.replaceAll(x -> x + "*");
        return strings;
    }
}
