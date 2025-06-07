# Runtime Matrix untuk FORGE
import json

def run_matrix():
    with open('forge_matrix.lock') as f:
        matrix = json.load(f)
    for entry in matrix:
        execute(entry)