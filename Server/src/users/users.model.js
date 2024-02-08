const knex = require("../../knex");




const USERS_TABLE = "users";



module.exports = {
    USERS_TABLE,



    getAllUsers(limit = 5) {
        return knex
        .select("*").from(USERS_TABLE).limit(limit);
    }
}