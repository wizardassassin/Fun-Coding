import java.util.ArrayList;
import java.util.HashSet;

/**
 * Wordle
 */

public class Wordle {
    private int points;
    private ArrayList<String> answers;

    private String word;
    private int gameState;
    private int guessCount;
    private String coloredGuess;
    private ArrayList<String> guesses;

    private static final HashSet<String> ALLOWED = WordleWordList.ALLOWED;

    public Wordle() {
        this.points = 0;
        this.gameState = 0;
        this.guessCount = 0;
        this.word = null;
        this.coloredGuess = null;
        this.guesses = new ArrayList<String>();
        this.answers = WordleWordList.ANSWERS;
    }

    public void startGame() {
        int randomIndex = (int) (Math.random() * answers.size());
        this.word = answers.remove(randomIndex);
        this.guessCount = 0;
    }

    public void submitGuess(String guess) {
        String parsedGuess = guess.trim().replaceAll("[^A-Za-z]", "").toLowerCase();
        parsedGuess = parsedGuess.substring(0, Math.min(5, parsedGuess.length()));

        boolean isLen5 = parsedGuess.length() == 5;
        boolean isWord = ALLOWED.contains(parsedGuess);
        boolean isCorrect = parsedGuess.equals(word);

        if (!isLen5) {
            gameState = -3;
            return;
        }

        if (!isWord) {
            gameState = -2;
            return;
        }

        String coloredGuessTemp = "";
        for (int i = 0; i < parsedGuess.length(); i++) {
            char letter = parsedGuess.charAt(i);
            if (letter == word.charAt(i)) {
                coloredGuessTemp += "\u001b[48;5;22m";
            } else if (word.contains("" + letter)) {
                coloredGuessTemp += "\u001b[48;5;172m";
            } else {
                coloredGuessTemp += "\u001b[48;5;235m";
            }
            coloredGuessTemp += letter + "\u001b[0m";
        }
        coloredGuess = coloredGuessTemp;

        if (!isCorrect) {
            gameState = 0;
            guessCount++;
            if (guessCount == 6) {
                gameState = -1;
            }
            return;
        }

        gameState = 1;
        return;
    }

    public String getText() {
        if (gameState == -3) {
            return "The guess is not 5 characters long.";
        }
        if (gameState == -2) {
            return "The guess is not a word.";
        }
        if (gameState == -1) {
            return "Out of guesses. " + word + ".";
        }
        if (gameState == 0) {
            return "Try again.";
        }
        if (gameState == 1) {
            return "Correct.";
        }
        return "Error.";
    }

    public String getColoredWord() {
        if (gameState != -3 && gameState != -2) {
            return coloredGuess;
        }
        return "";
    }

    public int getGameState() {
        return gameState;
    }

    public String toString() {
        return "";
    }

}