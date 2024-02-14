/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      user_name: "Jimmy",
      nick_name: "Jimmy",
      hashed_password: "",
      salt: "",
      highest_score: 5,
    },
    {
      user_name: "Kelly",
      nick_name: "Kelly",
      hashed_password: "",
      salt: "",
      highest_score: 54,
    },
    {
      user_name: "James",
      nick_name: "James",
      hashed_password: "",
      salt: "",
      highest_score: 15,
    },
    {
      user_name: "Jiaxian",
      nick_name: "Jiaxian",
      hashed_password: "",
      salt: "",
      highest_score: 505,
    },
    {
      user_name: "Kevin",
      nick_name: "Kevin",
      hashed_password: "",
      salt: "",
      highest_score: 404,
    },
  ]);
};
