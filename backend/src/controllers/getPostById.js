const prisma = require('../prisma')

module.exports = async (req, res) => {
    const { id } = req.params
  
    try {
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000')
      const post = await prisma.post.findUnique({
        where: { id },
        include: {
          author: true
        },
      })
  
      if (!post) return res.status(404).json({ message: 'Post not found' })
  
      return res.status(200).json(post)
    } catch (error) {
      return res.status(500).json(error)
    }
  }