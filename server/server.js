import cors from "cors";
import dotenv from "dotenv";
import express from "express";

const app = express();
//Configuration
dotenv.config();
const PORT = process.env.PORT || 8080;

// Middleware
//  allow api calls and sharing data
app.use(cors());
// allow access to post incoming data to the server, parse JSONbody
app.use(express.json());

app.get("/", (_req, res) => {
  return res.send("Hello! Welcome to Banking Relationship Management System");
});

// app.use("/api/clients", clientsRoutes);
// app.use("/api/portfolios", portfoliosRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
