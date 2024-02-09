const usersModel = require("./users.model");
const bcrypt = require('bcrypt');



// API endpoint logic goes in this file. 

module.exports = {
    async index(req, res) {
        const users = await usersModel.getAllUsers();
        //res.render("" , { users });
        console.log(users);
        res.status(200).send(users);
    },

    async newUser(req, res) {
        const {
            user_name,
            nick_name,
            password,
        } = req.body;


        const saltRounds = 10;

        //let hashedPassword ="hello";

        // const passwordHasher = bcrypt.genSalt(saltRounds, function(err, salt) {
        //     bcrypt.hash(password, salt, function(err, hash) {
        //         hashedPassword = hash;
        //         console.log(hash);
        //         return hashedPassword;
        //     });
        // });

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

        // Implement "does user already exist?" later

        user = await usersModel.addNewUser(payload);
        res.status(200).send(user);
    }
}