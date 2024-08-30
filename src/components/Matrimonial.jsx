import React from "react";
// import "./Matrimonial.css"; // Ensure you create this CSS file for styling

export const Matrimonial = (props) => {
  return (
    <div id="matrimonial" className="matrimonial-section">
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <h2>Matrimony</h2>
            <p>
              Stay updated with our latest events and join us for exciting experiences.
            </p>
          </div>
          <a href="/all-matrimonials" className="see-all-btn">See All</a>
        </div>
        <div className="matrimonial-cards">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="matrimonial-card">
                  <img src={d.img} alt={d.name} className="matrimonial-img" />
                  <div className="matrimonial-content">
                    <h4>{d.name}</h4>
                    <p>{d.job}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
