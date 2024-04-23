import exp from 'constants'
import express from 'express'
import connectDB from './database/db.js'
import dotenv from 'dotenv'
import userRouter from './routes/user/route.js'
import adminRouter from './routes/user/route.js'

import cors from 'cors'


dotenv.config()
const app = express()
const port = process.env.PORT || 2000
app.use(express.json())
app.use(cors())

connectDB()

app.use('/api/user', userRouter)
app.use('/api/admin',adminRouter)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
    
})