import java.util.List;

public class Functional1noX {
    public List<String> noX(List<String> strings) {
        strings.replaceAll(x -> x.replaceAll("x", ""));
        return strings;
    }
}
