const express = require('express');
// const knex = require('../knex');
const app = express();
const cors = require('cors');

const bcrypt = require('bcrypt'); // need to install bcrypt: npm install bcrypt
const saltRounds = 10;  // this variable is used to make the salt. Bcrypt handles the salt things for us.

// We only need to store hashed password in db. No need to store salt any more.

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
    res.status(200).send("I am up!");
});

const PlainPassword = "987654321gujiaxian";
let hashedPassword1 = "$2b$10$sfD0j8LUCLZpE0AX8kvt.OamfiXsnDPlUAExeJ4oweGg4O/5FfTzq";
let hashedPassword2 = "$2b$10$rRwN8zxVGBu/le69s1y7CO6ZMbqnO1gRVtThbIAt2PFD3Pq4blvdu";

app.get("/password", async(req, res) => {
    //below are the code to make hashed password.
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(PlainPassword, salt, function(err, hash) {
            console.log(hash);
            res.status(200).send(hash);
            hashedPassword = hash;
            
        });
    });
})


app.get("/password/compare", async(req, res) => {
    // below are function used to check if the password is correct when user login.
    // compare the PlainPassword, which is the password user input, with hashedPassword.
    bcrypt.compare(PlainPassword, hashedPassword1, function(err, result) {
        console.log(hashedPassword2)
        res.status(200).send(result);
    });
})



app.listen(8000, () => {
    console.log("Server listening on Port: ", 8000)
})




