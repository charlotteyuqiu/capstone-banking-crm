/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable("portfolio", (table) => {
    table.increments("portfolio_id").primary();
    table.string("category", 255).notNullable();
    table.decimal("amount", 8, 2).notNullable();
    table.date("due_date").notNullable();
    table
      .integer("client_id")
      .unsigned()
      .notNullable()
      .references("client_id")
      .inTable("clients")
      .onDelete("CASCADE")
      .index();
    table.text("description").notNullable();
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable("portfolio");
}
