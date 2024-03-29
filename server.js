const express=require('express');
const colors=require('colors');
const morgan=require('morgan');
const dotenv=require('dotenv');
dotenv.config();

//rest object
const app=express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));

//routers
app.get('/',(req,res)=>{
    res.status(200).send({
        message: "server running",
    });
});

//to read this message we make a file in route (.env)
//listen

const port=process.env.PORT || 8080;
app.listen(port,()=>{
 console.log(`server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`);
})

let a= "Ajay"
