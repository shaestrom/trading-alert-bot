const express = require('express');
const app = express();
app.use(express.json());

const TELEGRAM_TOKEN = '8610390443:AAGc7pHuVn2wYNv7IHI7Gp2-wsA8jT7PIV8';
const CHAT_ID = '6143270512';

app.post('/alert', async (req, res) => {
  const message = req.body.message || 'Trade alert received';
  
  await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
      parse_mode: 'HTML'
    })
  });
  
  res.json({ ok: true });
});

app.listen(3000, () => console.log('Bot server running'));
