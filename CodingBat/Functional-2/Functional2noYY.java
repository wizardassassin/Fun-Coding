import java.util.List;

public class Functional2noYY {
    public List<String> noYY(List<String> strings) {
        strings.replaceAll(x -> x + "y");
        strings.removeIf(x -> x.contains("yy"));
        return strings;
    }
}
