const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser');


const port = process.env.PORT || 5000;

// getting-started.js

app.use(express.json());
app.use(cors());
app.use(cookieParser())

async function main() {
  await mongoose.connect('mongodb+srv://adarshjamwalj19:food123@veggify-react-app.oxitgkx.mongodb.net/veggify-react-app?retryWrites=true&w=majority&appName=veggify-react-app');

}

main().then(()=> console.log("Mongodb Connected Successfully")).catch(err => console.log(err));




// routes 
const ItemRoutes = require("./src/routes/ItemRoute");
const CategoryRoutes = require('./src/routes/categoryRoute');
const userRoutes = require('./src/routes/userRoute')
const authRoutes = require('./src/routes/authRoute')

app.use('/api', ItemRoutes)
app.use('/api', CategoryRoutes)
app.use('/api/user', userRoutes);  
app.use('/api/auth', authRoutes)

app.get('/', (req, res) => {
  res.send('Veggify recify app server is running!')
})


app.listen(port , () => {
  console.log( `Example app  listening  on  port  ${port}`)
})



app.use((err, req, res, next)=>{
  const statusCode = err.statusCode || 500; 
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  }); 
})





















