public class Recursion1strDist {
    public int strDist(String str, String sub) {
        if (str.length() == 0)
            return 0;
        if (!str.startsWith(sub))
            return strDist(str.substring(1), sub);
        if (!str.endsWith(sub))
            return strDist(str.substring(0, str.length() - 1), sub);
        return str.length();
    }
}
