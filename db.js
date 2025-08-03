import mongoose from 'mongoose'
import dotenv from 'dotenv'
import express from 'express'

const app = express()
dotenv.config()
const port = process.env.PORT

const connectDb = async () => {
  try {
     await mongoose.connect(process.env.mongoUri)
    console.log('Connected to MongoDB')

  } catch (err) {
    console.error('MongoDB connection failed:', err.message)
   
  }
}

export default connectDb