import express from 'express'
import { PrismaClient } from '@prisma/client'
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

// CORSの許可
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localohst:8000")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

// body-parserに基づいた着信リクエストの解析
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// GetとPostのルーティング
const router: express.Router = express.Router()
router.get('/api/user', async (req:express.Request, res:express.Response) => {
  try{
    const allUsers = await prisma.user.findMany()
    console.log(allUsers)
    res.send(req.query)
  } catch(e) {
    console.log(e)
  }
})

router.post('/api/user', async (req:express.Request, res:express.Response) => {
  try{
    const createUser = await prisma.user.create({
      data: {
        name: "test",
        email: "koji@test.com"
      },
    })
    const allUsers = await prisma.user.findMany()
    res.status(200).json({ allUsers })
  } catch(e) {
    console.log(e)
  }
})

app.use(router)

// 3000番ポートでAPIサーバ起動
app.listen(3000,()=>{ console.log('Example app listening on port 3000!') })