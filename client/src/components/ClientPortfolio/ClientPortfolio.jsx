import React, { useState, useEffect } from "react";
import Axios from "axios";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import "./ClientPortfolio.scss";
import EditIcon from "../../assets/icons/edit-24px.svg";
import AlertIcon from "../../assets/icons/alert-icon.png";
import OkIcon from "../../assets/icons/green-icon.jpeg";
import EmailButton from "../EmailButton/EmailButton";

const ClientPortfolio = () => {
  const { client_id } = useParams();
  const [portfolios, setPortfolios] = useState([]);
  const [clientName, setClientName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClientPortfolios = async () => {
      try {
        const portfoliosResponse = await Axios.get(
          `http://localhost:8080/api/clients/${client_id}/portfolios`
        );
        setPortfolios(portfoliosResponse.data);

        // Fetch client name
        const clientResponse = await Axios.get(
          `http://localhost:8080/api/clients/${client_id}`
        );
        setClientName(clientResponse.data.name);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching client portfolios:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchClientPortfolios();
  }, [client_id]);

  const getStatus = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const timeDiff = due - today;
    const daysDiff = timeDiff / (1000 * 3600 * 24);

    if (daysDiff <= 60) {
      return (
        <div className="client-portfolio__status">
          <img
            src={AlertIcon}
            alt="Alert Icon"
            className="client-portfolio__status-icon"
          />
          <span>COMING DUE</span>
        </div>
      );
    } else {
      return (
        <div className="client-portfolio__status">
          <img
            src={OkIcon}
            alt="OK Icon"
            className="client-portfolio__status-icon"
          />
          <span>OK</span>
        </div>
      );
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="client-portfolio">
      <div className="client-portfolio__upper-part">
        <h2 className="client-portfolio__title">
          View {clientName}'s Portfolio
        </h2>
      </div>
      <ul className="client-portfolio__items">
        {portfolios.map((portfolio) => (
          <li key={portfolio.portfolio_id} className="client-portfolio__item">
            <div className="client-portfolio__card">
              <div className="client-portfolio__info">
                <p className="client-portfolio__text">
                  <strong>CATEGORY</strong> {portfolio.category}
                </p>
                <p className="client-portfolio__text">
                  <strong>AMOUNT</strong> {portfolio.amount}
                </p>
                <p className="client-portfolio__text">
                  <strong>DUE DATE</strong>{" "}
                  {new Date(portfolio.due_date).toLocaleDateString()}
                </p>
                <div className="client-portfolio__name-edit">
                  <img
                    className="client-portfolio__edit-icon"
                    src={EditIcon}
                    alt="edit-icon"
                  />
                  {getStatus(portfolio.due_date)}
                </div>
              </div>
              <p className="client-portfolio__description">
                <strong>DESCRIPTION</strong> {portfolio.description}
              </p>
            </div>
            <div className="client-portfolio__action-btn">
              <EmailButton
                clientName={clientName}
                portfolioCategory={portfolio.category}
                dueDate={portfolio.due_date}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

ClientPortfolio.propTypes = {
  portfolios: PropTypes.array.isRequired,
};

export default ClientPortfolio;
