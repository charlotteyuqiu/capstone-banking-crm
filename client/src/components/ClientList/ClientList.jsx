import React from "react";
import PropTypes from "prop-types";
import "./ClientList.scss";
import EditIcon from "../../assets/icons/edit-24px.svg";

const ClientList = ({ clients }) => {
  return (
    <div className="client-list">
      <div className="client-list__upper-part">
        <h2 className="client-list__title">View Client Details</h2>
        <button className="client-list__add-btn">+ Add New Client</button>
      </div>
      <ul className="client-list__items">
        {clients.map((client) => (
          <li key={client.client_id} className="client-list__item">
            <div className="client-list__card">
              <div className="client-list__name-edit ">
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
            </div>
            <div className="client-list__portfolio-btn">
              <button className="client-list__portfolio-btn">
                View Portfolio Details
              </button>
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
