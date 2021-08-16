public class Recursion1parenBit {
    public String parenBit(String str) {
        int left = left(str);
        int right = right(str);
        return str.substring(left, str.length() - right);
    }

    public int left(String str) {
        if (str.startsWith("(") || str.length() <= 0)
            return 0;
        return 1 + left(str.substring(1));
    }

    public int right(String str) {
        if (str.endsWith(")") || str.length() <= 0)
            return 0;
        return 1 + right(str.substring(0, str.length() - 1));
    }
}
