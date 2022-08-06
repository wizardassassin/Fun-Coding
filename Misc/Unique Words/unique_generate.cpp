/**
 * Converts words_alpha.txt to unique_words.txt
 * Adds mappings for each word in unique_words.txt
 *
 * A word is constrained to a strict length of 5 and can't
 * contain any symbols(only letters).
 *
 * Input: [words_alpha.txt, ...]
 *  - Files with words that are seperated
 *    by spaces or newlines.
 *
 * Output: unique_words.txt
 *  - Lexicographically sorts the letters of each word
 *  - The words are then sorted amongst each other
 *  - Duplicates are removed
 *
 * Output: unique_mappings.txt
 *  - Maps each word that has their letters sorted to their
 *    corresponding English word(s)
 *
 * Not that efficient, but fast enough.
 *
 * Inspiration: https://www.youtube.com/watch?v=_-AfhLQfb6w
 *
 */

#include <algorithm>
#include <cctype>
#include <chrono>
#include <fstream>
#include <iomanip>
#include <iostream>
#include <map>
#include <set>
#include <sstream>
#include <string>
// #include <unordered_map>
// #include <unordered_set>
#include <vector>

#pragma GCC optimize("Ofast,unroll-loops")
#pragma GCC target("avx,avx2,fma")

using std::string;

typedef std::set<string> setStr;
typedef std::set<char> setChar;
typedef std::map<string, setStr> mapStrSetStr;
typedef std::vector<string> vectStr;
typedef std::vector<vectStr> vectVectStr;

vectStr rawWordsFileName{"words_alpha.txt"};
string uniqueWordsFileName = "unique_words.txt";
string wordMappingsFileName = "unique_mappings.txt";

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

string validString(const string& str) {
    for (const auto c : str) {
        if (!::isalpha(c)) {
            return "";
        }
    }
    if (str.length() != 5) {
        return "";
    }
    string str3;
    setChar set1;
    std::stringstream str2;
    for (const auto c : str) {
        char c2 = ::tolower(c);
        if (set1.find(c2) != set1.end()) {
            return "";
        }
        set1.insert(c2);
        str2 << c2;
    }
    str2 >> str3;
    return str3;
}

setStr uniqueWords(const vectStr& fileNames) {
    setStr wordsStrRaw;
    for (const auto& fileName : fileNames) {
        vectStr tempVect = parseFile(fileName);
        for (const auto& str : tempVect) {
            string str3 = validString(str);
            if (str3.length() == 5) {
                wordsStrRaw.insert(str3);
            }
        }
    }
    return wordsStrRaw;
}

setStr sortChars(const setStr& wordsRaw) {
    setStr sortRaw;
    for (auto word : wordsRaw) {
        sort(word.begin(), word.end());
        sortRaw.insert(word);
    }
    return sortRaw;
}

mapStrSetStr computeMappings(const setStr& wordsRaw) {
    mapStrSetStr wordMappings;
    for (const auto& str : wordsRaw) {
        string str2 = str;
        sort(str2.begin(), str2.end());
        auto iter = wordMappings.find(str2);
        if (iter == wordMappings.end()) {
            setStr set1{str};
            wordMappings.insert(std::pair<string, setStr>(str2, set1));
        } else {
            iter->second.insert(str2);
        }
    }
    return wordMappings;
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

void writeFile(const string& fileName, const vectStr& wordList) {
    std::ofstream outFile;
    outFile.open(fileName);
    for (const auto& str : wordList) {
        outFile << str << "\n";
    }
    outFile.close();
}

void writeFile(const string& fileName, const setStr& wordList) {
    std::ofstream outFile;
    outFile.open(fileName);
    for (const auto& str : wordList) {
        outFile << str << "\n";
    }
    outFile.close();
}

void writeFile(const string& fileName, const mapStrSetStr& wordList) {
    std::ofstream outFile;
    outFile.open(fileName);
    for (const auto& setSetPair : wordList) {
        outFile << setSetPair.first << " ";
        for (const auto& str : setSetPair.second) {
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
    setStr wordsRaw = uniqueWords(rawWordsFileName);
    auto parseStop = steady_clock::now();
    auto parseDuration = duration_cast<microseconds>(parseStop - parseStart);
    std::cout << "Parse Time: " << parseDuration.count() / 1000.0 << "ms\n"
              << std::endl;

    auto computeStart = steady_clock::now();
    setStr wordsRawSorted = sortChars(wordsRaw);
    mapStrSetStr wordMappings = computeMappings(wordsRaw);
    auto computeStop = steady_clock::now();
    auto computeDuration =
        duration_cast<microseconds>(computeStop - computeStart);
    std::cout << "Compute Time: " << computeDuration.count() / 1000.0 << "ms\n"
              << std::endl;

    auto writeStart = steady_clock::now();
    writeFile(uniqueWordsFileName, wordsRawSorted);
    writeFile(wordMappingsFileName, wordMappings);
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
