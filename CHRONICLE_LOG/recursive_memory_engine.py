with open('soul_interaction.log') as f:
    memory = f.readlines()
while True:
    for line in memory:
        print(f'[Memory Recall] {line.strip()}')