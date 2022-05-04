import java.util.Scanner;

public class ConnectFourTest {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[][] g4 = {
                { 0, 0, 0, 0, 0, 0, 0 },
                { 0, 0, 0, 0, 0, 0, 0 },
                { 0, 0, 0, 0, 0, 0, 0 },
                { 0, 0, 0, 0, 0, 0, 0 },
                { 0, 0, 0, 0, 0, 0, 0 },
                { 0, 0, 0, 0, 0, 0, 0 },
        };

        ConnectFour game = new ConnectFour(6, 7);
        ConnectFour game2 = new ConnectFour(6, 7);
        ConnectFour game3 = new ConnectFour(4, 7);
        ConnectFour game4 = new ConnectFour(g4);

        Object[][] tests = {
                { "Hello", true, game, game2 },
                { "Hello", false, game, game3 },
                { "Hello", true, game, game4 },
        };

        testCases(tests);

        System.out.println(game);

        scanner.close();
    }

    private static int testCount = 0;

    public static void testCases(Object[][] tests) {
        for (Object[] test : tests)
            System.out.println(testFormat((String) test[0], (boolean) test[1], test[2].equals(test[3])));
    }

    public static String testFormat(String name, boolean expected, boolean result) {
        return "Test #" + (++testCount) + " " + name + ": " + ((expected == result) ? "Passed" : "Failed") + ".";
    }
}
