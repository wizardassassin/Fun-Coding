import java.util.Scanner;

public class RoobikRunner {
    // Main program
    // Creates a new instance of RoobikCubs(A Rubik's Cube)
    // Gets user input on how to rotate the cube
    // Prints the cube out
    // Repeats until stopped
    public static void main(String[] args) {
        // Starting initializations
        RoobikCube rc = new RoobikCube();
        Scanner scanner = new Scanner(System.in);
        boolean end = false;
        // Game Loop
        while (true) {
            System.out.println(rc);
            System.out.println(
                    "How do you want to rotate the cube? (left, right, up, down, clockwise(cw), counter clockwise(ccw), or exit)");
            // Gets user input and responds accordingly
            String rotate = scanner.nextLine();
            switch (rotate) {
                case "left":
                    rc.left();
                    break;
                case "right":
                    rc.right();
                    break;
                case "up":
                    rc.up();
                    break;
                case "down":
                    rc.down();
                    break;
                case "cw":
                    rc.cw();
                    break;
                case "ccw":
                    rc.ccw();
                    break;
                default:
                    end = true;
                    break;
            }
            if (end) {
                break;
            }
        }
        scanner.close();
    }
}
