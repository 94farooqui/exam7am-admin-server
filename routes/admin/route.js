import express from 'express'
import assessmentRouter from './assessment.router.js'
import moduleRouter from './modules.route.js'
import { addNewModule } from '../../controller/modules.controller.js'

const adminRouter = express.Router()

adminRouter.use('/modules', moduleRouter)


export default adminRouter;

