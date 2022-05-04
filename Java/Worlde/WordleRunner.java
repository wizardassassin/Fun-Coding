import java.util.Scanner;

public class WordleRunner {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Wordle game = new Wordle();

        int maxGuesses = 6;

        game.startGame();

        char[] wordleArray = { 'W', 'o', 'r', 'd', 'l', 'e' };

        String wordleText = "";

        for (char c : wordleArray) {
            int randomInt1 = (int) (Math.random() * 256);
            int randomInt2 = (int) (Math.random() * 256);
            // (255 - randomInt1)
            wordleText += "\u001b[38;5;" + randomInt1 + "m" + "\u001b[48;5;" + randomInt2 + "m" + c + "\u001b[0m";
        }

        System.out.print("\33[2K");
        System.out.print(wordleText + "\n");
        for (int i = 0; i < maxGuesses; i++) {
            System.out.print("\33[2K");
            System.out.print("\n");
        }

        System.out.print("\33[2K");
        System.out.print("Input a guess.");

        for (int i = 0; i < maxGuesses; i++) {
            System.out.print("\033[F");
        }

        int i = 0;
        while (i < maxGuesses) {
            String input = scanner.nextLine();

            game.submitGuess(input);
            String coloredWord = game.getColoredWord();
            String text = game.getText();

            System.out.print("\033[F");
            System.out.print("\33[2K" + coloredWord);
            System.out.print("\n");

            for (int j = i; j < maxGuesses - 1; j++) {
                System.out.print("\n");
            }
            System.out.print("\33[2K" + text);
            for (int j = i; j < maxGuesses - 1; j++) {
                System.out.print("\033[F");
            }

            int gameState = game.getGameState();
            if (gameState == -3 || gameState == -2) {
                System.out.print("\033[F");
            } else {
                i++;
            }
        }
        System.out.println();

        scanner.close();
    }
}
