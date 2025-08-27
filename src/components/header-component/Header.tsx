import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="topbar">
      {/* Left: Search */}
      <div className="global-search">
        <i className="bx bx-search"></i>
        <input type="text" placeholder="Search Pipedrive" />
      </div>

      {/* Center: Brand */}
      <div className="brand">
        <div className="bg_blue">
          <img
            src="src/assets/Images/Group 2974.png"
            alt="recruit crm"
            className="brand_logo"
          />
        </div>
        <span>recruit crm</span>
      </div>

      {/* Right: Actions */}
      <div className="actions">
        <button className="primary icon-btn">
          <i className="bx bx-plus"></i>
        </button>

        <div className="vertical_divider"></div>

        <div className="icon-btn">
          <i className="bx bx-gift"></i>
        </div>
        <div className="icon-btn">
          <i className="bx bx-envelope"></i>
        </div>
        <div className="icon-btn">
          <i className="bx bx-bell"></i>
        </div>

        <div className="user">
          <div className="avatar"></div>
          <div>
            <div className="user-name">Phyllis Yang</div>
            <div className="user-role">Silicon Links Inc</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
