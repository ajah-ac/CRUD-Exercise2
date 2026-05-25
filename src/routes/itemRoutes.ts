import express from 'express'
import {create,getAllItems} from '../controllers/itemController.js'
const router=express.Router()
router.post('/', create)
router.get('/',getAllItems)
export default router