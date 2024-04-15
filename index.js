import exp from 'constants'
import express from 'express'
import connectDB from './database/db.js'
import dotenv from 'dotenv'
import router from './routes/route.js'
import cors from 'cors'


dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

connectDB()

app.use('/api', router)
app.listen(2000, () => {
    console.log("Server is running on port 2000")
})