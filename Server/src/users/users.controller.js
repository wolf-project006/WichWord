const usersModel = require("./users.model");
const bcrypt = require('bcrypt');



// API endpoint logic goes in this file. 

module.exports = {
    
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

    }
}