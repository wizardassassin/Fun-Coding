public class Recursion1noX {
    public String noX(String str) {
        if (str.length() == 0)
            return str;
        return ((str.substring(0, 1).equals("x")) ? "" : str.substring(0, 1)) + noX(str.substring(1));
    }
}
