// Import the express module
const express = require('express');
const fs = require("fs")
const axios = require("axios")
const multer = require("multer")
const cors = require("cors"); 
const { detectPestFromImage } = require("./detect") // import the function
const authRouter = require("./routes/authRouter")
const pestRouter = require("./routes/pestRouter")
const {connectToMongoDB} = require("./connection")
// const { getResponse } = require("./gpt")
// const { detectObjects } = require("./detect")

// Create an express app
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const path = require('path');
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Define a port
const PORT = 3000;

connectToMongoDB("mongodb://127.0.0.1:27017/pest-users").then(()=>{
  console.log("Connected to mongo successfully")
})

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

app.use("/auth" , authRouter)
app.use("/pest" , pestRouter)

app.get('/', async (req, res) => {
  res.end("Hello the server is live")
});

// GET route for detection and suggestions
app.get('/detect', (req, res) => {



});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
