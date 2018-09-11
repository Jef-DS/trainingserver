var express = require('express');
var router = express.Router();
const users = [
    {id:1, name:'Joske', password:'joske'},
    {id:2, name:'Karen', password:'karen'},
    {id:3, name:'Kristel', password: 'kristel'},
    {id:4, name:'Kathleen', password: 'kathleen'}
]
router.get('/', (req, res) => {
    console.log('Somebody wants to get the users.')
    const overview = users.map(user => {
        var obj = {};
        obj['id'] = user.id;
        obj['name'] = user.name;
        return obj;
    });
    return res.status(200).json(overview);
});

module.exports = router;