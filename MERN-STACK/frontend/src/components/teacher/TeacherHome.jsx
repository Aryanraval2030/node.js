import React from "react";
import style from "../../style/teacher/TeacherComp.module.css";
function Teacher() {
  return (
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
  );
}

export default Teacher;
