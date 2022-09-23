public class Array3linearIn {
    public boolean linearIn(int[] outer, int[] inner) {
        int j = 0;
        if (j == inner.length) {
            return true;
        }
        for (int i = 0; i < outer.length; i++) {
            if (outer[i] < inner[j]) {
                continue;
            }
            if (outer[i] != inner[j]) {
                return false;
            }
            j++;
            if (j == inner.length) {
                return true;
            }
        }
        return j == inner.length;
    }
}
