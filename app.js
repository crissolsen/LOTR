const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();
let app = express();
console.log(process.env.API_KEY);


app.set("view engine", "pug");


app.get('/', (req, res) => {
    let headers = {
      Authorization: process.env.API_KEY,
    };

    fetch("https://the-one-api.herokuapp.com/v1/quote", {method: 'GET', headers: headers})
      .then((response) => response.json())
      .then((data) => res.render("index", {data: data}))
      .catch((err) => console.log(err))
    console.log("Getting data first...")
})

app.listen(process.env.PORT, () => console.log("Listening at 3000"));