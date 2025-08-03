import express from 'express'
import baseRoute from './routes/baseRoute.js'
import dotenv from 'dotenv'
import invRouter from './routes/invRoute.js'
import healthRoute from './routes/healthRoute.js'
import { handleError } from './middlewares/HandleError.js'
import connectDb from './db.js'

dotenv.config()
const app = express()
const port = process.env.PORT
connectDb()


 app.listen(port, () => {
      console.log(`Server is running on port ${port}`)
 })

 app.use('/',baseRoute)
app.use(express.json())
app.use('/items',invRouter)
app.use('/health',healthRoute)
app.use(handleError)
