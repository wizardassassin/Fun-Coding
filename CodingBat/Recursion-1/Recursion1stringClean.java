public class Recursion1stringClean {
    public String stringClean(String str) {
        if (str.length() <= 1)
            return str; 
        String condense = str.substring(0, 1);
        int count = 0;
        for (int i = 0, ii = str.length(); i < ii; i++) {
            if (!str.substring(i, i + 1).equals(condense))
                break;
            count++;
        }
        return condense + stringClean(str.substring(count));
    }
}
