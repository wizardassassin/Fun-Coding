public class Recursion1pairStar {
    public String pairStar(String str) {
        if (str.length() <= 1)
            return str;
        return str.substring(0, 1) + ((str.substring(0, 1).equals(str.substring(1, 2))) ? "*" : "")
                + pairStar(str.substring(1));
    }
}
