const express = require('express');
const router = express.Router();

const Course =  require('../model/course');

// Course({
//     course: 'Engineering-Diploma',
//     avgSal: 21726,
//     duration: 3,
//     qualifications: ['10th','12th']
// }).save().then(() => console.log('Item saved'))

// router.get('/:cours',(req, res) => {
//     console.log(req.params.course);
//     Course.find({course: req.params.cours})
//         .then(course => res.json(course))
//         .catch(err => console.log(err))
// });

module.exports = router;