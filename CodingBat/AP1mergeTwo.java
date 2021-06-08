import java.util.Arrays;

public final class AP1mergeTwo {
	public static void main(String[] args) {
		String[] result = new AP1mergeTwo().mergeTwo(new String[] { "f", "g", "z" }, new String[] { "c", "f", "g" }, 3);
		String[] expected = { "c", "f", "g" };
		System.out.println(
				Arrays.toString(result) + " " + Arrays.toString(expected) + " " + Arrays.equals(result, expected));
	}

	public String[] mergeTwo(String[] a, String[] b, int n) {
		String[] c = new String[n];
		int aa = 0, bb = 0;
		for (int i = 0; i < n; i++) {
			if (a[aa].charAt(0) > b[bb].charAt(0)) {
				c[i] = b[bb++];
			} else if (a[aa].charAt(0) < b[bb].charAt(0)) {
				c[i] = a[aa++];
			} else {
				c[i] = a[aa++];
				bb++;
			}
		}
		return c;
	}
}