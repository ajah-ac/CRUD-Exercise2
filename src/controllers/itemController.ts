import Item from "../model/itemModel.js";
import type { Request,Response } from "express";
export  const create=async(req:Request,res:Response)=>{
try{
    const newItem=new Item(req.body)
    const {id}=newItem
    const exists=await Item.findOne({id})
if(exists){
    res.status(400).send('Item already exists')
}
 const savedData=await newItem.save()
 res.status(200).json(savedData)
}
catch(error: unknown){
  if (error instanceof Error) {
    res.status(500).json({errorMessage: error.message})
  } else {
    res.status(500).json({errorMessage: String(error)})
  }
} }