public class AP1matchUp {
    public static void main(String[] args) {
        int result = new AP1commonTwo().commonTwo(new String[] { "aa", "bb", "cc" }, new String[] { "aaa", "xx", "bb" });
        int expected = 1;
        System.out.println(result + " " + expected + " " + (result == expected));
    }

    public int matchUp(String[] a, String[] b) {
        int acc = 0;
        for (int i = 0; i < a.length; i++)
            if (a[i] != "" && b[i] != "" && a[i].charAt(0) == b[i].charAt(0))
                acc++;
        return acc;
    }
}
