import java.util.HashMap;
import java.util.Map;

public class Map2firstChar {
    public Map<String, String> firstChar(String[] strings) {
        Map<String, String> map = new HashMap<String, String>();
        for (String i : strings)
            if (!map.containsKey(i.substring(0, 1)))
                map.put(i.substring(0, 1), i);
            else
                map.put(i.substring(0, 1), map.get(i.substring(0, 1)) + i);
        return map;
    }
}
