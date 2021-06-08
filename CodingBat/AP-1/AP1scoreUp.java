public class AP1scoreUp {
    public static void main(String[] args) {
        int result = new AP1scoreUp().scoreUp(new String[] { "a", "a", "b", "b" }, new String[] { "a", "c", "b", "c" });
        int expected = 6;
        System.out.println(result + " " + expected + " " + (result == expected));
    }

    public int scoreUp(String[] key, String[] answers) {
        int score = 0;
        for (int i = 0, ii = key.length; i < ii; i++)
            if (answers[i] == key[i])
                score += 4;
            else if (answers[i] != "?")
                score -= 1;
        return score;
    }
}
