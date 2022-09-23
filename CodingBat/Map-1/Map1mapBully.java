import java.util.Map;

public class Map1mapBully {
    public Map<String, String> mapBully(Map<String, String> map) {
        if (map.containsKey("a") && map.get("a").length() > 0) {
            map.put("b", map.get("a"));
            map.put("a", "");
        }
        return map;
    }
}
