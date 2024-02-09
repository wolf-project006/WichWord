const express = require('express');
const knex = require('../knex');
const app = express();
const cors = require('cors');

// BCrypt Imports
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Controllers 
const usersController = require("./users/users.controller");

const setupServer = () => {
    app.use(express.json());
    app.use(cors());
    

    app.get("/", (req, res) => {
        res.status(200).send("I am up and running!");
    });


    









    // User Routes
    app.get("/users", usersController.index);
    app.post("/users", usersController.newUser);

    return app;
}



module.exports = {setupServer};