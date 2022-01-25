/**
 * I think inheritance would work amazingly here
 */
public class fizz_buzz_1 {
    public static void main(String[] args) {
        FizzBuzz fizzBuzz = new FizzBuzz();
        fizzBuzz.convert();
        System.out.println(fizzBuzz.getResult());
    }
}

class FizzBuzz {
    private String[] array;
    private int length;
    private int offset;
    private FizzBuzzConverter converter;

    public FizzBuzz(int start, int end, FizzBuzzConverter converter) {
        this.offset = (start >= 0) ? start : 1;
        this.array = new String[(end - this.offset >= 0) ? end : 100];
        this.length = array.length;
        this.converter = new FizzBuzzConverter(converter);
    }

    public FizzBuzz(int start, int end) {
        this.offset = (start >= 0) ? start : 1;
        this.array = new String[(end - this.offset >= 0) ? end : 100];
        this.length = array.length;
        this.converter = new FizzBuzzConverter();
        this.converter.addTest(3, "Fizz");
        this.converter.addTest(5, "Buzz");
    }

    public FizzBuzz() {
        this(1, 100);
    }

    public void addTest(int key, String value) {
        this.converter.addTest(key, value);
    }

    public void addTest(PairIntString pair) {
        this.converter.addTest(pair);
    }

    public void convert() {
        for (int i = 0; i < this.length; i++) {
            array[i] = converter.compute(i + offset);
        }
    }

    public String getResult() {
        String output = "";
        for (int i = 0; i < this.length; i++) {
            output += array[i] + "\n";
        }
        if (output.length() > 0)
            return output.substring(0, output.length() - 1);
        return output;
    }
}

class FizzBuzzConverter {
    private DynamicArray tests;

    public FizzBuzzConverter() {
        this.tests = new DynamicArray();
    }

    public FizzBuzzConverter(FizzBuzzConverter converter) {
        this.tests = new DynamicArray(converter.getTests());
    }

    public void addTest(PairIntString pair) {
        tests.addPair(pair);
    }

    public void addTest(int key, String value) {
        tests.addPair(key, value);
    }

    public String compute(int num) {
        String output = "";
        int testsLength = tests.getLength();
        for (int i = 0; i < testsLength; i++) {
            PairIntString pair = tests.getPairAt(i);
            if (num % pair.getKey() == 0)
                output += pair.getValue();
        }
        if (output.length() == 0)
            output += num;
        return output;
    }

    private DynamicArray getTests() {
        return this.tests;
    }

}

class DynamicArray {
    private PairIntString[] array;
    private int length;
    private int maxLength;

    private DynamicArray(int length, int maxLength, PairIntString[] array) {
        this.maxLength = maxLength;
        this.length = length;
        this.array = DynamicArray.copyArray(array);
    }

    public DynamicArray(DynamicArray dynamicArray) {
        this(dynamicArray.getLength(), dynamicArray.getMaxLength(), dynamicArray.getArray());
    }

    private DynamicArray(int length, int maxLength) {
        this.maxLength = maxLength;
        this.length = length;
        this.array = new PairIntString[maxLength];
    }

    public DynamicArray() {
        this(0, 2);
    }

    private static PairIntString[] copyArray(PairIntString[] array) {
        return DynamicArray.copyArray(array, array.length);
    }

    private static PairIntString[] copyArray(PairIntString[] array, int possibleNewArrayLength) {
        int arrayLength = array.length;
        int newArrayLength = Math.max(possibleNewArrayLength, arrayLength);
        PairIntString[] newArray = new PairIntString[newArrayLength];
        for (int i = 0; i < arrayLength; i++) {
            newArray[i] = array[i];
        }
        return newArray;
    }

    private void doubleSize() {
        this.maxLength *= 2;
        this.array = copyArray(array, this.maxLength);
    }

    private void shiftUp(int index) {
        for (int i = this.length; i > index; i--) {
            this.array[i] = this.array[i - 1];
        }
    }

    private void insertValueAt(int key, String value, int index) {
        if (this.isNotValid(index))
            return;
        this.shiftUp(index);
        array[index] = new PairIntString(key, value);
        this.length++;
    }

    public void addPairAt(int key, String value, int index) {
        if (this.isFull())
            this.doubleSize();
        this.insertValueAt(key, value, index);
    }

    public void addPair(int key, String value) {
        this.addPairAt(key, value, this.length);
    }

    public void addPair(PairIntString pair) {
        this.addPair(pair.getKey(), pair.getValue());
    }

    private void shiftDown(int index) {
        for (int i = index; i < this.length - 1; i++) {
            this.array[i] = this.array[i + 1];
        }
    }

    public void removePairAt(int index) {
        if (this.isNotValid(index))
            return;
        this.shiftDown(index);
        this.array[this.length] = null;
        this.length--;
    }

    private boolean isNotValid(int index) {
        return index < 0 || index > this.length;
    }

    public void removePair() {
        removePairAt(this.length - 1);
    }

    private boolean isFull() {
        return this.length >= this.maxLength;
    }

    public int getLength() {
        return this.length;
    }

    public PairIntString getPairAt(int index) {
        return (index < this.length) ? this.array[index] : null;
    }

    private int getMaxLength() {
        return this.maxLength;
    }

    private PairIntString[] getArray() {
        return this.array;
    }
}

class PairIntString {
    private int key;
    private String value;

    public PairIntString(int key, String value) {
        this.key = key;
        this.value = value;
    }

    public PairIntString(PairIntString pair) {
        this(pair.getKey(), pair.getValue());
    }

    public PairIntString() {
        this(0, null);
    }

    public void setKey(int key) {
        this.key = key;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public int getKey() {
        return this.key;
    }

    public String getValue() {
        return this.value;
    }
}