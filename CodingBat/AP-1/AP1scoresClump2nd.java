public class AP1scoresClump2nd {
    public static void main(String[] args) {
        boolean result = new AP1scoresClump2nd().scoresClump(new int[] { 3, 4, 5 });
        boolean expected = true;
        System.out.println(result + " " + expected + " " + (result == expected));
    }

    public boolean scoresClump(int[] s) {
        for (int i = 0; i < s.length - 2; i++)
            if (s[i + 2] - s[i] <= 2)
                // if (Math.max(s[i], Math.max(s[i + 1], s[i + 2])) - Math.min(s[i],
                // Math.min(s[i + 1], s[i + 2])) <= 2)
                return true;
        return false;
    }
}
