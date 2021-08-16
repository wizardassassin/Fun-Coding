public class Recursion1bunnyEars2 {
    public int bunnyEars2(int bunnies) {
        if (bunnies <= 0)
            return 0;
        return ((bunnies % 2 == 0) ? 3 : 2) + bunnyEars2(bunnies - 1);
    }
}
