public class AP1scoresAverage {
    public static void main(String[] args) {
        int result = new AP1scoresAverage().scoresAverage(new int[] { 2, 2, 4, 4 });
        int expected = 4;
        System.out.println(result + " " + expected + " " + (result == expected));
    }

    public int scoresAverage(int[] scores) {
        return Math.max(average(scores, 0, scores.length / 2), average(scores, scores.length / 2, scores.length));
    }

    public int average(int[] scores, int start, int end) {
        int acc = 0;
        for (int i = start; i < end; i++)
            acc += scores[i];
        return acc / (end - start);
    }
}
