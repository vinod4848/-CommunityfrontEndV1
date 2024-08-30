import React from "react";
// import "./Team.css"; // Ensure you create this CSS file for styling

export const Team = (props) => {
  return (
    <div id="team" className="team-section">
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <h2>Upcoming Events</h2>
            
          </div>
          <a href="/all-events" className="see-all-btn">See All</a>
        </div>
        <div className="team-cards">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="team-card">
                  <img src={d.img} alt={d.name} className="team-img" />
                  <div className="team-content">
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
