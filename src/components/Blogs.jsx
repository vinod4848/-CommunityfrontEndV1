import React from "react";


export const Blogs = (props) => {
  return (
    <div id="blogs" className="job-section">
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <h2>Blogs</h2>
          </div>
          <a href="/all-jobs" className="see-all-btn">
            See All
          </a>
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
