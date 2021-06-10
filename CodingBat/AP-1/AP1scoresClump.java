public class AP1scoresClump {
    public static void main(String[] args) {
        boolean result = new AP1scoresClump().scoresClump(new int[] { 3, 4, 5 });
        boolean expected = true;
        System.out.println(result + " " + expected + " " + (result == expected));
    }

    public boolean scoresClump(int[] scores) {
        for (int i = 0; i < scores.length - 2; i++)
            if (scores[i + 2] - scores[i] <= 2)
                return true;
        return false;
    }
}
