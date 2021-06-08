import java.util.Arrays;

public class AP1wordsFront {
    public static void main(String[] args) {
        String[] result = new AP1wordsFront().wordsFront(new String[] { "a", "b", "c", "d" }, 1);
        String[] expected = { "a" };
        System.out.println(
                Arrays.toString(result) + " " + Arrays.toString(expected) + " " + Arrays.equals(result, expected));
    }

    public String[] wordsFront(String[] words, int n) {
        String[] arr = new String[n];
        for (int i = 0; i < n; i++)
            arr[i] = words[i];
        return arr;
    }
}
