const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const env = require('dotenv');
const mongoose = require('mongoose');

const app = express();

env.config();

const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const teacherRoutes = require('./routes/teacher');
const studentRoutes = require('./routes/student');

let url = 'mongodb://localhost:27017/School_Management';

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));


app.use('/', authRoutes);
app.use('/', adminRoutes);
app.use('/', teacherRoutes);
app.use('/',studentRoutes);

mongoose.connect(url,{useNewUrlParser : true,useUnifiedTopology : true})
.then(() => {
    console.log('Database Connected ...');
})
.catch((error) => {
    console.log(error.message);
})





app.listen(process.env.PORT,() => {
    console.log(`Server is running on the port ${process.env.PORT}`)
});