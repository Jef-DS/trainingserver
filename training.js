var express = require('express');
var router = express.Router();
const courses = [
    {id: 1, name: 'Angular 2', days:2, description:'A short introduction into Angular 2'},
    {id: 2, name: 'NodeJS', days:3, description:'A short introduction into NodeJS'},
    {id: 3, name: 'Node Package Manager', days:1, description:'Using NPM'},
    {id: 4, name: 'Grunt', days:1, description:'Using Grunt'},
];

router.get('/', (req, res) => {
    const overview = courses.map(course => {
        var obj = {};
        obj['id'] = course.id;
        obj['name'] = course.name;
        return obj;
    });
    return res.status(200).json(overview);
});

module.exports = router;