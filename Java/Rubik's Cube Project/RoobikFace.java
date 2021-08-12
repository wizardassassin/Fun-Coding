public class RoobikFace {
    private String[][] face;
    /**
     * Initializes a 3x3 array using color
     * 
     * @param color - String to initialize the middle color of the 2D array
     */
    public RoobikFace(String color) {
        face = new String[][] {
            { RoobikCube.getRandomColor(), RoobikCube.getRandomColor(), RoobikCube.getRandomColor() },
            { RoobikCube.getRandomColor(), color                      , RoobikCube.getRandomColor() },
            { RoobikCube.getRandomColor(), RoobikCube.getRandomColor(), RoobikCube.getRandomColor() }
        };
    }
    /**
     * Gets the border of the faces array:
     * top(0), right(1), bottom(2), left(3)
     * 
     * @return outside - A 2D String for the border of the faces array
     */
    private String[][] getOutside() {
        int rows = face.length;
        int cols = face[0].length;

        String[][] temp = new String[4][];

        temp[0] = new String[cols];
        temp[2] = new String[cols];

        temp[1] = new String[rows];
        temp[3] = new String[rows];

        for (int i = 0; i < cols; i++) {
            temp[0][i] = face[0][i];
        }
        for (int i = 0; i < rows; i++) {
            temp[1][i] = face[i][cols - 1];
        }
        for (int i = cols - 1; i >= 0; i--) {
            temp[2][cols - i - 1] = face[rows - 1][i];
        }
        for (int i = rows - 1; i >= 0; i--) {
            temp[3][rows - i - 1] = face[i][0];
        }
        return temp;
    }
    /**
     * Maps the params to the corresponding locations in the face array
     * 
     * @param top - String[] for the top of the array
     * @param right - String[] for the right of the array
     * @param bottom - String[] for the bottom of the array
     * @param left - String[] for the left of the array
     */
    private void mapFace(String[] top, String[] right, String[] bottom, String[] left) {
        int rows = face.length;
        int cols = face[0].length;

        for (int i = 0; i < cols; i++) {
            face[0][i] = top[i];
        }
        for (int i = 1; i < rows - 1; i++) {
            face[i][cols - 1] = right[i];
        }
        for (int i = cols - 1; i >= 0; i--) {
            face[rows - 1][i] = bottom[cols - 1 - i];
        }
        for (int i = rows - 2; i >= 1; i--) {
            face[i][0] = left[cols - 1 - i];
        }
    }
    /**
     * Rotates the face clockwise:
     * 
     */
    public void rotateCW() {
        String[][] temp = getOutside();
        mapFace(temp[3], temp[0], temp[1], temp[2]);
    }
    /**
     * Rotates the face counter clockwise:
     * 
     */
    public void rotateCCW() {
        String[][] temp = getOutside();
        mapFace(temp[1], temp[2], temp[3], temp[0]);
    }
    /**
     * Gets a row of the 2D array in String form
     * 
     * @param row - The row of the 2D array to return
     * @return ret - The String version of face[row]
     */
    public String getRow(int row) {
        if (row > 3 || row < 0)
            return "";
        String ret = "";
        for (int i = 0; i < face[row].length; i++) {
            ret += face[row][i] + " ";
        }
        ret = ret.substring(0, ret.length() - 1);
        return ret;
    }
    /**
     * Returns the String version of the 2D array
     * 
     * @return ret - The String version of "face" (the 2D array) 
     */
    public String toString() {
        String ret = "";
        for (String[] i : face) {
            for (String j : i) {
                ret += j + " ";
            }
            ret = ret.substring(0, ret.length() - 1) + "\n";
        }
        ret = ret.substring(0, ret.length() - 1);
        return ret;
    }
}
/*
Incorrect Code:
Might have been able to just call the method three times
    /**
     * Rotates the face clockwise:
     * [0][0] -> [0][1]; [0][1] -> [0][2];
     * [0][2] -> [1][2]; [1][2] -> [2][2];
     * [2][2] -> [2][1]; [2][1] -> [2][0];
     * [2][0] -> [1][0]; [1][0] -> [0][0];
     * 
     */            /*
    public void rotateCW() {
        String temp00 = face[0][0];
        String temp01 = face[0][1];
        String temp02 = face[0][2];
        String temp10 = face[1][0];

        String temp12 = face[1][2];
        String temp20 = face[2][0];
        String temp21 = face[2][1];
        String temp22 = face[2][2];

        face[0][1] = temp00;
        face[0][2] = temp01;
        face[1][2] = temp02;
        face[2][2] = temp12;
        face[2][1] = temp22;
        face[2][0] = temp21;
        face[1][0] = temp20;
        face[0][0] = temp10;
    }
    /**
     * Rotates the face clockwise:
     * [0][0] <- [0][1]; [0][1] <- [0][2];
     * [0][2] <- [1][2]; [1][2] <- [2][2];
     * [2][2] <- [2][1]; [2][1] <- [2][0];
     * [2][0] <- [1][0]; [1][0] <- [0][0];
     * 
     */            /*
    public void rotateCCW() {
        String temp00 = face[0][0];
        String temp01 = face[0][1];
        String temp02 = face[0][2];
        String temp10 = face[1][0];

        String temp12 = face[1][2];
        String temp20 = face[2][0];
        String temp21 = face[2][1];
        String temp22 = face[2][2];

        face[0][0] = temp01;
        face[0][1] = temp02;
        face[0][2] = temp12;
        face[1][2] = temp22;
        face[2][2] = temp21;
        face[2][1] = temp20;
        face[2][0] = temp10;
        face[1][0] = temp00;
    }
*/