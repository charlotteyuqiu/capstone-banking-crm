import initKnex from "knex";

import configuration from "../knexfile.js";

const knex = initKnex(configuration);
import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const portfolios = await knex("portfolio").select("*");
    res.json(portfolios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
