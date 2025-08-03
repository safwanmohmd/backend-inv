import express from 'express'
import { createItem,invItems } from '../controllers/invController.js'
import { validate } from '../middlewares/validate.js'
import { reqLogs } from '../middlewares/log.js'
const invRouter = express.Router()

invRouter.post('/',reqLogs, validate, createItem)
invRouter.get('/',reqLogs, invItems)

export default invRouter