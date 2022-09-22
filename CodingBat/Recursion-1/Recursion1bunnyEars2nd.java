public class Recursion1bunnyEars2nd {
    public int bunnyEars(int b) {
        if (b == 0)
            return 0;
        return 2 + bunnyEars(b - 1);
    }
}
