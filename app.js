
const express = require('express')
const app=express()
const api=require('./controller/api')

let port=process.argv[2]||8080

//Template Engine
app.set('view engine', 'ejs')
app.use('/static', express.static('public'))

//API
app.get('/userProfile', api.userData)

app.listen(port,()=>{
    console.log(`Theeee server is running at ${port}`)
})
