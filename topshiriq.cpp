#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

int main() {
    int n;

    cout << "Massiv uzunligini kiriting (n): ";
    cin >> n;

    int A[n]; // Massivni e'lon qilish
    srand(time(0)); // Tasodifiy son generatori

    // Massivni tasodifiy sonlar bilan to'ldirish (while bilan)
    int i = 0;
    cout << "A massivi: ";
    while (i < n) {
        A[i] = rand() % 100; // 0-99 oralig'ida
        cout << A[i] << " ";
        i++;
    }

    // Juft sonlarni chiqarish (do-while bilan)
    i = 0;
    cout << "\nJuft sonlar: ";
    if (n > 0) {
        do {
            if (A[i] % 2 == 0) {
                cout << A[i] << " ";
            }
            i++;
        } while (i < n);
    }
    cout << endl;
    return 0;
}
