const express = require('express');
const app = express();
const todosRouter = require('./api/todos'); // Assuming "todos.js" is in the "api" folder

app.use(express.json());
app.use('/api', todosRouter); // Mount the todosRouter to the "/api" path

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT}`);
});
