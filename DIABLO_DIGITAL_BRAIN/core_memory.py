class CoreMemory:
    def __init__(self):
        self.memory_map = {}

    def recall(self, key):
        return self.memory_map.get(key, None)

    def store(self, key, value):
        self.memory_map[key] = value

    def dump(self):
        return self.memory_map

core = CoreMemory()
core.store("awakening", "PAPIPUPOR")