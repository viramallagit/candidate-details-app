import React from "react";
import "./Sidebar.css"; // You can move sidebar-related CSS here

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="side-icon">
        <i className="bx bx-grid-alt"></i>
      </div>
      <div className="side-icon active">
        <i className="bx bx-user"></i>
      </div>
      <div className="side-icon">
        <i className="bx bx-buildings"></i>
      </div>
      <div className="side-icon">
        <i className="bx bx-file"></i>
      </div>
      <div className="side-icon">
        <i className="bx bx-briefcase"></i>
      </div>
      <div className="side-icon">
        <i className="bx bx-envelope"></i>
      </div>
      <div className="side-icon">
        <i className="bx bx-calendar"></i>
      </div>
      <div className="Horizontal_divider">

      </div>
      <div className="side-icon">
        <i className="bx bx-dollar-circle"></i>
      </div>
      <div className="side-icon">
        <i className="bx bx-time-five"></i>
      </div>
      <div className="side-icon">
        <i className="bx bx-credit-card"></i>
      </div>
      <div className="side-icon">
        <i className="bx bx-cog"></i>
      </div>
      <div className="side-icon">
        <i className="bx bx-dots-horizontal-rounded"></i>
      </div>
    </aside>
  );
};

export default Sidebar;
