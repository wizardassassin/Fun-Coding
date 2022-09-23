import java.util.List;

public class Functional2noZ {
    public List<String> noZ(List<String> strings) {
        strings.removeIf(x -> x.contains("z"));
        return strings;
    }
}
