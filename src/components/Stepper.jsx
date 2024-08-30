import React, { useState } from "react";

const Stepper = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        <button
          className={`tab-button ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          Events
        </button>
        <button
          className={`tab-button ${activeTab === 2 ? "active" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          Jobs
        </button>
        <button
          className={`tab-button ${activeTab === 3 ? "active" : ""}`}
          onClick={() => handleTabClick(3)}
        >
          Matrimony
        </button>
        <button
          className={`tab-button ${activeTab === 4 ? "active" : ""}`}
          onClick={() => handleTabClick(4)}
        >
          Buy Sell
        </button>
        <button
          className={`tab-button ${activeTab === 5 ? "active" : ""}`}
          onClick={() => handleTabClick(5)}
        >
          Property
        </button>
        <button
          className={`tab-button ${activeTab === 6 ? "active" : ""}`}
          onClick={() => handleTabClick(6)}
        >
          Blogs
        </button>
      </div>
      {/* <div className="tabs-content">
        {activeTab === 1 && <div className="tab-content button-style"></div>}
        {activeTab === 2 && <div className="tab-content button-style"></div>}
        {activeTab === 3 && <div className="tab-content button-style"></div>}
        {activeTab === 4 && <div className="tab-content button-style"></div>}
        {activeTab === 5 && <div className="tab-content button-style"></div>}
        {activeTab === 6 && <div className="tab-content button-style"></div>}
        {activeTab === 7 && <div className="tab-content button-style"></div>}
      </div> */}
    </div>
  );
};

export default Stepper;
