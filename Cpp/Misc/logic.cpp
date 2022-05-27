#include <bits/stdc++.h>

using namespace std;

bool orGate(bool a, bool b) {
    return a || b;
}

bool andGate(bool a, bool b) {
    return a && b;
}

bool notGate(bool a) {
    return !a;
}

bool norGate(bool a, bool b) {
    return notGate(orGate(a, b));
}

bool nandGate(bool a, bool b) {
    return notGate(andGate(a, b));
}

bool xorGate(bool a, bool b) {
    bool or1 = orGate(a, b);
    bool nand1 = nandGate(a, b);
    return andGate(or1, nand1);
}

bool xnorGate(bool a, bool b) {
    return notGate(xorGate(a, b));
}

bool bufferGate(bool a) {
    return a;
}

string truthTable(function<bool(bool,  bool)> f) {
    string output = "+===+===+===+\n"
                    "| a | b | q |\n"
                    "+===+===+===+";
    int l = 2;
    int a = 0;
    while (a < l) {
        int b = 0;
        while (b < l) {
            output += "\n| " + to_string(a) + " | " + to_string(b) + " | " + to_string(f(a, b)) + " |" + "\n+---+---+---+";
            b++;
        }
        a++;
    }
    return output;
}

int main(int argc, char const *argv[]) {
    string table = truthTable(xnorGate);

    cout << "xnorGate" << endl;
    cout << table << endl;
    return 0;
}