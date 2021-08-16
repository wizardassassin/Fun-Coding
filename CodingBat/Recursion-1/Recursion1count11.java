public class Recursion1count11 {
    public int count11(String str) {
        if (str.length() <= 1)
            return 0;
        return (str.substring(0, 2).equals("11")) ? 1 + count11(str.substring(2)) : 0 + count11(str.substring(1));
    }
}
