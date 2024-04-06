const express = require('express')
const mongoose = require('mongoose')
const app = express();
const Product = require('./models/productModels')

// middleware so that app can understand json
app.use(express.json())


app.get('/', (req, res) => {

    res.send("Hello Express")
})

app.get('/blog', (req, res) => {

    res.send("Hello Blog route")
})

app.get('/products', async(req, res)=>{
    try {

        const products = await Product.find({})
        res.status(200).json(products)
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message : error.message})
    }
})

app.post('/products', async (req, res)=>{
    
    try {
        
        const product = await Product.create(req.body)
        res.status(200).json(product)

    } catch (error) {
        console.log(error.message)
        res.status(500).json({message : error.message})
    }

})


mongoose.connect('mongodb://127.0.0.1:27017/expressAPI')
    .then(() => {
        console.log('Connected to MongoDB')
        app.listen(3000, () => console.log("Listening on port 3000..."))
    })
    .catch((error => {
        console.log(error)
    }))