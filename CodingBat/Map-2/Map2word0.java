import java.util.HashMap;
import java.util.Map;

public class Map2word0 {
    public Map<String, Integer> word0(String[] strings) {
        Map<String, Integer> map = new HashMap<String, Integer>();
        for (String i : strings)
            map.put(i, 0);
        return map;
    }
}
