import express from 'express'
import assessmentRouter from './assessment.router.js'

const userRouter = express.Router()


userRouter.use('/assessments', assessmentRouter)

export default userRouter;

