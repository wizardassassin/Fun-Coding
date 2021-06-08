public class AP1commonTwo {
    public static void main(String[] args) {
        int result = new AP1commonTwo().commonTwo(new String[] { "a", "c", "x" }, new String[] { "b", "c", "d", "x" });
        int expected = 2;
        System.out.println(result + " " + expected + " " + (result == expected));
    }

    public int commonTwo(String[] a, String[] b) {
        int acc = 0;
        int j = 0;
        int bb = b[j++].charAt(0);
        String prev = "";
        for (int i = 0; i < a.length; i++) {
            if (a[i] == prev)
                continue;
            int aa = a[i].charAt(0);
            while (j < b.length && bb < aa)
                bb = b[j++].charAt(0);
            if (aa == bb)
                acc++;
            prev = a[i];
        }
        return acc;
    }
}
