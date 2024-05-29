import React from "react";
import Banner from "../Banner";

function WonBanner({ tries }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {tries} {tries === 1 ? "guess" : "guesses"}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default WonBanner;
