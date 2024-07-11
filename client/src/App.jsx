import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

// import components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ClientList from "./components/ClientList/ClientList";
import ClientPortfolio from "./components/ClientPortfolio/ClientPortfolio";
// import ClientDetails from "./components/ClientDetails/ClientDetails";
// import EditClients from "./components/EditClients/EditClients";
// import AddClients from "./components/AddClients/AddClients";
// import PortfolioDetails from "./components/PortfolioDetails/PortfolioDetails";
// import DeleteClient from "./components/deleteClient/DeleteClient";
// import EditPortfolio from "./components/EditPortfolio/EditPortfolio";
// import AddPortfolio from "./components/AddPortfolio/AddPortfolio";
import PortfolioList from "./components/PortfolioList/PortfolioList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ClientList />} />
        <Route path="/clients" element={<ClientList />} />
        <Route
          path="/clients/:client_id/portfolios"
          element={<ClientPortfolio />}
        />
        <Route path="/portfolios" element={<PortfolioList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
