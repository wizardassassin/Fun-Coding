import java.util.HashMap;
import java.util.Map;

public class Map2firstSwap {
    public String[] firstSwap(String[] strings) {
        Map<String, Integer> map = new HashMap<String, Integer>();
        for (int i = 0; i < strings.length; i++) {
            String str = strings[i];
            String first = str.substring(0, 1);
            if (map.containsKey(first)) {
                if (map.get(first) != -1) {
                    swap(map.get(first), i, strings);
                    map.put(first, -1);
                }
            } else {
                map.put(first, i);
            }
        }
        return strings;
    }

    public void swap(int first, int second, String[] arr) {
        String temp = arr[first];
        arr[first] = arr[second];
        arr[second] = temp;
    }
}
