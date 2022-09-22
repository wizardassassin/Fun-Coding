public class AP1matchUp2nd {
    public static void main(String[] args) {
        int result = new AP1commonTwo().commonTwo(new String[] { "aa", "bb", "cc" },
                new String[] { "aaa", "xx", "bb" });
        int expected = 1;
        System.out.println(result + " " + expected + " " + (result == expected));
    }

    public int matchUp(String[] a, String[] b) {
        int counter = 0;
        for (int i = 0; i < a.length; i++) {
            String str1 = a[i];
            String str2 = b[i];
            if (str1.length() != 0 && str2.length() != 0) {
                String char1 = str1.substring(0, 1);
                String char2 = str2.substring(0, 1);
                if (char1.equals(char2)) {
                    counter++;
                }
            }
        }
        return counter;
    }
}
