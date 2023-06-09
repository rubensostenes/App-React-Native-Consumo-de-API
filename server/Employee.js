const mongoose = require('mongoose')

const EmpoyeeSchema = new mongoose.Schema({
    name:String,
    pedido:String,
    phone:String,
    picture:String,
})


mongoose.model("employee",EmpoyeeSchema)