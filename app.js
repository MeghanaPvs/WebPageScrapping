const express = require('express');
const app = express();
const apiRoute = require('./routes/index');
const PORT = 5050;

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
  });

app.use('/',apiRoute);
