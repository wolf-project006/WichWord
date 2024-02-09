const usersModel = require("./users.model");



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
        } = req.body;

        const payload = {
            user_name: user_name,
            nick_name: nick_name,
        };

        let user;

        // Implement "does user already exist?" later

        user = await usersModel.addNewUser(payload);
        res.status(200).send(user);
    }
}