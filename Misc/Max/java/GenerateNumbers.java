import java.io.FileWriter;
import java.io.IOException;
import java.text.DecimalFormat;

public class GenerateNumbers {
    public static void main(String[] args) {
        try {
            DecimalFormat numberFormat = new DecimalFormat("0.0000000000E0");
            FileWriter myFile = new FileWriter("list.txt");
            double val = (Math.pow(Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)));
            myFile.write(numberFormat.format(val).replace("E", "e+"));
            for (int i = 1; i < 1000; i++) {
                val = (Math.pow(Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)));
                myFile.write(",");
                myFile.write(numberFormat.format(val).replace("E", "e+"));
            }
            myFile.close();
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }
}