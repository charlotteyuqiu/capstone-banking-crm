import "dotenv/config";
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "banking_clients_database",
  },
  migrations: {
    directory: "./migrations",
  },
  seeds: {
    directory: "./seeds",
  },
};
