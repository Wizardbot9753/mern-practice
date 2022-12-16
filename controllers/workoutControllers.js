const Workout = require('../models/workoutModels')


const createWorkout = async (req, res, next) => {
    const {title, reps, load} = req.body
    console.log(req.body)
    try {
        const createWorkout = await Workout.create({title, reps, load})
        res.status(200).json(createWorkout)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = {createWorkout}