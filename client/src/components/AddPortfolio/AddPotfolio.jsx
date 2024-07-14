import "./AddPortfolio.scss";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import errorIcon from "../../assets/icons/error-24px.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AddPortfolio() {
  // 1. State Initialization
  const [portfolios, setPortfolios] = useState([]);
  const [clients, setClients] = useState([]);
  const [formData, setFormData] = useState({
    category: "",
    amount: "",
    due_date: "",
    client_id: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [submitClicked, setSubmitClicked] = useState(false);

  // Fetch clients data for client_id selection
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/clients");
        setClients(response.data);
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };

    fetchClients();
  }, []);

  // 2. Input change handler
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    if (value.trim() !== "") {
      setErrors({ ...errors, [name]: "" });
    }
  };

  // 3. Form Submission
  const submitForm = async (event) => {
    event.preventDefault();
    const newErrors = {};

    // Check for empty fields first
    if (!formData.category) newErrors.category = "This field is required!";
    if (!formData.amount) newErrors.amount = "This field is required!";
    if (!formData.due_date) newErrors.due_date = "This field is required!";
    if (!formData.client_id) newErrors.client_id = "This field is required!";
    if (!formData.description)
      newErrors.description = "This field is required!";

    // Update errors state and check if there are any errors
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setSubmitClicked(true);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/portfolios",
        formData
      );
      setPortfolios((prevPortfolios) => [...prevPortfolios, response.data]);

      setFormData({
        category: "",
        amount: "",
        due_date: "",
        client_id: "",
        description: "",
      });
      setSubmitClicked(false);
      alert("Portfolio added successfully!");
    } catch (error) {
      console.error("Error adding portfolio:", error);
    }
  };

  return (
    <main className="page-container">
      <section className="addPortfolio">
        <div className="addPortfolio__heading">
          <Link className="link" to="/portfolios">
            <img
              className="addPortfolio--arrow"
              src={arrowBack}
              alt="Arrow-Back"
            />
          </Link>
          <h1>Add New Portfolio</h1>
        </div>
        <form className="addForm" onSubmit={submitForm}>
          <div className="addForm__container">
            <div className="addForm__card">
              <h2 className="addForm__heading">Portfolio Details</h2>
              <label className="addForm__label">Category</label>
              <input
                className="addForm__input formfield"
                type="text"
                placeholder="Category"
                name="category"
                value={formData.category}
                onChange={changeHandler}
              />
              {submitClicked && errors.category && (
                <div className="error-message">
                  <img src={errorIcon} alt="Error" />
                  <span>{errors.category}</span>
                </div>
              )}

              <label className="addForm__label">Amount</label>
              <input
                className="addForm__input formfield"
                type="number"
                placeholder="Amount"
                name="amount"
                value={formData.amount}
                onChange={changeHandler}
              />
              {submitClicked && errors.amount && (
                <div className="error-message">
                  <img src={errorIcon} alt="Error" />
                  <span>{errors.amount}</span>
                </div>
              )}

              <label className="addForm__label">Due Date</label>
              <input
                className="addForm__input formfield"
                type="date"
                placeholder="Due Date"
                name="due_date"
                value={formData.due_date}
                onChange={changeHandler}
              />
              {submitClicked && errors.due_date && (
                <div className="error-message">
                  <img src={errorIcon} alt="Error" />
                  <span>{errors.due_date}</span>
                </div>
              )}

              <label className="addForm__label">Client</label>
              <select
                className="addForm__input formfield"
                name="client_id"
                value={formData.client_id}
                onChange={changeHandler}
              >
                <option value="">Select Client</option>
                {clients.map((client) => (
                  <option key={client.client_id} value={client.client_id}>
                    {client.name}
                  </option>
                ))}
              </select>
              {submitClicked && errors.client_id && (
                <div className="error-message">
                  <img src={errorIcon} alt="Error" />
                  <span>{errors.client_id}</span>
                </div>
              )}

              <label className="addForm__label">Description</label>
              <textarea
                className="addForm__input formfield"
                placeholder="Description"
                name="description"
                value={formData.description}
                onChange={changeHandler}
              ></textarea>
              {submitClicked && errors.description && (
                <div className="error-message">
                  <img src={errorIcon} alt="Error" />
                  <span>{errors.description}</span>
                </div>
              )}
            </div>
          </div>
          <div className="addForm__button--layout">
            <Link to="/portfolios">
              <button type="button" className="addForm__button-cancel">
                Cancel
              </button>
            </Link>
            <button type="submit" className="addForm__button button">
              + Add Portfolio
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
