const mongoose = require("mongoose")
const { string, boolean } = require("zod")

mongoose.connect("")

const Todo = new mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean,
})

const todoModel = mongoose.model("Todo-app",Todo)

module.exports = {todoModel}
