require("dotenv").config()
const express=require("express")
const items = require ("./items")
const morgan = require("morgan")
const db=require("./utils/db")

//importing of routes
const itemsRoute=require("./routes/itemsRoute")

const app = express()
//connection to database
db()

//middlewares
app.use(express.json())
app.use(morgan("dev"))

//routes
app.use("/api/items", itemsRoute)

//home route
app.get("/api/items", (req, res) => {
    res.json({items})
})

const PORT= process.env.PORT || 5000
app.listen(PORT, ()=>console.log("server running on port 5000"))
