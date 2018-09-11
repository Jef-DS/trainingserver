const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.get('/', (req, res) => res.send('This is an API server.'));
app.use('/api/courses',require('./training'));
app.use('/api/users', require('./user'));
app.listen(3000, () => console.log('Server has started'));