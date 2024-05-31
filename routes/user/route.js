import express from 'express'
import moduleRouter from './module.router.js'
import subModuleRouter from './submodule.router.js'

import assessmentRouter from './assessment.router.js'

const userRouter = express.Router()

userRouter.use('/sub-modules', subModuleRouter)
userRouter.use('/modules', moduleRouter)

// userRouter.get('/:module/sub-modules', (req,res)=>{
//     console.log(req.params)
// })

userRouter.use('/assessments', assessmentRouter)

export default userRouter;

