
import telebot
import requests
import json




TOKEN = '7943195033:AAG43LcwfYPNLQrNOhiWZAYuLi4ldT1GByc'

bot = telebot.TeleBot(TOKEN)

API = '5bb3623c6484016408b6e69bf8562231'



@bot.message_handler(commands=['start'])
def send_welcome(message):
    bot.reply_to(message, "Приветствую! Напиши название города, для получения информации о погодных условиях в нём!")


@bot.message_handler(content_types=["text"])
def get_weather(massage):
    city = massage.text.strip()
    res = requests.get(f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API}&units=metric" )
    if res.status_code == 200:
        bot.reply_to(massage, f"Вы успешно выбрали город {city}")
        data = json.loads(res.text)
        temp = data["main"]["temp"]
        feels_like = data["main"]["feels_like"]
        temp_max = data["main"]["temp_max"]
        temp_min = data["main"]["temp_min"]
        windy = data["wind"]["speed"]



        bot.send_message(massage.chat.id, f'Погодные условия в этом городе сегодня:')
        bot.send_message(massage.chat.id, f'На данный момент температура {temp} ℃')
        bot.send_message(massage.chat.id, f'Ощущается как {feels_like} ℃')
        bot.send_message(massage.chat.id, f'Максимальная температура {temp_max} ℃')
        bot.send_message(massage.chat.id, f'Минимальная температура {temp_min} ℃')
        bot.send_message(massage.chat.id, f'Скорость ветра {windy} M/C')

        image = 'snow.png' if temp < 5  else 'sun.png'
        file = open('./' + image, 'rb')
        bot.send_photo(massage.chat.id, file)
        bot.send_message(massage.chat.id, "Какой будет следующий город?")
    else:
        bot.reply_to(massage, "Город указан неверно")
        bot.send_message(massage.chat.id, "Укажите верное название города")


if __name__ == "__main__":
    print("Bot is running...")
    bot.polling(none_stop=True)

