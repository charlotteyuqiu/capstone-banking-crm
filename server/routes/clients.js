import initKnex from "knex";

import configuration from "../knexfile.js";

const knex = initKnex(configuration);
import express from "express";

const router = express.Router();

// Email and phone validation regex patterns
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
const canadianAddressRegex =
  /^\d+\s[A-Za-z\s]+,?\s[A-Za-z\s]+,?\s[A-Za-z]{2},?\s[A-Za-z]\d[A-Za-z]\s\d[A-Za-z]\d\s[A-Za-z]+$/;

// Function to get a client by ID
const getClientById = async (client_id) => {
  try {
    const result = await knex
      .select("*")
      .from("clients")
      .where({ client_id })
      .first();
    return result;
  } catch (error) {
    throw error;
  }
};

// Function to add a new client
const addClient = async (client) => {
  try {
    const [newClientId] = await knex("clients").insert(client);
    return await getClientById(newClientId);
  } catch (error) {
    throw error;
  }
};

// Get list of all clients
router.get("/", async (req, res) => {
  try {
    const clients = await knex("clients").select("*");
    res.json(clients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a client by client_id
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

// GET all portfolios from a given client id
const getClient = router.get("/:client_id/portfolios", async (req, res) => {
  const clientId = req.params.client_id;

  try {
    const response = await knex("portfolio")
      .select("portfolio_id", "category", "amount", "due_date", "description")
      .where("client_id", clientId);

    res.status(200).json(response);
    return response;
  } catch (error) {
    res.status(400).send("Noo!");
  }
});

// PUT/EDIT client details
router.put("/:client_id", async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    console.log("Received body:", req.body);

    if (!name || !email || !phone) {
      console.log("Validation failed: All fields are required");
      return res.status(400).json({ message: "All fields are required!" });
    }

    if (!emailRegex.test(email)) {
      console.log("Validation failed: Invalid email format");
      return res.status(400).json({
        message: "Email format invalid. Acceptable format XXX@XXX.com",
      });
    }

    if (!phoneRegex.test(phone)) {
      console.log("Validation failed: Invalid phone format");
      return res.status(400).json({
        message: "Phone format invalid. Acceptable format: 123-456-7890",
      });
    }

    const clientId = req.params.client_id;
    console.log("Client ID:", clientId);

    const updatedClientDetails = {
      name,
      email,
      phone,
    };

    const updatedRows = await knex("clients")
      .where({ client_id: clientId })
      .update(updatedClientDetails);

    if (updatedRows === 0) {
      return res.status(404).json({ message: "Client not found" });
    }

    return res.status(200).json({ message: "Client updated successfully!" });
  } catch (error) {
    console.log("Error updating client:", error.message);
    return res.status(500).json({ message: "Error updating client", error });
  }
});

// Add/post client
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, address } = req.body;

    if (!name || !email || !phone || !address) {
      return res.status(400).json({ message: "All fields are required!!!" });
    }

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Email format invalid. Acceptable format XXX@XXX.com",
      });
    }

    if (!phoneRegex.test(phone)) {
      return res.status(400).json({
        message: "Phone format invalid. Acceptable format: 123-456-7890",
      });
    }

    if (!canadianAddressRegex.test(address)) {
      return res.status(400).json({
        message:
          "Please enter an address in the format: 123 Street Name, City, Province, A1A 1A1 Country",
      });
    }

    const newClientDetails = {
      name,
      email,
      phone,
      address,
    };
    const addedClient = await addClient(newClientDetails);
    return res.status(201).json({ addedClient });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
});

export default router;
