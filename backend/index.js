



//import express
//1
const express = require("express")
//2
const mongoose =require('mongoose')
//3
const cors = require("cors")
//9
const EmployeeModel = require('./Server/Employee')


const bcrypt =require('bcryptjs')
const jwt= require('jsonwebtoken')
const cookieParser= require('cookie-parser')
var nodemailer = require('nodemailer');
//8 
require('dotenv').config()

//9
const PORT = process.env.PORT;

//10 
// const {db} =require('./Server/db/db')

const {readdirSync} = require('fs')


//4
const app = express()
//middlewares
app.use(express.json())//here the data passing to the frontend to backend through json format
//5 accessing our server don't have any problem
app.use(cors(
    {
    origin:["http://localhost:3000"],
    methods:["GET","POST","DELETE"],
    credentials:true

}

))
app.use(cookieParser())

//10
//checking through in postman
// app.get('/',(req,res)=>{
//     res.send("hello from server")
// })


//6
//create the connection with mongo db
mongoose.connect("mongodb://localhost:27017/employee");

const varifyUser =(req,res,next)=>{
    const token = req.cookie.token;
    if(!token){
        return res.json("Token is missing")
    }else {
        jwt.verify(token,"jwt-secret-key",(err)=>{
            if (err) {
                return res.json("Error with token")
            }
        })
    }
}
app.get('/homepage',varifyUser,(req,res)=>{
    res.json("Success")
})
//7
app.post('/register', (req,res)=>{
    const {name,email,password} = req.body;
    bcrypt.hash(password, 10)// bycrpt password encryption
    .then(hash=>{
        //first insert into the database create model in the backend
        EmployeeModel.create({name,email,password:hash})
        .then(employees => res.json("Success"))
        .catch(err => res.json(err))
        }).catch(err=>res.json(err))
    })


//8 for login
app.post('/login', (req,res)=>{
    const {email, password}= req.body;
    EmployeeModel.findOne({email:email})
    .then(employees =>{
        if(employees){
            bcrypt.compare(password, employees.password,(err,response)=>{
                if(response){
                    const token = jwt.sign({email:employees.email},
                         "jwt-secret-key" ,{expiresIn:'1d'});
                       res.cookie('token',token)
                       return res.json("Success" )  
                    }else{
                        return res.json("The password is incorrect")
                    }
            });
        }else{
            return  res.json("No record is exist")
        }

           
    })
    .catch(err => {
        // Handle any error that occurred during the process
        console.error(err);
        return res.status(500).json("An error occurred");
    });

})

   
//reset
// app.post('/forgot-password', (req, res) => {
//     const {email} = req.body;
//     EmployeeModel.findOne({email: email})
//     .then(user => {
//         if(!user) {
//             return res.send({Status: "User not existed"})
//         } 
//         const token = jwt.sign({id: user._id}, "jwt_secret_key", {expiresIn: "1d"})
//         let transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//               type: 'OAuth2',
//               user: process.env.MAIL_USERNAME,
//               pass: process.env.MAIL_PASSWORD,
//               clientId: process.env.OAUTH_CLIENTID,
//               clientSecret: process.env.OAUTH_CLIENT_SECRET,
//               refreshToken: process.env.OAUTH_REFRESH_TOKEN
//             }
//           });
//           var mailOptions = {
//             from: 'youremail@gmail.com',
//             to: 'useremail@gmail.com',
//             subject: 'Reset Password Link',
//             text: `http://localhost:5173/reset_password/${user._id}/${token}`
//           };
          
//           transporter.sendMail(mailOptions, function(error, info){
//             if (error) {
//               console.log(error);
//             } else {
//               return res.send({Status: "Success"})
//             }
//           });
//     })
// })



// app.post('/reset-password/:id/:token', (req, res) => {
//     const {id, token} = req.params
//     const {password} = req.body

//     jwt.verify(token, "jwt_secret_key", (err, decoded) => {
//         if(err) {
//             return res.json({Status: "Error with token"})
//         } else {
//             bcrypt.hash(password, 10)
//             .then(hash => {
//                 EmployeeModel.findByIdAndUpdate({_id: id}, {password: hash})
//                 .then(u => res.send({Status: "Success"}))
//                 .catch(err => res.send({Status: err}))
//             })
//             .catch(err => res.send({Status: err}))
//         }
//     })
// })

//routes
readdirSync('./routes').map((route)=> app.use('/api/v1',require('./routes/' + route)))


//7
//after listen he server
const server =()=>{
    // db()
    app.listen(PORT, ()=>{
        console.log('You are listening to port:',PORT);
    })
   
}//goto frontend set link handleSubmit fn http://localhost:3001/register then back to set the data into database step 8

server()