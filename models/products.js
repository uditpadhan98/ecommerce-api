const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    id:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    company:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:[true,"price must be provided"],
    },
    colors:{
        type:Object,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    featured:{
        type:Boolean,
        default:true,
    },
    // rating:{
    //     type:Number,
    //     default:4.9,
    // },
    // createdAt:{
    //     type:Date,
    //     default:Date.now(),
    // },
    // company:{
    //     type:String,
    //     enum:{
    //         values:["apple","samsung","dell","mi"],
    //         message:`{VALUE} is not supported`,
    //     },
    // },
});

module.exports=mongoose.model("Product",productSchema);