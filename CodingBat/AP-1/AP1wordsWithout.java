import java.util.Arrays;

public class AP1wordsWithout {
    public static void main(String[] args) {
        String[] result = new AP1wordsWithout().wordsWithout(new String[] { "a", "b", "c", "a" }, "a");
        String[] expected = { "b", "c" };
        System.out.println(
                Arrays.toString(result) + " " + Arrays.toString(expected) + " " + Arrays.equals(result, expected));

    }

    public String[] wordsWithout(String[] words, String target) {
        int len = 0;
        for (String word : words)
            if (word != target)
                len++;
        String[] arr = new String[len];
        int i = 0;
        for (String word : words)
            if (word != target)
                arr[i++] = word;
        return arr;
    }
}
