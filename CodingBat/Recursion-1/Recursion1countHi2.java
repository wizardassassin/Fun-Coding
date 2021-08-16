public class Recursion1countHi2 {
    public int countHi2(String str) {
        if (str.length() <= 1)
            return 0;
        if (str.substring(0, 2).equals("hi"))
            return 1 + countHi2(str.substring(2));
        if (str.length() <= 2)
            return 0;
        if (str.substring(0, 3).equals("xhi"))
            return countHi2(str.substring(3));
        return countHi2(str.substring(1));
    }
}
