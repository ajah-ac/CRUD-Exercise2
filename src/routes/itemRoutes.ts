import express from 'express'
import {create,getAllItems, getItemById, updateItem} from '../controllers/itemController.js'
const router=express.Router()
router.post('/', create)
router.get('/',getAllItems)
router.get('/:id',getItemById)
router.put('/:id',updateItem)

export default router