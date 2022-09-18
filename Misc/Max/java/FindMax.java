import java.io.File;
import java.io.IOException;
import java.text.DecimalFormat;
import java.util.Scanner;

public class FindMax {
    public static void main(String[] args) {
        try {
            File myFile = new File("list.txt");
            Scanner scanner = new Scanner(myFile);
            scanner.useDelimiter(",");
            double maxVal = scanner.nextDouble();
            while (scanner.hasNextDouble()) {
                double temp = scanner.nextDouble();
                maxVal = Math.max(maxVal, temp);
            }
            scanner.close();
            DecimalFormat numberFormat = new DecimalFormat("0.0000000000E0");
            System.out.println(numberFormat.format(maxVal).replace("E", "e+"));
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }
}
