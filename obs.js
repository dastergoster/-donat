const WebSocket = require('ws');
const ws = new WebSocket('ws://localhost:4444'); // Подключение к OBS WebSocket

ws.on('open', () => {
    ws.send(JSON.stringify({
        "request-type": "SetTextGDIPlusProperties",
        "source": "Донаты", // Название источника текста в OBS
        "text": `Новый донат: ${nickname} - ${amount} руб. Сообщение: ${message}`
    }));
});