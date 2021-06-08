public class AP1scores100 {
    public static void main(String[] args) {
        boolean result = new AP1scores100().scores100(new int[] { 1, 100, 100 });
        boolean expected = true;
        System.out.println(result + " " + expected + " " + (result == expected));
    }

    public boolean scores100(int[] scores) {
        for (int i = 1; i < scores.length; i++)
            if (scores[i] == 100 && scores[i - 1] == 100)
                return true;
        return false;
    }
}
