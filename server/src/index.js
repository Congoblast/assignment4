const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const db = require("./db")
const router = require("./routes")

const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on("error", console.error.bind(console, "connection:"))

//app.get('/', (req, res) => {
  //  res.send('Hello World!')
//})
app.use("/api", router)


app.listen(apiPort, () => console.log(`running on port ${apiPort}`))

