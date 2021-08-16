public class Recursion1changeXY {
    public String changeXY(String str) {
        if (str.length() == 0)
            return "";
        String cont = str.substring(0, 1);
        return  ((cont.equals("x")) ? "y" : cont) + changeXY(str.substring(1));
    }
}
