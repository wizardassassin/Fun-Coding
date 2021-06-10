public class AP1userCompare {
    public static void main(String[] args) {
        int result = new AP1userCompare().userCompare("bb", 1, "zz", 2);
        int expected = -1;
        System.out.println(result + " " + expected + " " + (result == expected));
    }

    public int userCompare(String aName, int aId, String bName, int bId) {
        int ret = aName.compareTo(bName);
        if (ret > 0)
            return 1;
        if (ret < 0)
            return -1;
        if (aId < bId)
            return -1;
        if (aId > bId)
            return 1;
        return 0;
    }
}
