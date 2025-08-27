import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar-component/Sidebar";
import Header from "./components/header-component/Header";

const tabs = [
  "All Details",
  "Assigned Jobs",
  "Related Emails",
  "Candidate Questions",
  "Hotlists",
  "Related Deals",
  "Contact(s) Pitched",
];

function App() {
  const [activeTab, setActiveTab] = useState("Assigned Jobs");
  const [isToggled, setIsToggled] = useState(true);

  const renderTabPanel = () => {
    switch (activeTab) {
      case "Assigned Jobs":
        return (
          <div className="tabpanel">
            <div className="job-list">
              {[1, 2, 3].map((i) => (
                <div key={i} className="job-item">
                  <div className="job-avatar">M</div>
                  <div>
                    <div className="job-title">Senior Product Manager</div>
                    <div className="job-sub">Recruit CRM</div>
                  </div>
                  <div>
                    <div>
                      <i className="bx bx-user"></i>{" "}
                      <span className="text_muted"> williamsample</span>
                    </div>
                    <div>
                      <i className="bx bx-user"></i>{" "}
                      <span className="text_muted"> Jul 10, 2023</span>
                    </div>
                  </div>
                  <div className="pill">Assigned</div>
                  <div>
                    <button className="view_btn">View Files</button>
                  </div>

                  <div
                    className={`custom-toggle ${isToggled ? "on" : ""}`}
                    onClick={() => setIsToggled(!isToggled)}
                  />
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return (
          <div className="tabpanel">
            <p>{activeTab} content will appear here.</p>
          </div>
        );
    }
  };

  return (
    <div className="app_container">
      <Sidebar />
      <div className="content_wrapper">
        <Header />
        <main className="content">
          <div className="main_layout">
            {/* Candidate Section */}
            <section className="candidate_section">
              <div className="header_bar">
                {/* Breadcrumb */}
                <div className="breadcrumb">
                  <span className="link">Candidates</span>
                  <span className="separator">›</span>
                  <span className="link">Robert Hardy</span>
                  <span className="id-tag">ID - 231</span>
                </div>

                {/* Action Buttons */}
                <div className="action_buttons">
                  <button className="update_btn">Request Profile Update</button>
                  <button className="contact_btn">Previous</button>
                  <button className="contact_btn">Next</button>
                </div>
              </div>
              <div className="candidate_top">
                <div className="candidate_details">
                  <img
                    className="profile_img"
                    src="src/assets/Images/Profile_img.png"
                    alt="Profile"
                  />

                  <div className="candidate_name_block">
                    <div className="candidate_profile">
                      <h2 className="candidate_name">William Sample</h2>
                      <div className="socials_icons">
                        <img
                          src="src/assets/Images/icons/Group 41.png"
                          alt=""
                        />
                        <img
                          src="src/assets/Images/icons/Group 40.png"
                          alt=""
                        />
                        <img
                          src="src/assets/Images/icons/Group 39.png"
                          alt=""
                        />
                        <img
                          src="src/assets/Images/icons/Group 38.png"
                          alt=""
                        />
                        <img
                          src="src/assets/Images/icons/Group 37.png"
                          alt=""
                        />
                      </div>
                    </div>

                    <div className="Location_details">
                      <p>Senior Product Manager</p>
                      <p>United States</p>
                      <p>Dallas</p>
                    </div>
                  </div>
                </div>

                <div className="candidate_right_actions">
                  <button className="btn_contact_linked">Contact Linked</button>
                  <button className="icon_button">
                    <i className="bx bx-star"></i>
                  </button>
                  <button className="icon_button">
                    <img
                      src="src/assets/Images/vector.png"
                      alt="recruit crm"
                      className="brand_logo"
                    />
                  </button>
                  <button className="icon_button">
                    <i className="bx bx-pencil"></i>
                  </button>
                  <button className="icon_button">
                    <i className="bx bx-dots-vertical-rounded"></i>
                  </button>
                </div>
              </div>

              {/* Contact Bar */}
              <div className="candidate_contact_bar">
                <div className="contact_item">
                  <i className="bx bx-envelope"></i> williamsample@gmail.com
                </div>
                <div className="contact_item">
                  <i className="bx bx-phone"></i> +91 9021232326
                </div>
                <div className="contact_item">
                  <i className="bx bx-user"></i> Phyllis Yang
                </div>
                <div className="contact_item">
                  <i className="bx bx-time"></i> Jul 14, 2023, 4:04 pm
                </div>
              </div>

              {/* Candidate Info */}
              <div className="candidate_info_box">
                <p>
                  <strong>Current Organization:</strong> World Bank Group
                </p>
                <p>
                  <strong>Summary:</strong> Current Organization
                </p>
                <p>
                  <strong>Skills:</strong> HTML, CSS, Javascript
                </p>
                <p>
                  <strong>Current Employment Status:</strong> Employed
                </p>
                <p>
                  <strong>Available From:</strong> Jul, 14, 2023
                </p>
                <p>
                  <strong>Date of Birth:</strong> 15 June 1993
                </p>
                <p>
                  <strong>Current Salary:</strong> $6000
                </p>
                <p>
                  <strong>Relevant Experience:</strong> 7 Years
                </p>
                <p>
                  <strong>Notice Period:</strong> 90 Days
                </p>
                <p>
                  <strong>Salary Expectation:</strong> $9000
                </p>
                <p>
                  <strong>Full Address:</strong> 9400 Ashton Rd, Philadelphia
                </p>
                <p>
                  <strong>Status:</strong> Submitted to Client
                </p>
                <p>
                  <strong>Resume:</strong> Resume
                </p>
                <p>
                  <strong>Salary Type:</strong> Annual
                </p>
                <p>
                  <strong>Total Experience:</strong> 5 Years
                </p>
                <p>
                  <strong>Language Skills:</strong> English (Elementary
                  proficiency)
                </p>
              </div>

              {/* Tabs */}
              <div className="tabs">
                {tabs.map((tab) => (
                  <div
                    key={tab}
                    className={`tab ${activeTab === tab ? "active" : ""}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </div>
                ))}
              </div>

              {renderTabPanel()}
            </section>

            {/* Right Aside */}
            <aside className="card Aside_right">
              <div className="segment-tabs ">
                <div className="seg">
                  <i className="bx bx-note"></i>
                </div>
                <div className="seg">
                  <i className="bx bx-phone"></i>
                </div>
                <div className="seg">
                  <i className="bx bx-task"></i>
                </div>
                <div className="seg">
                  <i className="bx bx-calendar-event"></i>
                </div>
                <div className="seg">
                  <i className="bx bx-file"></i>
                </div>
              </div>

              <div className="seg-tabs labels">
                <div className="seg active">All</div>
                <div className="seg">Notes & Calls</div>
                <div className="seg">Tasks</div>
                <div className="seg">Meeting</div>
                <div className="seg">Files</div>
              </div>

              <div className="feed">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="note-card">
                    <div className="note-header">
                      <span className="tag">Note</span>
                      <span className="tag">To Do</span>
                    </div>
                    <div className="note-text">
                      Lorem dolore sit et aute cupidatat eu Lorem tempor
                      proident consequat.
                    </div>
                    <div className="title">
                      <i className="bx bx-link-alt"></i> 1 Association(s)
                    </div>
                    <div className="row meta">
                      <i className="bx bx-user"></i> John Doe
                      <span className="dot"></span> Jul 12, 2023, 11:54 am
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
