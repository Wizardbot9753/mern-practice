const express = require('express')
const Workout = require('../models/workoutModels')

const router = express.Router()


//get request
router.get('/', (req, res) => {
    res.json({msg:'get all requests'})
})

router.get('/:id', (req, res) => {
    res.json({msg:'get one request'})
})

//post request

router.post('/', async(req, res) => {
    const {title, reps, load} = req.body
    console.log(req.body)
    try {
        const createWorkout = await Workout.create({title, reps, load})
        res.status(200).json(createWorkout)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    // res.json({msg:'post request'})
})

//delete request

router.delete('/:id', (req, res) => {
    res.json({msg:'delete one request'})
})

// update request

router.patch('/:id', (req, res) => {
    res.json({msg:'update request'})
})

module.exports = router