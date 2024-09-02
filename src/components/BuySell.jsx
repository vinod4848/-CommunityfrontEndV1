import React from "react";


export const BuySell = (props) => {
  return (
    <div id="buySell" className="job-section">
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <h2>Buy Sell</h2>
          </div>
          <a href="/buysellDtails" className="see-all-btn">
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
