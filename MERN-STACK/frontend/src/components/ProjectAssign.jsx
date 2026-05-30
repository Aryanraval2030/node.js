import React from "react";
import style from "../css/ProjectAssignComp.module.css";

function ProjectAssign() {
  return (
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
  );
}

export default ProjectAssign;
