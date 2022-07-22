import express from 'express'
import { PrismaClient } from '@prisma/client'

const app: express.Express = express()
const prisma = new PrismaClient()

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
router.get('/api/getTest', (req:express.Request, res:express.Response) => {
  main()
  res.send(req.query)
})
router.post('/api/postTest', (req:express.Request, res:express.Response) => {
  res.send(req.body)
})
app.use(router)

// 3000番ポートでAPIサーバ起動
app.listen(3000,()=>{ console.log('Example app listening on port 3000!') })