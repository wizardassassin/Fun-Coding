import java.util.Arrays;

public class AP1mergeTwo2nd {
    public static void main(String[] args) {
        String[] result = new AP1mergeTwo2nd().mergeTwo(new String[] { "f", "g", "z" }, new String[] { "c", "f", "g" },
                3);
        String[] expected = { "c", "f", "g" };
        System.out.println(
                Arrays.toString(result) + " " + Arrays.toString(expected) + " " + Arrays.equals(result, expected));
    }

    public String[] mergeTwo(String[] a, String[] b, int n) {
        String[] r = new String[n];
        int i = 0;
        int j = 0;
        int k = 0;
        while (k < n) {
            if (i < n && j < n) {
                if (a[i].compareTo(b[j]) < 0) {
                    r[k++] = a[i++];
                } else if (a[i].compareTo(b[j]) == 0) {
                    if (!a[i].equals(r[k])) {
                        r[k++] = a[i];
                    }
                    i++;
                    j++;
                } else {
                    r[k++] = b[j++];
                }
            } else if (i < n) {
                r[k++] = a[i++];
            } else {
                r[k++] = b[j++];
            }
        }
        return r;
    }
}