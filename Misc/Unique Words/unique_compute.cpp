/**
 * Finds groups of 5 letter words where
 * no letter in each word is repeated.
 * Each group has a length of 5.
 * i.e 25/26 characters are used in
 * each group.
 *
 * Input: unique_words.txt
 *  - A file with unique 5 letter words.
 *  - Words or letters don't have to be sorted.
 *  - Letters can't repeat in the same word.
 *  - Words can't be anagrams of each other.
 *  - Each word should be seperated by a
 *  - space or a newline character
 *
 * Output: unique_combinations.txt
 *  - The combinations of 5 letter words.
 *  - Each combination uses 25 out of the
 *    26 English letters.
 *  - Each word is seperated by a space, and
 *    each combination is seperated by a newline
 *
 * There may be trailing spaces and/or newlines.
 *
 * The code doesn't use that much ram, but it takes a
 * while to run. There's a lot of overhead in copying
 * sets and comparing words.
 *
 * The code is probably suboptimal.
 *
 * Inspiration: https://www.youtube.com/watch?v=_-AfhLQfb6w
 *
 * Multithreading?
 *
 */

// #include <algorithm>
#include <chrono>
#include <fstream>
#include <iomanip>
#include <iostream>
// #include <set>
#include <string>
#include <unordered_set>
#include <vector>

#pragma GCC optimize("Ofast,unroll-loops")
#pragma GCC target("avx,avx2,fma")

using std::string;

typedef std::unordered_set<char> setChar;
typedef std::vector<string> vectStr;
typedef std::vector<vectStr> vectVectStr;

string uniqueWordsFileName = "unique_words.txt";
string uniqueCombinationsFileName = "unique_combinations.txt";

vectStr parseFile(const string& fileName) {
    std::ifstream wordsFile;
    wordsFile.open(fileName);
    vectStr vect2;
    while (!wordsFile.eof()) {
        string temp;
        wordsFile >> temp;
        if (temp.length() != 0) {
            vect2.push_back(temp);
        }
    }
    wordsFile.close();
    return vect2;
}

vectVectStr computeCombos(const vectStr& wordsStr) {
    using namespace std::chrono;
    vectVectStr vect;
    size_t len = wordsStr.size();

    // Recursion might be better
    for (size_t a = 0; a < len; a++) {
        std::cout << "Iter: " << a + 1 << "/" << len << "\n";
        auto start = steady_clock::now();
        setChar setA;
        setA.insert(wordsStr[a].begin(), wordsStr[a].end());
        for (size_t b = a + 1; b < len; b++) {
            bool isUniqueB = true;
            for (const char c : wordsStr[b]) {
                if (setA.find(c) != setA.end()) {
                    isUniqueB = false;
                    break;
                }
            }
            if (isUniqueB) {
                setChar setB;
                setB.insert(setA.begin(), setA.end());
                setB.insert(wordsStr[b].begin(), wordsStr[b].end());
                for (size_t c = b + 1; c < len; c++) {
                    bool isUniqueC = true;
                    for (const char c : wordsStr[c]) {
                        if (setB.find(c) != setB.end()) {
                            isUniqueC = false;
                            break;
                        }
                    }
                    if (isUniqueC) {
                        setChar setC;
                        setC.insert(setB.begin(), setB.end());
                        setC.insert(wordsStr[c].begin(), wordsStr[c].end());
                        for (size_t d = c + 1; d < len; d++) {
                            bool isUniqueD = true;
                            for (const char c : wordsStr[d]) {
                                if (setC.find(c) != setC.end()) {
                                    isUniqueD = false;
                                    break;
                                }
                            }
                            if (isUniqueD) {
                                setChar setD;
                                setD.insert(setC.begin(), setC.end());
                                setD.insert(wordsStr[d].begin(),
                                            wordsStr[d].end());
                                for (size_t e = d + 1; e < len; e++) {
                                    bool isUniqueE = true;
                                    for (const char c : wordsStr[e]) {
                                        if (setD.find(c) != setD.end()) {
                                            isUniqueE = false;
                                            break;
                                        }
                                    }
                                    if (isUniqueE) {
                                        vectStr tempVect{
                                            wordsStr[a], wordsStr[b],
                                            wordsStr[c], wordsStr[d],
                                            wordsStr[e]};
                                        vect.push_back(tempVect);
                                        for (const auto& str : tempVect) {
                                            std::cout << str << " ";
                                        }
                                        std::cout << "\n";
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        auto stop = steady_clock::now();
        auto duration = duration_cast<microseconds>(stop - start);
        std::cout << "Time: " << duration.count() / 1000.0 << "ms\n"
                  << std::endl;
    }

    return vect;
}

void writeFile(const string& fileName, const vectVectStr& wordList) {
    std::ofstream outFile;
    outFile.open(fileName);
    for (const auto& vect1 : wordList) {
        for (const auto& str : vect1) {
            outFile << str << " ";
        }
        outFile << "\n";
    }
    outFile.close();
}

int main(int argc, char const* argv[]) {
    using namespace std::chrono;
    // std::ios::sync_with_stdio(0);
    std::cin.tie(0);

    std::cout << std::fixed << std::setprecision(3);

    auto start = steady_clock::now();

    auto parseStart = steady_clock::now();
    const vectStr wordsStr = parseFile(uniqueWordsFileName);
    auto parseStop = steady_clock::now();
    auto parseDuration = duration_cast<microseconds>(parseStop - parseStart);
    std::cout << "Parse Time: " << parseDuration.count() / 1000.0 << "ms\n"
              << std::endl;

    auto computeStart = steady_clock::now();
    const vectVectStr wordList = computeCombos(wordsStr);
    auto computeStop = steady_clock::now();
    auto computeDuration =
        duration_cast<microseconds>(computeStop - computeStart);
    std::cout << "Compute Time: " << computeDuration.count() / 1000.0 << "ms\n"
              << std::endl;

    auto writeStart = steady_clock::now();
    writeFile(uniqueCombinationsFileName, wordList);
    auto writeStop = steady_clock::now();
    auto writeDuration = duration_cast<microseconds>(writeStop - writeStart);
    std::cout << "Write Time: " << writeDuration.count() / 1000.0 << "ms\n"
              << std::endl;

    auto stop = steady_clock::now();
    auto duration = duration_cast<microseconds>(stop - start);

    std::cout << "Elapsed Time: " << duration.count() / 1000.0 << "ms"
              << std::endl;

    return 0;
}
