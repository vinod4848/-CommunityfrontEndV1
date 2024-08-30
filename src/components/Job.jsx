import React from "react";
export const Job = (props) => {
  return (
    <div id="job" className="job-section">
      <div className="container">
        <div className="section-title">
          <h2>New Jobs</h2>
          <p>
            Stay updated with our latest events and join us for exciting
            experiences.
          </p>
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
