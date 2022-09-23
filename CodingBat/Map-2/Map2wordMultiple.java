import java.util.HashMap;
import java.util.Map;

public class Map2wordMultiple {
    public Map<String, Boolean> wordMultiple(String[] strings) {
        Map<String, Integer> map = new HashMap<String, Integer>();
        Map<String, Boolean> map2 = new HashMap<String, Boolean>();
        for (String i : strings) {
            if (!map.containsKey(i)) {
                map.put(i, 1);
                map2.put(i, false);
            } else {
                map2.put(i, true);
            }
        }
        return map2;
    }
}
