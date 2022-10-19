import React, { useState } from "react";

import "./RoundIcon.css";

const RoundIcon = ({ val, setRating, rating }) => {
  const [selected, setSelected] = useState(false);
  const active = val === rating ? "active" : "";

  const onClickRound = () => {
    if (!selected) {
      setRating(val);
      setSelected(!selected);
    } else {
      setRating(null);
      setSelected(!selected);
    }
  };
  return (
    <button onClick={onClickRound} className={`round-btn ${active}`}>
      {val}
    </button>
  );
};

export default RoundIcon;
