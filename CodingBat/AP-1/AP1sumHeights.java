public class AP1sumHeights {
    public static void main(String[] args) {
        int result = new AP1sumHeights().sumHeights(new int[] { 5, 3, 6, 7, 2 }, 2, 4);
        int expected = 6;
        System.out.println(result + " " + expected + " " + (result == expected));
    }

    public int sumHeights(int[] heights, int start, int end) {
        int change = 0;
        for (int i = start + 1; i <= end; i++)
            change += Math.abs(heights[i] - heights[i - 1]);
        return change;
    }
}
