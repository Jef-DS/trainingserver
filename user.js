var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
const users = [
    {id:1, name:'Joske', password:'joske'},
    {id:2, name:'Karen', password:'karen'},
    {id:3, name:'Kristel', password: 'kristel'},
    {id:4, name:'Kathleen', password: 'kathleen'}
]
router.get('/', (req, res) => {
    console.log('Somebody wants to get the users.')
    var token = req.get('X-AUTH-HEADER');
    var user = jwt.decode(token);
    console.dir(user);
    if (user && user.user){
        console.log("User is logged in");
        const overview = users.map(user => {
            var obj = {};
            obj['id'] = user.id;
            obj['name'] = user.name;
            return obj;
        });
        return res.status(200).json(overview);
    }
    console.log('user not logged in');
    return res.status(401).json({msg: 'Please login'});
});
router.post('/login', (req, res) => {
    console.log("In login");
    var user = req.body;
    console.dir(user);
    var dbuser = users.find( u => u.name === user.username);
    if ( dbuser && dbuser.password === user.password){
        res.json({msg: 'Successful authentication',
                token: jwt.sign({user: user.username}, 'SECRET')
            });
    } else{
        res.status(401).json({msg: 'Bad username or password'});
    }
});

module.exports = router;