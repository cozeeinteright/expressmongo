const prisma = require('../prisma')

module.exports = async (req, res) => {
    try {
      const { name , email, password} = req.body
      await prisma.$connect()
      const user = await prisma.user.create(
        {
          name: 'test',
          email: 'test',
          password: 'test'
        },
      )
      return res.status(201).json(user)
    } catch (error) {
      console.log('error createUser')
      return res.status(500).json(error)
    } finally {
      async () => {
        await prisma.$disconnect()
      }
    }
  }