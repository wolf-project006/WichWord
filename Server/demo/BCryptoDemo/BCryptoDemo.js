const express = require('express');
// const knex = require('../knex');
const app = express();
const cors = require('cors');

const bcrypt = require('bcrypt');
const saltRounds = 10;


app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
    res.status(200).send("I am up!");
});

const PlainPassword = "987654321gujiaxian";
let hashedPassword = "";

app.get("/password", async(req, res) => {
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(PlainPassword, salt, function(err, hash) {
            console.log(hash);
            res.status(200).send(hash);
            hashedPassword = hash;
        });
    });
})

app.get("/password/compare", async(req, res) => {
    bcrypt.compare(PlainPassword, hashedPassword, function(err, result) {
        console.log(hashedPassword)
        res.status(200).send(result);
    });
})



app.listen(8000, () => {
    console.log("Server listening on Port: ", 8000)
})




