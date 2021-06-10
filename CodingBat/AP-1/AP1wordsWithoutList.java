import java.util.ArrayList;

public class AP1wordsWithoutList {
    public static void main(String[] args) {
        ArrayList<String> result = new AP1wordsWithoutList().wordsWithoutList(new String[] { "a", "bb", "b", "ccc" },
                1);
        ArrayList<String> expected = new ArrayList<String>();
        expected.add("bb");
        expected.add("ccc");
        System.out.println(result.toString() + " " + expected.toString() + " " + result.equals(expected));
    }

    public ArrayList<String> wordsWithoutList(String[] words, int len) {
        ArrayList<String> arrL = new ArrayList<String>();
        for (String word : words)
            if (word.length() != len)
                arrL.add(word);
        return arrL;
    }
}
