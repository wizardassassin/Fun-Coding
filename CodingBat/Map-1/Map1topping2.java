import java.util.Map;

public class Map1topping2 {
    public Map<String, String> topping2(Map<String, String> map) {
        if (map.containsKey("ice cream") && map.get("ice cream").length() > 0)
            map.put("yogurt", map.get("ice cream"));
        if (map.containsKey("spinach") && map.get("spinach").length() > 0)
            map.put("spinach", "nuts");
        return map;
    }
}
