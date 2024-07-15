import React, { useState } from "react";
import emailjs from "emailjs-com";
import PropTypes from "prop-types";
import EmailModal from "../EmailModal/EmailModal";
import "./EmailButton.scss";

// Initialize EmailJS with your Public Key
emailjs.init("IvM9Yig8qLGPCGYJm");

function EmailButton({ clientName, portfolioCategory, dueDate }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sendEmail = () => {
    emailjs
      .send("service_779", "template_779", {
        client_name: clientName,
        portfolio_category: portfolioCategory,
        due_date: dueDate,
      })
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Email sent successfully!");
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.log("FAILED...", error);
        alert("Failed to send email. Check the console for more details.");
      });
  };

  return (
    <div>
      <button className="email__button" onClick={() => setIsModalOpen(true)}>
        Send Email
      </button>
      <EmailModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        clientName={clientName}
        portfolioCategory={portfolioCategory}
        dueDate={dueDate}
        onSend={sendEmail}
      />
    </div>
  );
}

EmailButton.propTypes = {
  clientName: PropTypes.string.isRequired,
  portfolioCategory: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
};

export default EmailButton;
