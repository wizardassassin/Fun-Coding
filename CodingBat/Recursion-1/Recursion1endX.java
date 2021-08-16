public class Recursion1endX {
    public String endX(String str) {
        if (str.length() <= 0)
            return str;
        return (str.substring(0, 1).equals("x")) ? endX(str.substring(1)) + "x" : str.substring(0, 1) + endX(str.substring(1));
    }
}
