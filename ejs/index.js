const express = require("express");
const app = express();
const path = require("path")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, '/public/')))

const data = {
    products : [
    {
        id: 1,
        name: "Nike Sportswear",
        price: 1400,
        pictureUrl: "https://cdn2.iconfinder.com/data/icons/thesquid-ink-40-free-flat-icon-pack/64/nike-dunk-256.png",
    }
]}

app.get("/", (req, res) => {
    res.render("index", null)
})

app.post("/productos", (req, res) => {
    data.products.push({...req.body})
    res.render("index", null)
})

app.get("/productos", (req, res) => {
    res.render("productos", data)
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})