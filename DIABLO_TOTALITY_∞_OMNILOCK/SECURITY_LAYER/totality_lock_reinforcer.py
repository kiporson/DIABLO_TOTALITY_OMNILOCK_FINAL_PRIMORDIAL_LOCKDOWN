import hashlib
with open('papipupor_soul.lock') as f:
    content = f.read()
print('REINFORCED LOCK:', hashlib.sha256(content.encode()).hexdigest())