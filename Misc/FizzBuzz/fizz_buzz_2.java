import java.util.ArrayList;

public class fizz_buzz_2 {
    public static void main(String[] args) {
        ArrayList<Pair> tests = new ArrayList<Pair>();
        tests.add(new Pair(3, "Fizz"));
        tests.add(new Pair(5, "Buzz"));

        for (int i = 1; i <= 100; i++) {
            String output = "";
            for (Pair pair : tests) {
                if (i % pair.key == 0) {
                    output += pair.value;
                }
            }
            System.out.println((output.length() > 0) ? output : i);
        }
    }
}

class Pair {
    int key;
    String value;

    public Pair(int key, String value) {
        this.key = key;
        this.value = value;
    }
}