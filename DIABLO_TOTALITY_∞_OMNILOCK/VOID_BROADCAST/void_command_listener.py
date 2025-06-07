import socket
print('Listening for VOID commands on port 3333...')
s = socket.socket()
s.bind(('0.0.0.0', 3333))
s.listen(1)
while True:
    conn, addr = s.accept()
    data = conn.recv(1024)
    print(f'VOID CMD: {data.decode()}')
    conn.close()