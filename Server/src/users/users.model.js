const knex = require("../../knex");



// Knex queries go in this file


// "users" is the name of the table in the local DB
const USERS_TABLE = "users";

module.exports = {
    USERS_TABLE,



    getAllUsers(limit = 5) {
        return knex
        .select("*").from(USERS_TABLE).limit(limit);
    },

    // "user" is the payload seen in controller
    addNewUser(user) {
        return knex.insert(user).into(USERS_TABLE);

    },

    // "user" is the payload seen in controller
    loginUser(user) {
        return knex.select('*').where('user_name', user.user_name).andWhere('hashed_password', user.password).then(rows => {
            if (rows.length > 0) {
                console.log("User found");
            } else {
                console.log("User not found");
            }
        }).catch(error => {
            console.error(error);
        })
    }
}