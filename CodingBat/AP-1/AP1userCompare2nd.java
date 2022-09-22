public class AP1userCompare2nd {
    public static void main(String[] args) {
        int result = new AP1userCompare2nd().userCompare("bb", 1, "zz", 2);
        int expected = -1;
        System.out.println(result + " " + expected + " " + (result == expected));
    }

    public int userCompare(String aName, int aId, String bName, int bId) {
        // return Math.min(Math.max(aName.compareTo(bName) + (aId - bId), -1), 1);

        int cName = aName.compareTo(bName);
        int cId = aId - bId;
        if (cName < 0) {
            return -1;
        }
        if (cName > 0) {
            return 1;
        }
        if (cId < 0) {
            return -1;
        } else if (cId > 0) {
            return 1;
        }
        return 0;

    }
}
