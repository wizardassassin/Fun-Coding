public class AP1hasOne {
    public static void main(String[] args) {
        boolean result = new AP1hasOne().hasOne(10);
        boolean expected = true;
        System.out.println(result + " " + expected + " " + (result == expected));
    }

    public boolean hasOne(int n) {
        for (; n > 0; n /= 10)
            if (n % 10 == 1)
                return true;
        return false;
    }
}
