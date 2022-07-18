const prisma = require('../prisma')

module.exports = async (req, res) => {
    const { name , email, password} = req.body
    console.log(req.body)
  
    try {
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000')
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password
        },
      })
  
      return res.status(201).json(user)
    } catch (error) {
      return res.status(500).json(error)
    }
  }