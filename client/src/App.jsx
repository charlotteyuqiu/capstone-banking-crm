import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Axios from "axios";

// import components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ClientList from "./components/ClientList/ClientList";
import ClientPortfolio from "./components/ClientPortfolio/ClientPortfolio";
// import EditClients from "./components/EditClients/EditClients";
import AddClient from "./components/AddClient/AddClient";
// import DeleteClient from "./components/deleteClient/DeleteClient";
// import EditPortfolio from "./components/EditPortfolio/EditPortfolio";
import AddPortfolio from "./components/AddPortfolio/AddPotfolio";
import PortfolioList from "./components/PortfolioList/PortfolioList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ClientList />} />
        <Route path="/clients" element={<ClientList />} />
        <Route path="/clients/add" element={<AddClient />} />
        <Route
          path="/clients/:client_id/portfolios"
          element={<ClientPortfolio />}
        />
        <Route path="/portfolios" element={<PortfolioList />} />
        <Route path="/portfolios/add" element={<AddPortfolio />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
