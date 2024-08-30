import React, { useState } from "react";

const Stepper = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex, sectionId) => {
    setActiveTab(tabIndex);
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        <button
          className={`tab-button ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleTabClick(1, "events")}
        >
          Events
        </button>
        <button
          className={`tab-button ${activeTab === 2 ? "active" : ""}`}
          onClick={() => handleTabClick(2, "job")}
        >
          Jobs
        </button>
        <button
          className={`tab-button ${activeTab === 3 ? "active" : ""}`}
          onClick={() => handleTabClick(3, "matrimonial")}
        >
          Matrimony
        </button>
        <button
          className={`tab-button ${activeTab === 4 ? "active" : ""}`}
          onClick={() => handleTabClick(4, "buySell")}
        >
          Buy Sell
        </button>
        <button
          className={`tab-button ${activeTab === 5 ? "active" : ""}`}
          onClick={() => handleTabClick(5, "property")}
        >
          Property
        </button>
        <button
          className={`tab-button ${activeTab === 6 ? "active" : ""}`}
          onClick={() => handleTabClick(6, "blogs")}
        >
          Blogs
        </button>
      </div>
      {/* Uncomment and update this section to show tab content */}
      {/* <div className="tabs-content">
        {activeTab === 1 && <div className="tab-content">Events Content</div>}
        {activeTab === 2 && <div className="tab-content">Jobs Content</div>}
        {activeTab === 3 && <div className="tab-content">Matrimony Content</div>}
        {activeTab === 4 && <div className="tab-content">Buy Sell Content</div>}
        {activeTab === 5 && <div className="tab-content">Property Content</div>}
        {activeTab === 6 && <div className="tab-content">Blogs Content</div>}
      </div> */}
    </div>
  );
};

export default Stepper;
