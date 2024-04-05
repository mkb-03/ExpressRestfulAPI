const express = require('express')

const app = express();

app.get('/' , (req, res)=>{

    res.send("Hello Express")
})

app.get('/blog' , (req, res)=>{

    res.send("Hello Blog route")
})




app.listen(3000 , ()=> console.log("Listening on port 3000..."))