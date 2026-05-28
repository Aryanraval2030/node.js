import React, { useState } from "react";
import style from "../css/Student.module.css";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa6";
function StudentDashboard() {
  const [open, setOpen] = useState(true);
  const [openSub, setOpenSub] = useState(true);
  const openCourse = () => {
    setOpen(!open);
  };
  const openSubHandle = () => {
    setOpenSub(!openSub);
  };
  return (
    <div className={style.container}>
      {/* student info */}
      <div className={style.outerStudentInfo}>
        <div className={style.studentInfo}>
          <div className={style.studentImg}>
            <img src="" alt="" />
          </div>

          <div className={style.studentInr}>
            <div className={style.inrInfo}>
              <p>name</p>
              <p>Aryan Raval</p>
            </div>
            <div className={style.inrInfo}>
              <p>GR id</p>
              <p>1234</p>
            </div>
            <div className={style.inrInfo}>
              <p>status</p>
              <p>ongoing</p>
            </div>
            <div className={style.inrInfo}>
              <p>Enrollment No.</p>
              <p>RWA4-5-25-177</p>
            </div>
            <div className={style.inrInfo}>
              <p>course</p>
              <p>Full Stack dev..</p>
            </div>
          </div>
        </div>

        {/* course info */}
        <div className={style.courseInfo}>
          <div className={style.courseInr}>
            <p>course</p>
            {open ? (
              <FaChevronDown onClick={openCourse} />
            ) : (
              <FaChevronUp onClick={openCourse} />
            )}
          </div>
          <div className={style.subjectInr}>
            {open && (
              <div>
                <div className={style.subHeader}>
                  <p>first subject</p>
                  {openSub ? (
                    <FaChevronDown onClick={openSubHandle} />
                  ) : (
                    <FaChevronUp onClick={openSubHandle} />
                  )}
                </div>
                {openSub && (
                  <div className={style.subDetails}>
                    <p>open subject</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* performance info */}
      <div className={style.performanceInfo}></div>
    </div>
  );
}

export default StudentDashboard;
