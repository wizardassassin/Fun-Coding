public class AP1bigHeights {
    public static void main(String[] args) {
        int result = new AP1bigHeights().bigHeights(new int[] { 5, 3, 6, 7, 2 }, 2, 4);
        int expected = 1;
        System.out.println(result + " " + expected + " " + (result == expected));
    }

    public int bigHeights(int[] heights, int start, int end) {
        int acc = 0;
        for (int i = start; i < end; i++)
            if (Math.abs(heights[i + 1] - heights[i]) >= 5)
                acc++;
        return acc;
    }
}
