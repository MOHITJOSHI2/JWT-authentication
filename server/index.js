// libraries
const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
require("dotenv").config({ path: "/home/spyner/Documents/learing web/server/.env", quiet: true })
require('./database')

// File locations
const entry = require("./routes/entry")
const content = require("./routes/content")

// Object
const app = express()

// Server modifications
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(cookieParser())


// Routes
app.use('/entry', entry)
app.use('/content', content)

app.listen(3000, () => {
    console.log("Listening on port 3000")
})
