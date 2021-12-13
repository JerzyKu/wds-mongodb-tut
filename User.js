const monogoose = require("mongoose")

const userSchema = new monogoose.Schema({
    name: String,
    age: Number
})

module.exports = monogoose.model("User", userSchema) 