public class AP1scoresIncreasing {
    public static void main(String[] args) {
        boolean result = new AP1scoresIncreasing().scoresIncreasing(new int[] { 1, 3, 4 });
        boolean expected = true;
        System.out.println(result + " " + expected + " " + (result == expected));
    }

    public boolean scoresIncreasing(int[] scores) {
        for (int i = 1; i < scores.length; i++)
            if (scores[i] - scores[i - 1] < 0)
                return false;
        return true;
    }
}
