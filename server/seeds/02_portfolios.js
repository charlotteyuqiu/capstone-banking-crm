app.get("/portfolios", async (req, res) => {
  try {
    const portfolios = await db("portfolio").select("*");
    res.json(portfolios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
