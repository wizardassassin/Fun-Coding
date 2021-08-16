public class Recursion1changePi {
    public String changePi(String str) {
        if (str.length() <= 1)
            return str;
        String cont = str.substring(0, 2);
        if (cont.equals("pi"))
            return "3.14" + changePi(str.substring(2));
        return cont.substring(0, 1) + changePi(str.substring(1));
    }
}
