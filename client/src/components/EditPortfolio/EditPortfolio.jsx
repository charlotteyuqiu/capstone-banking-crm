import "./EditPortfolio.scss";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import errorIcon from "../../assets/icons/error-24px.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function EditPortfolio() {
  const { portfolio_id } = useParams();
  const navigate = useNavigate();
  const [initialFormData, setInitialFormData] = useState(null); // State to store initial form data
  const [formData, setFormData] = useState({
    category: "",
    amount: "",
    due_date: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [submitClicked, setSubmitClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/portfolios/${portfolio_id}`
        );
        const data = response.data;
        setFormData(data);
        setInitialFormData({
          ...data,
          due_date: data.due_date.split("T")[0], // Strip the time part for comparison
        }); // Set initial form data
        setLoading(false);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setNotFound(true);
        } else {
          console.error("Error fetching portfolio data:", error);
        }
        setLoading(false);
      }
    };

    fetchPortfolioData();
  }, [portfolio_id]);

  // Input change handler
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    if (value.trim() !== "") {
      setErrors({ ...errors, [name]: "" });
    }
  };

  // Function to check if any changes were made
  const hasChanges = () => {
    return (
      formData.category !== initialFormData.category ||
      formData.amount !== initialFormData.amount ||
      formData.due_date.split("T")[0] !== initialFormData.due_date || // Compare only the date parts
      formData.description !== initialFormData.description
    );
  };

  // Form Submission
  const submitForm = async (event) => {
    event.preventDefault();
    const newErrors = {};

    // Check for empty fields first
    if (!formData.category) newErrors.category = "This field is required!";
    if (!formData.amount) newErrors.amount = "This field is required!";
    if (!formData.due_date) newErrors.due_date = "This field is required!";
    if (!formData.description)
      newErrors.description = "This field is required!";

    // Update errors state and check if there are any errors
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setSubmitClicked(true);
      return;
    }

    // Proceed with form submission
    try {
      console.log("Submitting form data:", formData); // Log form data
      await axios.put(
        `http://localhost:8080/api/portfolios/${portfolio_id}`,
        formData
      );
      alert("Portfolio updated successfully!");
      navigate("/portfolios");
    } catch (error) {
      console.error("Error updating portfolio:", error); // Log the error
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (notFound) {
    return <div>Portfolio not found</div>;
  }

  return (
    <main className="page-container">
      <section className="editPortfolio">
        <div className="editPortfolio__heading">
          <Link className="link" to="/portfolios">
            <img
              className="editPortfolio--arrow"
              src={arrowBack}
              alt="Arrow-Back"
            />
          </Link>
          <h1>Edit Portfolio</h1>
        </div>
        <form className="editForm" onSubmit={submitForm}>
          <div className="editForm__container">
            <div className="editForm__card">
              <h2 className="editForm__heading">Portfolio Details</h2>
              <label className="editForm__label">Category</label>
              <input
                className="editForm__input formfield"
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

              <label className="editForm__label">Amount</label>
              <input
                className="editForm__input formfield"
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

              <label className="editForm__label">Due Date</label>
              <input
                className="editForm__input formfield"
                type="date"
                placeholder="Due Date"
                name="due_date"
                value={formData.due_date.split("T")[0]} // Formatting date
                onChange={changeHandler}
              />
              {submitClicked && errors.due_date && (
                <div className="error-message">
                  <img src={errorIcon} alt="Error" />
                  <span>{errors.due_date}</span>
                </div>
              )}

              <label className="editForm__label">Description</label>
              <textarea
                className="editForm__input formfield"
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
          <div className="editForm__button--layout">
            <Link to="/portfolios">
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
