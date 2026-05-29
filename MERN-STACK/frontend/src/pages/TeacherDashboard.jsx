import React from "react";
import style from "../css/TeacherDashboard.module.css";

function TeacherDashboard() {
  return (
    <div className={style.teacherDashboard}>
      {/* Navbar */}
      <div className={style.navbar}>
        <h2>Teacher Panel</h2>

        <div className={style.navLinks}>
          <p>Home</p>
          <p>Attendance</p>
          <p>Projects</p>
        </div>
      </div>

      {/* HOME SECTION */}
      <div className={style.topicSection}>
        <div className={style.topicHeader}>
          <h3>Topics</h3>
        </div>

        <div className={style.topicCard}>
          <div className={style.inrLabel}>
            <p className={style.label}>Topic Name</p>
            <p className={style.label}>20-2-26</p>
          </div>
          <div className={style.otrLabel}>
            <p>React State Management</p>
            <p>React State Management</p>
            <p>React State Management</p>
            <p>React State Management</p>
            {/* <div className={style.topicBottom}> */}
              <div className={style.checkboxArea}>
                <input type="checkbox" />
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* ATTENDANCE SECTION */}
      <div className={style.attendanceSection}>
        <div className={style.attendanceCard}>
          <table className={style.attendanceTable}>
            <thead>
              <tr>
                <th>Student</th>
                <th>Email</th>
                <th>GR ID</th>
                <th>Phone</th>
                <th>ID Card</th>
                <th>Present</th>
                <th>Reason</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Aryan Raval</td>
                <td>aryan@gmail.com</td>
                <td>GR2026-102</td>
                <td>+91 9876543210</td>

                <td>
                  <div className={style.toggleBox}>
                    <label className={style.switch}>
                      <input type="checkbox" />
                      <span className={style.slider}></span>
                    </label>
                  </div>
                </td>

                <td>
                  <div className={style.toggleBox}>
                    <label className={style.switch}>
                      <input type="checkbox" />
                      <span className={style.slider}></span>
                    </label>
                  </div>
                </td>

                <td>
                  <input
                    type="text"
                    placeholder="Reason..."
                    className={style.reasonInput}
                  />
                </td>
              </tr>

              <tr>
                <td>Rahul Shah</td>
                <td>rahul@gmail.com</td>
                <td>GR2026-204</td>
                <td>+91 9988776655</td>

                <td>
                  <div className={style.toggleBox}>
                    <label className={style.switch}>
                      <input type="checkbox" />
                      <span className={style.slider}></span>
                    </label>
                  </div>
                </td>

                <td>
                  <div className={style.toggleBox}>
                    <label className={style.switch}>
                      <input type="checkbox" />
                      <span className={style.slider}></span>
                    </label>
                  </div>
                </td>

                <td>
                  <input
                    type="text"
                    placeholder="Reason..."
                    className={style.reasonInput}
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <button className={style.attendanceBtn}>Submit Attendance</button>
        </div>
      </div>

      {/* PROJECT SECTION */}
      <div className={style.section}>
        <div className={style.sectionHeader}>
          <h3>Project Submissions</h3>
        </div>

        <div className={style.projectCard}>
          <div className={style.projectLeft}>
            <h4>Rahul Shah</h4>
            <p>rahul@gmail.com</p>

            <div className={style.projectMeta}>
              <span>GR2026-204</span>
              <span>+91 9988776655</span>
            </div>
          </div>

          <div className={style.projectStatus}>
            <span className={style.completed}>Submitted</span>
          </div>
        </div>

        <div className={style.projectCard}>
          <div className={style.projectLeft}>
            <h4>Riya Patel</h4>
            <p>riya@gmail.com</p>

            <div className={style.projectMeta}>
              <span>GR2026-301</span>
              <span>+91 9123456789</span>
            </div>
          </div>

          <div className={style.projectStatus}>
            <span className={style.pending}>Pending</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherDashboard;
