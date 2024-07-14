import React, { useState, useEffect } from "react";
import Axios from "axios";
import PropTypes from "prop-types";
import "./PortfolioList.scss";
import EditIcon from "../../assets/icons/edit-24px.svg";
import DeleteIcon from "../../assets/icons/delete_outline-24px.svg";
import AlertIcon from "../../assets/icons/alert-icon.png";
import OkIcon from "../../assets/icons/green-icon.jpeg";
import { Link } from "react-router-dom";
import DeletePortfolio from "../DeletePortfolio/DeletePortfolio";
import EmailButton from "../EmailButton/EmailButton";

const PortfolioList = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deletingPortfolio, setDeletingPortfolio] = useState(null);

  useEffect(() => {
    const fetchPortfoliosAndClients = async () => {
      try {
        const portfoliosResponse = await Axios.get(
          "http://localhost:8080/api/portfolios"
        );
        const clientsResponse = await Axios.get(
          "http://localhost:8080/api/clients"
        );
        setPortfolios(portfoliosResponse.data);
        setClients(clientsResponse.data);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching data:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfoliosAndClients();
  }, []);

  const getStatus = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const timeDiff = due - today;
    const daysDiff = timeDiff / (1000 * 3600 * 24);

    if (daysDiff <= 60) {
      return (
        <div className="portfolio-list__status">
          <img
            src={AlertIcon}
            alt="Alert Icon"
            className="portfolio-list__status-icon"
          />
          <span>COMING DUE</span>
        </div>
      );
    } else {
      return (
        <div className="portfolio-list__status">
          <img
            src={OkIcon}
            alt="OK Icon"
            className="portfolio-list__status-icon"
          />
          <span>OK</span>
        </div>
      );
    }
  };

  const onPortfolioDeleted = (deletedPortfolio) => {
    setPortfolios((prevPortfolios) =>
      prevPortfolios.filter(
        (portfolio) => portfolio.portfolio_id !== deletedPortfolio.portfolio_id
      )
    );
    setDeletingPortfolio(null);
  };

  const handleActionChange = (portfolioId, event) => {
    const newAction = event.target.value;
    setPortfolios((prevPortfolios) =>
      prevPortfolios.map((portfolio) =>
        portfolio.portfolio_id === portfolioId
          ? { ...portfolio, action: newAction }
          : portfolio
      )
    );
  };

  const clientIdToNameMap = clients.reduce((map, client) => {
    map[client.client_id] = client.name;
    return map;
  }, {});

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="portfolio-list">
      <div className="portfolio-list__upper-part">
        <h2 className="portfolio-list__title">View Portfolios</h2>
        <Link to="/portfolios/add">
          <button className="button link">+ Add New Portfolio</button>
        </Link>
      </div>
      <ul className="portfolio-list__items">
        {portfolios.map((portfolio) => (
          <li key={portfolio.portfolio_id} className="portfolio-list__item">
            <div className="portfolio-list__card">
              <div>
                <p className="portfolio-list__text">
                  <strong>{clientIdToNameMap[portfolio.client_id]}</strong>
                </p>
              </div>
              <div className="portfolio-list__name-edit">
                <p className="portfolio-list__text">
                  <strong>{portfolio.category}</strong>
                </p>
                {getStatus(portfolio.due_date)}
                <Link to={`/portfolios/${portfolio.portfolio_id}/edit`}>
                  <img
                    className="portfolio-list__edit-icon"
                    src={EditIcon}
                    alt="edit-icon"
                  />
                </Link>
                <img
                  className="portfolio-list__delete-icon"
                  src={DeleteIcon}
                  alt="delete-icon"
                  onClick={() => setDeletingPortfolio(portfolio)}
                />
              </div>
              <div className="portfolio-list__info">
                <p className="portfolio-list__text">
                  <strong>AMOUNT</strong> {portfolio.amount}
                </p>
                <p className="portfolio-list__text">
                  <strong>DUE DATE</strong>{" "}
                  {new Date(portfolio.due_date).toLocaleDateString()}
                </p>
              </div>
              <div className="portfolio-list__action">
                <p className="portfolio-list__text">
                  <strong>ACTION</strong>
                </p>
                <select
                  value={portfolio.action || "No actions yet"}
                  onChange={(e) =>
                    handleActionChange(portfolio.portfolio_id, e)
                  }
                >
                  <option value="No actions yet">No actions yet</option>
                  <option value="Email sent">Email sent</option>
                  <option value="Appointment booked">Appointment booked</option>
                  <option value="Not able to contact client">
                    Not able to contact client
                  </option>
                </select>
              </div>
              <p className="portfolio-list__description">
                <strong>DESCRIPTION</strong> {portfolio.description}
              </p>
              <div className="portfolio-list__action-btn">
                <EmailButton
                  clientName={clientIdToNameMap[portfolio.client_id]}
                  portfolioCategory={portfolio.category}
                  dueDate={portfolio.due_date}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
      {deletingPortfolio && (
        <DeletePortfolio
          portfolio={deletingPortfolio}
          onDeleted={onPortfolioDeleted}
          onCancelled={() => setDeletingPortfolio(null)}
        />
      )}
    </div>
  );
};

PortfolioList.propTypes = {
  portfolios: PropTypes.array.isRequired,
};

export default PortfolioList;
