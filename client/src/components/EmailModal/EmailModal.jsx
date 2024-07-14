import React from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import "./EmailModal.scss";

Modal.setAppElement("#root"); // Initial Modal Set-Up in app

function EmailModal({
  isOpen,
  onRequestClose,
  clientName,
  portfolioCategory,
  dueDate,
  onSend,
}) {
  const formattedDueDate = new Date(dueDate).toLocaleDateString("en-CA"); // Format the date as YYYY-MM-DD

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Email Preview"
      className="email-modal"
      overlayClassName="email-modal__overlay"
    >
      <h2>Email Preview</h2>
      <p>Dear {clientName},</p>
      <p>
        I hope this message finds you well. I am writing to inform you that your{" "}
        {portfolioCategory}
        is set to mature on {formattedDueDate}. As the maturity date approaches,
        it is an opportune time to review your financial options and discuss how
        best to proceed with your investment. To ensure we address any questions
        or preferences you may have, I would like to schedule an appointment at
        your earliest convenience.
      </p>
      <p>
        During our meeting, we can explore various options available to you,
        including reinvestment opportunities, potential adjustments to your
        portfolio, and any other financial goals you may wish to discuss.
      </p>
      <p>
        Please let me know your availability over the next couple of weeks so
        that we can arrange a suitable time for our meeting. If you prefer, we
        can also conduct this discussion via a phone call or video conference
        for your convenience.
      </p>
      <p>Thank you for your attention to this matter.</p>
      <p>
        I look forward to assisting you with your investment needs and
        continuing to support your financial goals.
      </p>
      <p>Best regards,</p>
      <p>[Charlotte He]</p>
      <p>[123-456-7890 | ABC Bank]</p>
      <div className="email-modal__buttons">
        <button className="button" onClick={onSend}>
          Send Email
        </button>
        <button className="email-modal__cancel" onClick={onRequestClose}>
          Cancel
        </button>
      </div>
    </Modal>
  );
}

EmailModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  clientName: PropTypes.string.isRequired,
  portfolioCategory: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  onSend: PropTypes.func.isRequired,
};

export default EmailModal;
