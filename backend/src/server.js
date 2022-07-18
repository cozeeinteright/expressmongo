'use strict'
const feed = require("./controllers/feed")
const publishDraft = require("./controllers/publishDraft")
const createUser = require("./controllers/createUser")

const express = require('express')
const server = express()
const port = 3000

server.use(express.json())

server.get('/', (req, res) => {
    res.json({ value: "Hello!" })
})

server.post('/user',createUser)

server.get('/feed', feed)

server.post('/post/:id',publishDraft)

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })