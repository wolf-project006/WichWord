const express = require('express');
const knex = require('../knex');
const app = express();
const cors = require('cors');




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

    return app;
}



module.exports = {setupServer};