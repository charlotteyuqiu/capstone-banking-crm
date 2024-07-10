import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

// import components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ClientList from "./components/ClientList/ClientList";
// import ClientDetails from "./components/ClientDetails/ClientDetails";
// import EditClients from "./components/EditClients/EditClients";
// import AddClients from "./components/AddClients/AddClients";
// import PortfolioDetails from "./components/PortfolioDetails/PortfolioDetails";
// import DeleteClient from "./components/deleteClient/DeleteClient";
// import EditPortfolio from "./components/EditPortfolio/EditPortfolio";
// import AddPortfolio from "./components/AddPortfolio/AddPortfolio";
// import PortfolioList from "./components/PortfolioList/PortfolioList";

function App() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const urlAPI = "http://localhost:8080/api/clients";
        const response = await Axios.get(urlAPI);
        setClients(response.data);
      } catch (error) {
        console.error("Error fetching Client:", error.message);
      }
    };

    fetchClient();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ClientList clients={clients} />} />
        <Route path="/clients" element={<ClientList clients={clients} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
