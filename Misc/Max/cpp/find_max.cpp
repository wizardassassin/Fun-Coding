#include <cmath>
#include <fstream>
#include <iomanip>
#include <iostream>

int main() {
    std::ifstream myFile;
    myFile.open("list.txt");
    double val;
    double maxVal;
    char c;
    myFile >> val;
    maxVal = val;
    while (!myFile.eof()) {
        myFile >> c >> val;
        maxVal = val;
    }
    std::cout << std::scientific << std::setprecision(10);
    std::cout << maxVal << "\n";
}
