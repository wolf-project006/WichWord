/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table("users", function (table) {
        table.timestamp("date_created").defaultTo(knex.raw('CURRENT_TIMESTAMP'));
      });
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table("users", function (table) {
        table.dropColumn("date_created");
      });
};
