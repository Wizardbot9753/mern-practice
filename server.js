require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/wrokout')

const app = express();
// const PORT = 8080

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
})

app.use(express.json())

app.use('/api/workouts', workoutRoutes)

mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(process.env.PORT, () => {
        console.log('listen to port: mongoose',process.env.PORT)
    })
}).catch((err) => {
    console.log(err)
})


// app.listen(process.env.PORT, () => {
//     console.log('running on port!!!')
// })