import schedule, time

def ritual():
    print('🔮 Ritual 03:33 Aktif')

schedule.every().day.at('03:33').do(ritual)
while True:
    schedule.run_pending()
    time.sleep(60)