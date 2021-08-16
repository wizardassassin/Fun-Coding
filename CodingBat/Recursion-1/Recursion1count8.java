public class Recursion1count8 {
    public int count8(int n) {
        if (n <= 0)
            return 0;
        return ((n % 10 == 8) ? (((n / 10) % 10 == 8) ? 2 : 1) : 0) + count8(n / 10);
    }
}
