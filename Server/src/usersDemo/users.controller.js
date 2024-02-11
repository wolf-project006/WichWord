// const usersModel = require("./users.model");
const bcrypt = require('bcrypt');
const knex = require('../../knex');
const TABLE_NAME = 'users';
const saltRounds = 10;
const session = require('express-session');

// app.use(session({
//     secret: 'your_secret_key', // A secret key for signing the session ID cookie.
//     resave: false, // Do not force the session to be saved back to the session store.
//     saveUninitialized: false, // Do not force a session that is "uninitialized" to be saved to the store.
//     cookie: { secure: true, maxAge: 60000 } // Cookie settings, `secure: true` should be used for HTTPS.
//   }));

// API endpoint logic goes in this file. 

module.exports = {
    // Displays the home page
    async homePage(req, res) {
        res.status(200).send("connect success!!!woooooooo!");
    },

    async getHighestUsers(req, res) {
        const highestUsers = await knex.select({
            id: 'id',
            userName: 'user_name',
            highestScore: 'highest_score'
        }).from(TABLE_NAME);
        highestUsers.sort((a, b) => b.highestScore - a.highestScore);
        res.status(200).send(highestUsers);
    },

    async signup(req, res) {
        try {
            userName = req.body.name;
            nickName = req.body.nickName;
            const salt = await bcrypt.genSalt(saltRounds);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
            console.log(hashedPassword);
            await knex(TABLE_NAME)
            .insert({
                user_name: userName,
                nick_name: nickName,
                hashed_password: hashedPassword
            });
            res.status(200).send('signup success!')
        } catch(err) {
            console.error(err.message);
        }
    },

    // Displays list of users
    async index(req, res) {
        const users = await usersModel.getAllUsers();
        //res.render("" , { users });
        console.log(users);
        res.status(200).send(users);
    },

    // Adds a new user
    async newUser(req, res) {
        const {
            user_name,
            nick_name,
            password,
        } = req.body;


        const saltRounds = 10;


        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);

        console.log(hashedPassword);
        const payload = {
            user_name: user_name,
            nick_name: nick_name,
            hashed_password: hashedPassword,
            salt: salt
        };

        let user;

        // Does user already exist?
        try {
            user = await usersModel.addNewUser(payload);
            res.status(200).send(user);
        } catch (error) {
            console.log(error);
            // Display error to user ("... username taken / nickname taken")
        }
    },

    // Authenticates User

    async login(req, res) {
        const {
            user_name,
            password,
        } = req.body;


        const saltRounds = 10;

        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);

        const payload = {
            user_name: user_name,
            hashed_password: hashedPassword,
        };

        let user;

        
        try {
            user = await usersModel.loginUser(payload);
            res.status(200).send(user);
        } catch (error) {
            console.log(error);
            
        }

    },
}


