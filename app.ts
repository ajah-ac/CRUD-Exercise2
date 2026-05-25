import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import route from './src/routes/itemRoutes.js';
dotenv.config();

const app = express();
app.use(express.json());
app.use('/',route)
const MONGO_URI = process.env.MONGO_URI || '';
mongoose.connect(MONGO_URI).then(()=>{
    console.log('Connected to Mongodb');

})
.catch((err)=>{
    console.log(`something went wrong ${err}`)
});

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log('Server is listening on port '+PORT);
})