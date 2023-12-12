const mongoose = require('mongoose')

//create new schema for income
const IncomeSchema = new mongoose.Schema({
    title:
    {
            type: String,
            required: true,
            trim:true,
            maxLength:50
        },
    amount:{
        type: Number,
        required:true,
        maxLength:20,
        trim:true
    } , 
    type:{
        type: String,
       default:"expense"
    },
    date:{
        type:Date,
        require:true,
        maxLength:20,
        trim:true
    },
    category:{
        type:String,
        require:true,
        trim:true
    },
    description:{
        type: String,
        required:true,
        maxLength:20,
        trim:true
    } , 
},{timestamps:true})

module.exports =mongoose.model('Income',IncomeSchema)