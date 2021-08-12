public class Recursion1factorial {
    public static void main(String[] args) {
        int result = new Recursion1factorial().factorial(3);
        int expected = 6;
        System.out.println(result + " " + expected + " " + (result == expected));
    }

    public int factorial(int n) {
        if (n <= 0)
            return 1;
        return n * factorial(n - 1);
    }
}