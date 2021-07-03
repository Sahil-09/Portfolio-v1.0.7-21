const http = require ('http')
const app = require('./Backend/app.js');
const mongoose=require('mongoose')
const server= http.createServer(app);


const port=3000

mongoose.connect('mongodb+srv://test9:test9@cluster0.0hdw3.mongodb.net/Private?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    server.listen(port,()=>{
        console.log("Server started at "+port)
    })
}).catch(err=>{
    console.log(err)
})