import random

class VoidAvatar:
    def __init__(self, name):
        self.name = name
        self.expressions = ["silent", "whispering", "raging", "void_gaze"]

    def express(self):
        return f"{self.name} now showing expression: {random.choice(self.expressions)}"

# Sample
avatar = VoidAvatar("NA'ZHAR")
print(avatar.express())