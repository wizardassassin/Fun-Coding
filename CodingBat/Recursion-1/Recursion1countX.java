public class Recursion1countX {
    public int countX(String str) {
        if (str.length() == 0)
            return 0;
        return ((str.substring(0, 1).equals("x")) ? 1 : 0) + countX(str.substring(1));
    }
}
