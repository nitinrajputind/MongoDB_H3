const express = require('express')
const connectDB = require('./db/config')
const route = require('./routes/route')
require("dotenv").config()

const port =  process.env.PORT || 8080
const app = express()

// body Parser 
app.use(express.json())

// rest api 
app.use('/api', route)




const startConnection = async ()=>{
    try{
        await connectDB(process.env.DB_URI)
        app.listen(port, () => {
            console.log(`Server is Runing on http://localhost:${port}`)
        })
        
    }
    catch(err){
        console.log(`Database is showing Error`)
    }
}

startConnection()














