import mongoose from "mongoose";

const invScheema = mongoose.Schema({
    name:{type:String, required:true},
    quantity:{type:Number, required:true},
    price: {type:Number, required:true}
})

const invModal = mongoose.model('Items', invScheema)

export default invModal