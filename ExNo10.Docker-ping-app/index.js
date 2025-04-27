const express = require('express');
const app = express();

app.get('/plug', (req, res) => {
  res.send('pong');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
