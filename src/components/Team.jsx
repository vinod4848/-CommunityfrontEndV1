import React from "react";
export const Team = (props) => {
  return (
    <div id="team" className="team-section">
      <div className="container">
        <div className="section-title">
          <h2>Upcoming Events</h2>
          <p>
            Stay updated with our latest events and join us for exciting
            experiences.
          </p>
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
