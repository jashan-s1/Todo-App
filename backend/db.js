const mongoose = require("mongoose")
const { string, boolean } = require("zod")

mongoose.connect("mongodb+srv://test:test@cluster0.vxlpgir.mongodb.net/Todo-app")

const Todo = new mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean,
})

const todoModel = mongoose.model("Todo-app",Todo)

module.exports = {todoModel}
