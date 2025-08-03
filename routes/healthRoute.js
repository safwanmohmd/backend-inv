import express from 'express'
import { getHealth } from '../controllers/healthController.js'
import { reqLogs } from '../middlewares/log.js'
const healthRoute = express.Router()

healthRoute.get('/',reqLogs,getHealth)
export default healthRoute