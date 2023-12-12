//1
const mongoose = require('mongoose')
//2
const EmployeeSchema = new mongoose.Schema({

    name:  String, 
    email: String, 
    password:String,
   

})


//3
const EmployeeModel = mongoose.model("employees",EmployeeSchema)
//4
module.exports= EmployeeModel //then it import into index.js in backend


