public class AP1dividesSelf {
    public static void main(String[] args) {
        boolean result = new AP1dividesSelf().dividesSelf(128);
        boolean expected = true;
        System.out.println(result + " " + expected + " " + (result == expected));
    }

    public boolean dividesSelf(int n) {
        int glob = n;
        do {
            int temp = glob % 10;
            if (temp == 0 || n / temp * temp != n)
                return false;
            glob /= 10;
        } while (glob > 0);
        return true;
    }
}
