import "./EditClient.scss";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import errorIcon from "../../assets/icons/error-24px.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function EditClient() {
  const { client_id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [errors, setErrors] = useState({});
  const [submitClicked, setSubmitClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchClientData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/clients/${client_id}`
        );
        setFormData(response.data);
        setLoading(false);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setNotFound(true);
        } else {
          console.error("Error fetching client data:", error);
        }
        setLoading(false);
      }
    };

    fetchClientData();
  }, [client_id]);

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
          "Please enter an address in the format: 123 Street Name, City, Province, A1A 1A1",
      }));
      setSubmitClicked(true);
      return;
    }

    try {
      await axios.put(
        `http://localhost:8080/api/clients/${client_id}`,
        formData
      );
      alert("Client updated successfully!");
      navigate("/clients");
    } catch (error) {
      console.error("Error updating client:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (notFound) {
    return <div>Client not found</div>;
  }

  return (
    <main className="page-container">
      <section className="editClient">
        <div className="editClient__heading">
          <Link className="link" to="/clients">
            <img
              className="editClient--arrow"
              src={arrowBack}
              alt="Arrow-Back"
            />
          </Link>
          <h1>Edit Client</h1>
        </div>
        <form className="editForm" onSubmit={submitForm}>
          <div className="editForm__container">
            <div className="editForm__card">
              <h2 className="editForm__heading">Client Details</h2>
              <label className="editForm__label">Name</label>
              <input
                className="editForm__input formfield"
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

              <label className="editForm__label">Email</label>
              <input
                className="editForm__input formfield"
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

              <label className="editForm__label">Phone Number</label>
              <input
                className="editForm__input formfield"
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

              <label className="editForm__label">Address</label>
              <input
                className="editForm__input formfield"
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
          <div className="editForm__button--layout">
            <Link to="/clients">
              <button type="button" className="editForm__button-cancel">
                Cancel
              </button>
            </Link>
            <button type="submit" className="editForm__button button">
              Save Changes
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
