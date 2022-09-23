import java.util.HashMap;
import java.util.Map;

public class Map2wordAppend {
    public String wordAppend(String[] strings) {
        Map<String, Integer> map = new HashMap<String, Integer>();
        String acc = "";
        for (String i : strings) {
            if (!map.containsKey(i)) {
                map.put(i, 1);
            } else {
                map.put(i, map.get(i) + 1);
                if (map.get(i) % 2 == 0) {
                    acc += i;
                }
            }
        }
        return acc;
    }
}
