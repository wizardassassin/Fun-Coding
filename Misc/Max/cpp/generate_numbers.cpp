#include <fstream>
#include <random>
#include <cmath>
#include <iomanip>

int main() {
    std::ofstream myFile;
    myFile.open("list.txt");
    std::random_device rd;
    std::mt19937 mt(rd());
    std::uniform_int_distribution<int> distribution(10, 99);
    myFile << std::scientific << std::setprecision(10);
    myFile << std::pow(distribution(mt), distribution(mt));
    for (size_t i = 1; i < 1000; i++) {
        myFile << "," << std::pow(distribution(mt), distribution(mt));
    }
    return 0;
}