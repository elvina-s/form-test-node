const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./Routes");

app.use(bodyParser.urlencoded({extended: true}))

mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://rammnuschka:RC-grqk9J-skkxo-Dus@cluster0.j4kittn.mongodb.net/?retryWrites=true&w=majority")

app.use(routes);

app.listen(10010, () => {
    console.log(`I'm listening on PORT here`)
})