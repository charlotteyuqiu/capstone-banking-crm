import axios from "axios";
import React from "react";
import "./DeleteClient.scss";

function DeleteClient({ client, onDeleted, onCancelled }) {
  function cancelDeletion() {
    onCancelled();
  }

  function deleteClient() {
    axios
      .delete(`http://localhost:8080/api/clients/${client.client_id}`)
      .then((response) => {
        onDeleted(client);
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
          <h1 className="delete__content--title">Delete {client.name}?</h1>
          <span className="delete__content--close" onClick={cancelDeletion}>
            &times;
          </span>

          <div className="delete__content--text">
            Please confirm that you'd like to delete {client.name} from the
            client list. You won't be able to undo this action.
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
              onClick={deleteClient}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteClient;
