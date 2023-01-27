const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const connectDB = require('./config/config');

require('colors');
const morgan = require('morgan');

//config dotenv
dotenv.config()


//connection mongodb
connectDB();


const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors())



//route
app.use("/api/pizzas", require("./routes/pizzaRoutes"));
app.use("/api/users", require('./routes/userRoutes'));
app.use("/api/orders", require('./routes/orderRoutes'))
app.get("/",(req,res) =>{
    res.send('<h1>Pizza Delivery App</h1>');
})


const port =process.env.PORT || 8080;
app.listen(port, ()=>{
    console.log(`App listening on port ${port}!`)
});