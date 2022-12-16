const express = require('express')
const {createWorkout} = require('../controllers/workoutControllers')

const router = express.Router()


//get request
router.get('/', (req, res) => {
    res.json({msg:'get all requests'})
})

router.get('/:id', (req, res) => {
    res.json({msg:'get one request'})
})

//post request

router.post('/', createWorkout)

//delete request

router.delete('/:id', (req, res) => {
    res.json({msg:'delete one request'})
})

// update request

router.patch('/:id', (req, res) => {
    res.json({msg:'update request'})
})

module.exports = router