import React from "react";
import style from "../../style/teacher/TeacherDashboard.module.css";

import { NavLink, Outlet } from "react-router-dom";

function TeacherDashboard() {
  return (
    <div className={style.teacherDashboard}>
      <div className={style.navbar}>
        <h2>Teacher Panel</h2>

        <div className={style.navLinks}>
          <NavLink end to="/teacher-dashboard">
            Home
          </NavLink>

          <NavLink to="/teacher-dashboard/attendance">Attendance</NavLink>

          <NavLink to="/teacher-dashboard/projects">Projects</NavLink>
        </div>
      </div>

      {/* Child Routes Render */}
      <Outlet />
    </div>
  );
}

export default TeacherDashboard;
