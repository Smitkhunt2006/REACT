// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Create Express App
const app = express();

// Middleware
app.use(express.json()); // for parsing application/json
app.use(cors()); // for handling CORS

// Enable Mongoose debug mode to log all queries
mongoose.set('debug', true);



const uri = 'mongodb+srv://smitkhunt2006:smitkhunt0331@smitkhunt2006.8w5dw.mongodb.net/Hotel';


mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000 ,
  })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('Database connection error:', err));
  

// Routes
app.use('/api/rooms', require('./Routes/roomRoute.js'));

// Start Server

app.get("/",(req,res)=>{
  res.send("hello")
})

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
