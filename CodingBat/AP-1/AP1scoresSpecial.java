public class AP1scoresSpecial {
    public static void main(String[] args) {
        int result = new AP1scoresSpecial().scoresSpecial(new int[] { 12, 10, 4 }, new int[] { 2, 20, 30 });
        int expected = 40;
        System.out.println(result + " " + expected + " " + (result == expected));
    }

    public int scoresSpecial(int[] a, int[] b) {
        return bigSpecial(a) + bigSpecial(b);
    }

    public int bigSpecial(int[] a) {
        int max = 0;
        for (int i : a)
            if (i % 10 == 0)
                max = Math.max(max, i);
        return max;
    }
}
