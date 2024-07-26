const express=require('express')
const connectDB=require('./config/db')
const errorHandler=require('./middleware/errorHandler')
const dotenv=require('dotenv').config()

connectDB();
const app1=express();
const port=process.env.PORT||5000;

app1.use(express.json());
app1.use('/api/contacts',require('./routes/contactRoutes'))
app1.use('/api/users',require('./routes/userRoutes'))
app1.use(errorHandler)

app1.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})