import React from "react";

import "./ThankYou.css";

const ThankYou = ({ rated }) => {
  return (
    <div className="card">
      <img src="../illustration-thank-you.svg" />
      <p className="display-rating">{`You Selected ${rated} out of 5`}</p>
      <h3 className="header">Thank you!</h3>
      <p className="s-copy">
        We apprciate that you were willing to rate our service.
      </p>
    </div>
  );
};

export default ThankYou;
