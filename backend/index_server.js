const express = require("express");
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');

//dot config
dotenv.config();

//rest object
const app = express();


//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//routes
//1 test routes
app.use('/api/v1/index',require("./routes/indexRoutes"));

//port
const PORT = process.env.PORT || 8080;
const DEV_MODE = process.env.DEV_mode || "development";

//listen
app.listen(PORT,()=>{
    console.log(`Node server is running in ${DEV_MODE} Mode on port : http://localhost:${PORT}/api/v1/index`.bgBlue.white);
});