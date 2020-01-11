const express = require('express');

const app = express();


app.use(express.json ( { extended: false }));

app.use('/recommendations', require('./routes/recommendations'));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));