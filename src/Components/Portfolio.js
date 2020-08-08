import React from "react";

const Portfolio = () => {
  return (
    <>
      <h1> This is our Portfolio page</h1>
      <p>
        Should you require my assistance, click the "<em>I'm online</em>" image
        (when available) to make a <strong>Skype Call</strong> to the Guide on
        the Side:
      </p>
      <span
        className="skype-button rounded"
        data-contact-id="edwyn.saunders@outlook.com"
        data-text="Call Eddie"
      ></span>
    </>
  );
};

export default Portfolio;
