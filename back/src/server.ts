import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors';

const prisma = new PrismaClient()

const app: express.Express = express()

async function main() {
  // Connect the client
  await prisma.$connect()

  const allUsers = await prisma.user.findMany()
  console.log(allUsers)
  // ... you will write your Prisma Client queries here
}
/*
main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
  */

const corsOption = {
    origin: 'http://localhost:8000',
    methods: 'GET,POST',
    optionSuccessStatus: 200
}

app.use(cors(corsOption))
// body-parserに基づいた着信リクエストの解析
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// GetとPostのルーティング
const router: express.Router = express.Router()
router.get('/api/user', async (req:express.Request, res:express.Response) => {
  try{
    const allUsers = await prisma.user.findMany()
    console.log(allUsers)
    res.status(200).json({ allUsers })
  } catch(e) {
    console.log(e)
  }
})

router.post('/api/user', async (req:express.Request, res:express.Response) => {
  try{
    const user = req.body
    const createUser = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
      },
    })
    res.status(200).json({ success: "user created"})
  } catch(e) {
    console.log(e)
    res.status(500).json({ error: "user is not created"})
  }
})

app.use(router)

// 3000番ポートでAPIサーバ起動
app.listen(3000,()=>{ console.log('Example app listening on port 3000!') })