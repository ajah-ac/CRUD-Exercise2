import mongoose from 'mongoose'
const itemSchema= new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
     name:{
        type:String,
        required:true
     },  description:{
        type:String,
        required:true
     },  price:{
        type:Number,
        required:true
     }
     
})
export default mongoose.model('Items',itemSchema)