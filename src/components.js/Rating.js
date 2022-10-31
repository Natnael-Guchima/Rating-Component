import React, { useState, useEffect } from "react";

import RoundIcon from "./RoundIcon";
import "./Rating.css";

const Rating = ({ setRated }) => {
  const [rating, setRating] = useState(null);

  const roundIcons = new Array(5).fill(0).map((_, i) => {
    return (
      <RoundIcon key={i} val={i + 1} setRating={setRating} rating={rating} />
    );
  });

  return (
    <div className="rating">
      <p className="rating-header">How did we do?</p>

      <p className="supporting-copy">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <div className="round-icons">{roundIcons}</div>
      <button
        onClick={() => {
          if (rating) setRated(rating);
        }}
        className="submit-btn"
      >
        submit
      </button>
    </div>
  );
};

export default Rating;
