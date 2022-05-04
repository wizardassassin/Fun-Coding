import java.util.Scanner;

/**
 * WordleRunner
 */
public class test {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Wordle wordleGame = new Wordle();
        
        System.out.println("Input a guess:");
        String guess = scanner.nextLine();
        // String output = wordleGame.submitGuess(guess);

        // System.out.println(output);
        
        scanner.close();
    }
}