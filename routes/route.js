import express from 'express'
import assessmentRouter from './assessment.router.js'

const router = express.Router()


router.use('/assessments', assessmentRouter)

export default router;