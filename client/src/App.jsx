import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ClientList from "./components/ClientList/ClientList";
import ClientPortfolio from "./components/ClientPortfolio/ClientPortfolio";
import EditClient from "./components/EditClient/EditClient";
import AddClient from "./components/AddClient/AddClient";
import EditPortfolio from "./components/EditPortfolio/EditPortfolio";
import AddPortfolio from "./components/AddPortfolio/AddPotfolio";
import PortfolioList from "./components/PortfolioList/PortfolioList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Clients Routes */}
        <Route path="/" element={<ClientList />} />
        <Route path="/clients" element={<ClientList />} />
        <Route path="/clients/add" element={<AddClient />} />
        <Route path="/clients/:client_id/edit" element={<EditClient />} />
        <Route
          path="/clients/:client_id/portfolios"
          element={<ClientPortfolio />}
        />
        {/* Portfolios Routes */}
        <Route path="/portfolios" element={<PortfolioList />} />
        <Route path="/portfolios/add" element={<AddPortfolio />} />
        <Route
          path="/portfolios/:portfolio_id/edit"
          element={<EditPortfolio />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
