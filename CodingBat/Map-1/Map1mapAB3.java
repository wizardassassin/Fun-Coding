import java.util.Map;

public class Map1mapAB3 {
    public Map<String, String> mapAB3(Map<String, String> map) {
        if (map.containsKey("a") && (!map.containsKey("b") || map.get("b").length() <= 0))
            map.put("b", map.get("a"));
        else if (map.containsKey("b") && (!map.containsKey("a") || map.get("a").length() <= 0))
            map.put("a", map.get("b"));
        return map;
    }
}
