const prisma = require('../prisma')

module.exports = async (req, res) => {
    try {
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000')
      const { searchString } = req.query
  
        ? {
            OR: [
              { title: { contains: searchString } }
            ],
          }
        : {}
  
      const feed = await prisma.post.findMany({
        include: { author: true }
      })
  
      return res.status(200).json(feed)
    } catch (error) {
      return res.status(500).json(error)
    }
}