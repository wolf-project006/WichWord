const express = require('express');
const knex = require('../knex');
const app = express();
const cors = require('cors');

const setupServer = () => {
    app.use(express.json());
    app.use(cors());
    app.get("/", (req, res) => {
        res.status(200).send("I am up and running!");
    })
    return app;
}

module.exports = {setupServer};