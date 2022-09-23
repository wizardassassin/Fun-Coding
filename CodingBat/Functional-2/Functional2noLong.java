import java.util.List;

public class Functional2noLong {
    public List<String> noLong(List<String> strings) {
        strings.removeIf(x -> x.length() >= 4);
        return strings;
    }
}
