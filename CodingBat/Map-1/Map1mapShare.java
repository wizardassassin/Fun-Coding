import java.util.Map;

public class Map1mapShare {
    public Map<String, String> mapShare(Map<String, String> map) {
        if (map.containsKey("a") && map.get("a").length() > 0) {
            map.put("b", map.get("a"));
        }
        if (map.containsKey("c")) {
            map.remove("c");
        }
        return map;
    }
}
