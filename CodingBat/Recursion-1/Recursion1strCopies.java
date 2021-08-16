public class Recursion1strCopies {
    public boolean strCopies(String str, String sub, int n) {
        return strCount(str, sub) >= n;
    }

    public int strCount(String str, String sub) {
        if (str.length() < sub.length())
            return 0;
        if (str.startsWith(sub))
            return 1 + strCount(str.substring(1), sub);
        return strCount(str.substring(1), sub);
    }
}
