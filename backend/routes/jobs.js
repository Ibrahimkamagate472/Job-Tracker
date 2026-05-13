import express from 'express'
import 'dotenv/config'
import { PrismaClient } from '../generated/prisma/client.ts'
import { PrismaPg } from '@prisma/adapter-pg'
import { authMiddleware } from './auth.js'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })

const router = express.Router()

router.use(authMiddleware)

router.get('/', async (req, res) => {
  const jobs = await prisma.job.findMany({
    where: {
      userId: req.user.userId,
    },
  })

  res.json(jobs)
})

router.post('/', async (req, res) => {
  const { name, position, date, response, username, password, listing } =
    req.body

  if (typeof name !== 'string' || name.length === 0 || name.trim() === '') {
    return res.status(400).json({
      error: 'Company name is required',
    })
  }

  const job = await prisma.job.create({
    data: {
      name,
      position,
      date,
      response,
      username,
      password,
      listing,
      user: {
        connect: {
          id: req.user.userId,
        },
      },
    },
  })

  res.status(201).json(job)
})

router.put('/:id', async (req, res) => {
  const job = await prisma.job.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  })

  if (!job || job.userId !== req.user.userId) {
    res.status(403).json({ error: 'Not authorized' })
  }
  const { name, position, date, response, username, password, listing } =
    req.body

  if (typeof name !== 'string' || name.length === 0 || name.trim() === '') {
    return res.status(400).json({
      error: 'Company name is required',
    })
  }

  const id = parseInt(req.params.id)
  try {
    const job = await prisma.job.update({
      where: { id },
      data: {
        name,
        position,
        date,
        response,
        username,
        password,
        listing,
      },
    })

    res.json(job)
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({
        error: 'Job is not found',
      })
    }

    return res.status(500).json({
      error: 'Failed to update job',
    })
  }
})

router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id)

  const job = await prisma.job.findUnique({
    where: { id },
  })
  if (!job || job.userId !== req.user.userId) {
    return res.status(403).json({ error: 'Not authorized' })
  }
  try {
    await prisma.job.delete({
      where: { id },
    })

    res.status(204).json({
      message: 'Job listing deleted',
    })
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({
        error: 'Job is not found',
      })
    }

    return res.status(500).json({
      error: 'Failed to delete job',
    })
  }
})

export default router
