const mongoose = require("mongoose")
require("dotenv").config({ path: "/home/spyner/Documents/learing web/server/.env", quiet: true })

mongoose.connect(process.env.DATABASE)
    .then(() => console.log("Database connected successfully"))
    .catch((err) => console.log("Error at database: ", err))