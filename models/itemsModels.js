const mongoose = require("mongoose")
const {Schema, model}=mongoose

const itemsScema = new Schema({
    name: {
        type: String,
        required: true,
    },
    costPrice:{
        type: Number,
        default:0,
        requiered: true,
    },
    sellPrice:{
        type: Number,
        default:0,
        required: true
    },
    qnty:{
        type: Number,
        default:0,
        required: true
    }
},{
    timestamp: true
})

const Item=model("Item", itemsScema)
module.exports=Item