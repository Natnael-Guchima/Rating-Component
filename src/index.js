import React, { useState } from "react";
import { createRoot } from "react-dom/client";

import Rating from "./components.js/Rating";
import ThankYou from "./components.js/ThankYou";
import "./Index.css";

const App = () => {
  const [rated, setRated] = useState(null);
  //   const [submitted, setSubmitted] = useState(false);
  console.log(rated);

  function renderRatingComponent() {
    return <Rating setRated={setRated} />;
  }

  function renderThankYouComponent() {
    return <ThankYou rated={rated}></ThankYou>;
  }

  return (
    <div className="rating-componenet">
      {rated ? renderThankYouComponent() : renderRatingComponent()}
    </div>
  );
};

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
