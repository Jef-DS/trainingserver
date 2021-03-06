var express = require('express');
var router = express.Router();
const courses = [
    {id: 1, name: 'Angular 2', days:2, description:'A short introduction into Angular 2'},
    {id: 2, name: 'NodeJS', days:3, description:'A short introduction into NodeJS'},
    {id: 3, name: 'Node Package Manager', days:1, description:'Using NPM'},
    {id: 4, name: 'Grunt', days:1, description:'Using Grunt'},
];

router.get('/', (req, res) => {
    console.log('Somebody wants to get the courses.')
    const overview = courses.map(course => {
        var obj = {};
        obj['id'] = course.id;
        obj['name'] = course.name;
        return obj;
    });
    return res.status(200).json(overview);
});
router.get('/:id', (req, res) => {
    let courseid =  req.params.id;
    console.log(`Somebody wants to get the course with id ${courseid}`);
    let foundCourse = courses.find(c => c.id == courseid);
    if (foundCourse){
        return res.status(200).json(foundCourse);
    }
    return res.status(404).json({msg: `Course with id ${courseid} not found`});
});

module.exports = router;