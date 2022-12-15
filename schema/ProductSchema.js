import mongoose from "mongoose";
const Schema = mongoose.Schema


const ProductSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    imgUrl:{
        type: String,
        required: true,
    },
    
},{
    timestamps:true,
})
export default mongoose.model('flower', ProductSchema)