public class RoobikCube {
    private RoobikFace[] faces = new RoobikFace[6];
    private static String[] colors = new String[] {"\u001B[37m" + "W" + "\u001B[0m", "\u001B[34m" + "B" + "\u001B[0m", "\u001B[35m" + "O" + "\u001B[0m", "\u001B[32m" + "G" + "\u001B[0m", "\u001B[33m" + "Y" + "\u001B[0m", "\u001B[31m" + "R" + "\u001B[0m"};
    /** 
     * Creates the faces array
     * 
     * <p>  &nbsp;&nbsp;&nbsp;0
     * <p>            1 2 3
     * <p>  &nbsp;&nbsp;&nbsp;4
     * <p>  &nbsp;&nbsp;&nbsp;5
    */
    public RoobikCube() {
        faces[0] = new RoobikFace(colors[0]);
        faces[1] = new RoobikFace(colors[1]);
        faces[2] = new RoobikFace(colors[2]);
        faces[3] = new RoobikFace(colors[3]);
        faces[4] = new RoobikFace(colors[4]);
        faces[5] = new RoobikFace(colors[5]);
    }
    /**
     * Gets a random color from the colors array
     * 
     * @return color - A random String from colors(array)
     */
    public static String getRandomColor() {
        return colors[(int) (Math.random() * colors.length)];
    }
    /**
     * Shifts the faces left: 3 -> 2; 2 -> 1; 1 -> 5; 5 -> 3;
     * 
     */
    public void left() {
        RoobikFace temp1 = faces[1];
        RoobikFace temp2 = faces[2];
        RoobikFace temp3 = faces[3];
        RoobikFace temp5 = faces[5];
        faces[2] = temp3;
        faces[1] = temp2;
        faces[5] = temp1;
        faces[3] = temp5;
    }
    /**
     * Shifts the faces right: 3 <- 2; 2 <- 1; 1 <- 5; 5 <- 3;
     * 
     */
    public void right() {
        RoobikFace temp1 = faces[1];
        RoobikFace temp2 = faces[2];
        RoobikFace temp3 = faces[3];
        RoobikFace temp5 = faces[5];
        faces[3] = temp2;
        faces[2] = temp1;
        faces[1] = temp5;
        faces[5] = temp3;
    }
    /**
     * Shifts the faces up: 2 -> 0; 0 -> 5; 5 -> 4; 4 -> 2;
     * 
     */
    public void up() {
        RoobikFace temp0 = faces[0];
        RoobikFace temp2 = faces[2];
        RoobikFace temp4 = faces[4];
        RoobikFace temp5 = faces[5];
        faces[0] = temp2;
        faces[5] = temp0;
        faces[4] = temp5;
        faces[2] = temp4;
    }
    /**
     * Shifts the faces down: 2 <- 0; 0 <- 5; 5 <- 4; 4 <- 2;
     * 
     */
    public void down() {
        RoobikFace temp0 = faces[0];
        RoobikFace temp2 = faces[2];
        RoobikFace temp4 = faces[4];
        RoobikFace temp5 = faces[5];
        faces[2] = temp0;
        faces[0] = temp5;
        faces[5] = temp4;
        faces[4] = temp2;
    }
    /**
     * Rotates the center face clockwise
     * 
     */
    public void cw() {
        faces[2].rotateCW();
    }
    /**
     * Rotates the center face counter clockwise
     * 
     */
    public void ccw() {
        faces[2].rotateCCW();
    }
    /**
     * Returns a formatted string of the faces
     * 
     * @return result - the name of the formatted string
     */
    public String toString() {
        String fillerRow = "     ";
        String result =
        fillerRow          + "   " + faces[0].getRow(0)                              + "\n" +
        fillerRow          + "   " + faces[0].getRow(1)                              + "\n" +
        fillerRow          + "   " + faces[0].getRow(2)                              + "\n" +
        "\n" +
        faces[1].getRow(0) + "   " + faces[2].getRow(0) + "   " + faces[3].getRow(0) + "\n" +
        faces[1].getRow(1) + "   " + faces[2].getRow(1) + "   " + faces[3].getRow(1) + "\n" +
        faces[1].getRow(2) + "   " + faces[2].getRow(2) + "   " + faces[3].getRow(2) + "\n" +
        "\n" +
        fillerRow          + "   " + faces[4].getRow(0)                              + "\n" +
        fillerRow          + "   " + faces[4].getRow(1)                              + "\n" +
        fillerRow          + "   " + faces[4].getRow(2)                              + "\n" +
        "\n" +
        fillerRow          + "   " + faces[5].getRow(0)                              + "\n" +
        fillerRow          + "   " + faces[5].getRow(1)                              + "\n" +
        fillerRow          + "   " + faces[5].getRow(2)                                     ;
        return result;
    }
}
