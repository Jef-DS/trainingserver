const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.urlencoded());
app.use(bodyparser.json());
app.get('/', (req, res) => res.send('This is an API server.'));
app.listen(3000, () => console.log('Server has started'));