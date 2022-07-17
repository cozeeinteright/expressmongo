'use strict'

const express = require('express')
const server = express()
const port = 3000
const mongoose = require('mongoose')

server.get('/',(req, res) => {
    res.send('Hello world')
})

server.get('/api',(req, res) => {
    mongoose.connect(process.env.CONNECTIONSTRING)
    const Cat = mongoose.model('Cat', { name: String})
    
    const kitty = new Cat({name: 'Zildjian' })
    kitty.save().then(() => console.log('meow'))
    res.json({ name: "koji", description: "I like mongo" })
})

server.listen(port, () => {
    console.log(`Example server listening on port ${port}`)
})