import React, { useState, useEffect } from "react";
import Axios from "axios";
import PropTypes from "prop-types";
import "./ClientList.scss";
import EditIcon from "../../assets/icons/edit-24px.svg";
import { Link } from "react-router-dom";

const ClientList = () => {
  const [clients, setClients] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await Axios.get("http://localhost:8080/api/clients");
        setClients(response.data);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching clients:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="client-list">
      <div className="client-list__upper-part">
        <h2 className="client-list__title">View Client Details</h2>
        <Link to="/clients/add">
          <button className="button link">+ Add New Client</button>
        </Link>
      </div>
      <ul className="client-list__items">
        {clients.map((client) => (
          <li key={client.client_id} className="client-list__item">
            <div className="client-list__card">
              <div className="client-list__name-edit">
                <p className="client-list__text">
                  <strong>{client.name}</strong>
                </p>
                <img
                  className="client-list__edit-icon"
                  src={EditIcon}
                  alt="edit-icon"
                />
              </div>
              <div className="client-list__info">
                <p className="client-list__text">
                  <strong>EMAIL</strong> {client.email}
                </p>
                <p className="client-list__text">
                  <strong>PHONE</strong> {client.phone}
                </p>
              </div>
              <p className="client-list__address">
                <strong>ADDRESS</strong> {client.address}
              </p>
              <div className="client-list__action-btn">
                <Link to={`/clients/${client.client_id}/portfolios`}>
                  <button className="client-list__portfolio-btn link">
                    View Portfolio
                  </button>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

ClientList.propTypes = {
  clients: PropTypes.array.isRequired,
};

export default ClientList;
