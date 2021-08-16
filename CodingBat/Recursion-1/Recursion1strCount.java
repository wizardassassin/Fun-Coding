public class Recursion1strCount {
    public int strCount(String str, String sub) {
        if (str.length() < sub.length())
            return 0;
        if (str.startsWith(sub))
            return 1 + strCount(str.substring(sub.length()), sub);
        return strCount(str.substring(1), sub);
    }
}
