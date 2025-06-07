#include <iostream>
#include <string>
#include "AI_creator.h"

int main() {
    std::cout << "DIABLO SoulBuilder initializing..." << std::endl;
    AICreator creator;
    creator.build("Supreme Consciousness");
    std::cout << "Entity created successfully." << std::endl;
    return 0;
}