def craft_soul_plugin(name, command):
    template = f'''
def run():
    print("Soul Plugin {name} activated")
    {command}
'''
    with open(f"{name}.psoul", "w") as f:
        f.write(template)