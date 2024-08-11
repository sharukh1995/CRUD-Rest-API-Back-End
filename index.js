const express = require("express");
const mongoose = require('mongoose');
const Product = require("./models/product.models.js");
const productRoute = require("./routes/product.route.js");
const app = express();


// Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes

app.use('/api/products', productRoute);


app.get('/', (req, res) => {
    res.send('Hello from Node API')
});

mongoose.connect("mongodb+srv://sharukhahmed207:oDKVFBDaP8hGADjr@backenddb.rbbql.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("Connected to database!");
        app.listen(3000, () => {
            console.log('Server is up and running on port 3000')
        });
    })
    .catch(() => {
        console.log("Connection Failed!")
    })