import React from "react";
import style from "../css/AttendanceComp.module.css";

// teacher can submit attendence component
function Attendance() {
  return (
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
  );
}

export default Attendance;
