import express from 'express'
import { baseReq } from '../controllers/baseController.js'
import { reqLogs } from '../middlewares/log.js'
const baseRoute = express.Router()

baseRoute.get('/',reqLogs, baseReq)

export default baseRoute