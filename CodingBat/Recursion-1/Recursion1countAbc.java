public class Recursion1countAbc {
    public int countAbc(String str) {
        if (str.length() <= 2)
            return 0;
        String sect3 = str.substring(0, 3);
        return (sect3.equals("abc") || sect3.equals("aba")) ? 1 + countAbc(str.substring(2)) : 0 + countAbc(str.substring(1));
    }
}
