'use strict'
const feed = require("./controllers/feed")
const publishDraft = require("./controllers/publishDraft")
const createUser = require("./controllers/createUser")
const prisma = require('./prisma')

const express = require('express')
const cors = require('cors')
const server = express()
const port = 3000

/*
async function main() {
    console.log('do main')
    await prisma.$connect()
}

main()
.catch((e) => {
    throw e
})
.finally(async() => {
    await prisma.$disconnect()
})
*/


const corsOption = {
    origin: 'http://localhost:8000',
    methods: 'GET,POST',
    optionSuccessStatus: 200
}

server.use(express.json())
server.use(cors(corsOption))

server.get('/', (req, res) => {
    res.json({ value: "Hello!" })
})

server.post('/user',createUser)

server.get('/feed', feed)

server.post('/post/:id',publishDraft)

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })