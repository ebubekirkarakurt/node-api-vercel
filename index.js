const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path'); // path modülünü ekledik
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT}`);
});

app.get('/', (req, res) => {
  // Dosya yolu düzenleme
  const filePath = path.join(__dirname, '/apidetails.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      res.status(500).json({ error: 'Error reading the file' });
    } else {
      try {
        const jsonData = JSON.parse(data);
        res.json(jsonData);
      } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
        res.status(500).json({ error: 'Error parsing JSON' });
      }
    }
  });
});

app.get('/about', (req, res) => {
  res.send('This is my about route..... ');
});

// Export the Express API
module.exports = app;
