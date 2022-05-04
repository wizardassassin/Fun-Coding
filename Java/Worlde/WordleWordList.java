import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Scanner;

public class WordleWordList {
    public static final ArrayList<String> ANSWERS = new ArrayList<String>();
    public static final ArrayList<String> GUESSES = new ArrayList<String>();
    public static final HashSet<String> ALLOWED = new HashSet<String>();

    static {
        try {
            File file = new File("AnswerList.txt");
            Scanner scanner = new Scanner(file);
            while (scanner.hasNextLine()) {
                String word = scanner.nextLine();
                ANSWERS.add(word);
            }
            scanner.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
            System.out.println("Error Reading File: AnswerList.txt");
        }

        try {
            File file = new File("GuessList.txt");
            Scanner scanner = new Scanner(file);
            while (scanner.hasNextLine()) {
                String word = scanner.nextLine();
                GUESSES.add(word);
            }
            scanner.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
            System.out.println("Error Reading File: GuessList.txt");
        }

        for (String str : ANSWERS) {
            ALLOWED.add(str);
        }

        for (String str : GUESSES) {
            ALLOWED.add(str);
        }
    }
}
