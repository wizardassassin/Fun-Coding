public class AP1wordsCount {
    public static void main(String[] args) {
        int result = new AP1wordsCount().wordsCount(new String[] { "a", "bb", "b", "ccc" }, 1);
        int expected = 2;
        System.out.println(result + " " + expected + " " + (result == expected));
    }

    public int wordsCount(String[] words, int len) {
        int acc = 0;
        for (String word : words)
            if (word.length() == len)
                acc++;
        return acc;
    }
}
