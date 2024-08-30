import React from "react";
// import "./Job.css"; // Ensure you create this CSS file for styling

export const Job = (props) => {
  return (
    <div id="job" className="job-section">
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <h2>New Jobs</h2>
            <p>
              Stay updated with our latest events and join us for exciting experiences.
            </p>
          </div>
          <a href="/all-jobs" className="see-all-btn">See All</a>
        </div>
        <div className="job-cards">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="job-card">
                  <img src={d.img} alt={d.name} className="job-img" />
                  <div className="job-content">
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
