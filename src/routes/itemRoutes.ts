import express from 'express'
import {create,getAllItems, getItemById} from '../controllers/itemController.js'
const router=express.Router()
router.post('/', create)
router.get('/',getAllItems)
router.get('/:id',getItemById)

export default router