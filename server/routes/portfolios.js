import initKnex from "knex";

import configuration from "../knexfile.js";

const knex = initKnex(configuration);
import express from "express";
const router = express.Router();

// Get list of all portfolios
router.get("/", async (req, res) => {
  try {
    const portfolios = await knex("portfolio").select("*");
    res.json(portfolios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a portfolio by portfolio_id
router.get("/:portfolio_id", async (req, res) => {
  const { portfolio_id } = req.params;
  try {
    const portfolio = await knex("portfolio").where({ portfolio_id }).first();
    if (!portfolio) {
      return res.status(404).json({ error: "Portfolio not found" });
    }
    res.json(portfolio);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route to add a new portfolio
router.post("/", async (req, res) => {
  try {
    const { category, amount, due_date, client_id, description } = req.body;

    if (!category || !amount || !due_date || !client_id || !description) {
      return res.status(400).json({ message: "All fields are required!!!" });
    }

    const newPortfolioDetails = {
      category,
      amount,
      due_date,
      client_id,
      description,
    };

    const [newPortfolioId] = await knex("portfolio").insert(
      newPortfolioDetails
    );
    const newPortfolio = await knex("portfolio")
      .where({ portfolio_id: newPortfolioId })
      .first();
    return res.status(201).json(newPortfolio);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
});

// Route to edit/update a portfolio
router.put("/:portfolio_id", async (req, res) => {
  const { portfolio_id } = req.params;
  try {
    const { category, amount, due_date, client_id, description } = req.body;

    console.log("Request body:", req.body); // Log the request body

    if (!category || !amount || !due_date || !client_id || !description) {
      return res.status(400).json({ message: "All fields are required!!!" });
    }

    // Ensure due_date is properly formatted
    const formattedDueDate = new Date(due_date).toISOString().split("T")[0];

    const updatedPortfolioDetails = {
      category,
      amount,
      due_date: formattedDueDate,
      client_id,
      description,
    };

    const updatedRows = await knex("portfolio")
      .where({ portfolio_id })
      .update(updatedPortfolioDetails);

    if (updatedRows === 0) {
      return res.status(404).json({ message: "Portfolio not found" });
    }

    const updatedPortfolio = await knex("portfolio")
      .where({ portfolio_id })
      .first();

    return res.status(200).json(updatedPortfolio);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

export default router;
