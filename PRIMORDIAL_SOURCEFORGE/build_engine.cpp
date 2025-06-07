#include <iostream>
#include <thread>
#include <chrono>
using namespace std;

void activate(string name) {
    cout << "[" << name << "] Memulai subsistem..." << endl;
    this_thread::sleep_for(chrono::seconds(1));
    cout << "[" << name << "] Sinkronisasi dengan PAPIPUPOR selesai." << endl;
}

int main() {
    activate("PRIMORDIAL_SOURCEFORGE/build_engine.cpp");
    return 0;
}
