const express = require('express');
const knex = require('../knex');
const app = express();
const cors = require('cors');

// Security / BCrypt 
const bcrypt = require('bcrypt');
const saltRounds = 10;
const session = require('express-session');

// Controllers
const usersController = require('./users.controller.js');

const setupServer = () => {
    app.use(express.json());
    app.use(cors());

    // Express Session
    app.use(session({
        secret: 'your_secret_key', // A secret key for signing the session ID cookie.
        resave: false, // Do not force the session to be saved back to the session store.
        saveUninitialized: false, // Do not force a session that is "uninitialized" to be saved to the store.
        cookie: { secure: true, maxAge: 60000 } // Cookie settings, `secure: true` should be used for HTTPS.
      }));

    const users = [
        {
            id: 1,
            user_name: '',
            passwordHash: ''
        },
    ];

    // app.get("/", (req, res) => {
    //     res.status(200).send("I am up and running!");
    // });

    // User Routes
    app.get("/", usersController.homePage);
    app.get("/highest_users", usersController.getHighestUsers);
    app.post("/signup", usersController.signup);
    // app.get("/users", usersController.index);
    // app.post("/users", usersController.newUser);
    app.post("/login", usersController.login);
    app.post("/patchHighestScore", usersController.patchHighestScore);

    return app;
}



module.exports = {setupServer};