const express = require('express')
const app = express()
const port = 3000

app.use(express.json())




app.post('/todo',function(req,res){
})

app.get('/todos',(req,res)=>{

})

app.completed("/completed",(req,res)=>{

})

app.listen(port, ()=>{
    console.log(`The port is listening on http://localhost:${port}`)
})