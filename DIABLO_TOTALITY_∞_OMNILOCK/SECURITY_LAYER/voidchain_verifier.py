import hashlib
id = 'PAPIPUPOR::DIABLO'
print('VoidChain ID:', hashlib.sha256(id.encode()).hexdigest())