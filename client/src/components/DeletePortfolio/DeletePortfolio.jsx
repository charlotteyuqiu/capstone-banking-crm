import axios from "axios";
import React from "react";
import "./DeletePortfolio.scss";

function DeletePortfolio({ portfolio, onDeleted, onCancelled }) {
  function cancelDeletion() {
    onCancelled();
  }

  function deletePortfolio() {
    axios
      .delete(`http://localhost:8080/api/portfolios/${portfolio.portfolio_id}`)
      .then((response) => {
        onDeleted(portfolio);
      })
      .catch((error) => {
        console.error(error);
        onCancelled();
        alert(error.response.data.message);
      });
  }

  return (
    <div className="delete__overlay">
      <div className="delete">
        <div className="delete__content">
          <h1 className="delete__content--title">
            Delete portfolio {portfolio.category}?
          </h1>
          <span className="delete__content--close" onClick={cancelDeletion}>
            &times;
          </span>

          <div className="delete__content--text">
            Please confirm that you'd like to delete the portfolio in{" "}
            {portfolio.category}. You won't be able to undo this action.
          </div>

          <div className="delete__content--actions">
            <button
              type="button"
              className="delete__content__cancel-button"
              onClick={cancelDeletion}
            >
              Cancel
            </button>
            <button
              type="button"
              className="delete-button"
              onClick={deletePortfolio}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeletePortfolio;
