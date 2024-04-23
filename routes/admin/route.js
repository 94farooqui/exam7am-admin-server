import express from 'express'
import assessmentRouter from './assessment.router.js'

const adminRouter = express.Router()


adminRouter.use('/assessments', assessmentRouter)

export default adminRouter;

