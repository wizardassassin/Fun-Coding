public class AP1sumHeights2 {
    public static void main(String[] args) {
        int result = new AP1sumHeights2().sumHeights2(new int[] { 5, 3, 6, 7, 2 }, 2, 4);
        int expected = 7;
        System.out.println(result + " " + expected + " " + (result == expected));
    }

    public int sumHeights2(int[] heights, int start, int end) {
        int acc = 0;
        for (int i = start; i < end; i++)
            if (heights[i + 1] - heights[i] > 0)
                acc += (heights[i + 1] - heights[i]) * 2;
            else
                acc += heights[i] - heights[i + 1];
        return acc;
    }
}
