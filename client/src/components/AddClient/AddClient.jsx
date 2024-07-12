import "./AddClient.scss";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import errorIcon from "../../assets/icons/error-24px.svg";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AddClient() {
  // 1. State Initialization
  const [clients, setClients] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [errors, setErrors] = useState({});
  const [submitClicked, setSubmitClicked] = useState(false);

  // Canadian address regex pattern
  const canadianAddressRegex =
    /^\d+\s[A-Za-z\s]+,?\s[A-Za-z\s]+,?\s[A-Za-z]{2},?\s[A-Za-z]\d[A-Za-z]\s\d[A-Za-z]\d\s[A-Za-z]+$/;

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
    if (!formData.name) newErrors.name = "This field is required!";
    if (!formData.email) newErrors.email = "This field is required!";
    if (!formData.phone) newErrors.phone = "This field is required!";
    if (!formData.address) newErrors.address = "This field is required!";

    // Update errors state and check if there are any errors
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setSubmitClicked(true);
      return;
    }

    // Check for email and phone format after ensuring all fields are filled
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email format!",
      }));
      setSubmitClicked(true);
      return;
    }

    if (!/^\d{3}-\d{3}-\d{4}$/.test(formData.phone)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Please enter a phone number in the format 123-456-7890",
      }));
      setSubmitClicked(true);
      return;
    }

    // Check for address format after ensuring all fields are filled
    if (!canadianAddressRegex.test(formData.address)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        address:
          "Please enter an address in the format: 123 Street Name, City, Province, A1A 1A1 Country",
      }));
      setSubmitClicked(true);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/clients",
        formData
      );
      setClients((prevClients) => [...prevClients, response.data]);

      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
      });
      setSubmitClicked(false);
      alert("Client added successfully!");
    } catch (error) {
      console.error("Error adding client:", error);
    }
  };

  return (
    <main className="page-container">
      <section className="addClient">
        <div className="addClient__heading">
          <Link className="link" to="/clients">
            <img
              className="addClient--arrow"
              src={arrowBack}
              alt="Arrow-Back"
            />
          </Link>
          <h1>Add New Client</h1>
        </div>
        <form className="addForm" onSubmit={submitForm}>
          <div className="addForm__container">
            <div className="addForm__card">
              <h2 className="addForm__heading">Client Details</h2>
              <label className="addForm__label">Name</label>
              <input
                className="addForm__input formfield"
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={changeHandler}
              />
              {submitClicked && errors.name && (
                <div className="error-message">
                  <img src={errorIcon} alt="Error" />
                  <span>{errors.name}</span>
                </div>
              )}

              <label className="addForm__label">Email</label>
              <input
                className="addForm__input formfield"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={changeHandler}
              />
              {submitClicked && errors.email && (
                <div className="error-message">
                  <img src={errorIcon} alt="Error" />
                  <span>{errors.email}</span>
                </div>
              )}

              <label className="addForm__label">Phone Number</label>
              <input
                className="addForm__input formfield"
                type="tel"
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={changeHandler}
              />
              {submitClicked && errors.phone && (
                <div className="error-message">
                  <img src={errorIcon} alt="Error" />
                  <span>{errors.phone}</span>
                </div>
              )}

              <label className="addForm__label">Address</label>
              <input
                className="addForm__input formfield"
                type="text"
                placeholder="Address"
                name="address"
                value={formData.address}
                onChange={changeHandler}
              />
              {submitClicked && errors.address && (
                <div className="error-message">
                  <img src={errorIcon} alt="Error" />
                  <span>{errors.address}</span>
                </div>
              )}
            </div>
          </div>
          <div className="addForm__button--layout">
            <Link to="/clients">
              <button type="button" className="addForm__button-cancel">
                Cancel
              </button>
            </Link>
            <button type="submit" className="addForm__button button">
              + Add Client
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
