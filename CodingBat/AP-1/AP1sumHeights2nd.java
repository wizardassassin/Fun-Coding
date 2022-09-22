public class AP1sumHeights2nd {
    public static void main(String[] args) {
        int result = new AP1sumHeights2nd().sumHeights(new int[] { 5, 3, 6, 7, 2 }, 2, 4);
        int expected = 6;
        System.out.println(result + " " + expected + " " + (result == expected));
    }

    public int sumHeights(int[] heights, int start, int end) {
        int alt = 0, prev = heights[start];
        for (int i = start + 1; i <= end; i++) {
            int curr = heights[i];
            alt += Math.abs(curr - prev);
            prev = curr;
        }
        return alt;
    }
}
