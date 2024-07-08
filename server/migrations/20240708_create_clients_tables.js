/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable("clients", (table) => {
    table.increments("client_id").primary();
    table.string("name", 255).notNullable();
    table.string("email", 255).notNullable();
    table.string("phone", 255).notNullable();
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable("clients");
}
