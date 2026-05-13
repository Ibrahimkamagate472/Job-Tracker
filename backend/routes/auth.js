import bcrypt from 'bcrypt'
import express from 'express'
import { PrismaClient } from '../generated/prisma/client.ts'
import { PrismaPg } from '@prisma/adapter-pg'
import jwt from 'jsonwebtoken'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })

const router = express.Router()

router.post('/register', async (req, res) => {
  const { email, password } = req.body

  const existingUser = await prisma.user.findUnique({
    where: { email },
  })

  if (existingUser) {
    return res.status(400).json({ error: 'Email is already registered' })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  })

  res.json(user)
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body

  const user = await prisma.user.findUnique({
    where: { email },
  })

  if (!user) {
    return res.status(401).json({ error: 'User is not found' })
  }

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) {
    return res.status(401).json({ error: 'Invlaid password' })
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  })
  res.json({ token })
})

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    return res.status(401).json({ error: 'Unauthenticated' })
  }

  const token = authHeader.split(' ')[1]
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' })
  }
}

router.get('/me', authMiddleware, async (req, res) => {
  const userId = req.user.userId
  const user = await prisma.user.findUnique({
    where: { id: userId },
  })
  res.json(user)
})
export default router
