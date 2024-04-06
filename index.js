const express = require('express')
const mongoose = require('mongoose')
const app = express();


// middleware so that app can understand json
app.use(express.json())


app.get('/', (req, res) => {

    res.send("Hello Express")
})

app.get('/blog', (req, res) => {

    res.send("Hello Blog route")
})


app.post('/product', (req, res)=>{
    console.log(req.body)
    res.send(req.body)
})


mongoose.connect('mongodb://127.0.0.1:27017/expressAPI')
    .then(() => {
        console.log('Connected to MongoDB')
        app.listen(3000, () => console.log("Listening on port 3000..."))
    })
    .catch((error => {
        console.log(error)
    }))