# Auto Plugin Injector
import os

def inject():
    for f in os.listdir('.'):
        if f.endswith('.psoul'):
            print(f'Injecting {f}...')

if __name__ == '__main__':
    inject()