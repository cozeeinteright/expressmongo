const prisma = require('../prisma')

module.exports = async (req, res) => {
    
  const createMissing = await prisma.User.create({
    data: {
      name: 'koji',
    },
  })
  console.log(createMissing)
}
  