const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/donate', (req, res) => {
    const { nickname, amount, message } = req.body;

    // Сохранение доната в базу данных
    // Например, в MongoDB или SQL

    // Отправка уведомления в программу для стрима (например, через WebSocket или API)
    sendAlertToStreamingSoftware(nickname, amount, message);

    res.json({ success: true });
});

function sendAlertToStreamingSoftware(nickname, amount, message) {
    // Здесь можно использовать API программы для стрима (например, OBS или Streamlabs)
    console.log(`Новый донат: ${nickname} - ${amount} руб. Сообщение: ${message}`);
    // Пример интеграции с OBS через WebSocket:
    // https://github.com/obsproject/obs-websocket
}

app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});