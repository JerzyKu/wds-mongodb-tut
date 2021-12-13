const monogoose = require("mongoose")
const User = require("./User")


monogoose.connect("mongodb://localhost/testdb")

run()
async function run() {
    const user = await User.create({name: "Zosia", age: 2})
    // const user = new User({ name: "Jerzay", age: 26 })
    // await user.save()
    console.log(user);
}