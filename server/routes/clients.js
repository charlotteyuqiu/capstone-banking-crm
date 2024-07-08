import initKnex from "knex";

import configuration from "../knexfile.js";

const knex = initKnex(configuration);
import express from "express";

const router = express.Router();

// Get list of all clients
router.get("/", async (req, res) => {
  try {
    const clients = await knex("clients").select("*");
    res.json(clients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route to get a client by client_id
router.get("/:client_id", async (req, res) => {
  const { client_id } = req.params;
  try {
    const client = await knex("clients").where({ client_id }).first();
    if (!client) {
      return res.status(404).json({ error: "Client not found" });
    }
    res.json(client);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
