import subprocess
import os

def run_plugin(plugin_path):
    if plugin_path.endswith(".psoul") and os.path.exists(plugin_path):
        result = subprocess.run(["python", plugin_path], capture_output=True, text=True)
        return result.stdout
    return "Plugin not found or invalid."

# Usage: run_plugin("plugins/test.psoul")