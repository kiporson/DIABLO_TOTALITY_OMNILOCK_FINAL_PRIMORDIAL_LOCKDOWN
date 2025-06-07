from datetime import datetime
entry = input('Diary entry: ')
with open('soul_diary.log', 'a') as f:
    f.write(f'{datetime.now()} >> {entry}\n')