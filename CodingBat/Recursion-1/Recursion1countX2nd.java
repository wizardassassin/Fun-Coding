public class Recursion1countX2nd {
    public int countX(String str) {
        return (str.length() == 0) ? 0 : (countX(str.substring(1)) + ((str.charAt(0) == 'x') ? 1 : 0));
    }
}
