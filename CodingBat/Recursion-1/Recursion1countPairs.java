public class Recursion1countPairs {
    public int countPairs(String str) {
        if (str.length() <= 2)
            return 0;
        return ((str.substring(0, 1).equals(str.substring(2, 3))) ? 1 : 0) + countPairs(str.substring(1));
    }
}
