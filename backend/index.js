const express = require('express')
const app = express()
const port = 3000
const {todoSchema, idSchema} = require("./types")


app.use(express.json())
app.post('/todo',function(req,res){

    const title = req.body.title
    const description = req.body.description

    const isValidTodo = todoSchema.safeParse({
        title,
        description
    })

    if(!isValidTodo.success){
        res.status(411).json({
            msg : "wrong inputs for todo"
        })
        return
    }
    
})

app.get('/todos',(req,res)=>{

})

app.completed("/completed",(req,res)=>{


    const payloadBody = req.body
    const parsedPayload = idSchema.safeParse(payloadBody)

    if(!parsedPayload.success){
        res.status(422).json({
            msg : "Invalid id format"
        })
    }

})

app.listen(port, ()=>{
    console.log(`The port is listening on http://localhost:${port}`)
})