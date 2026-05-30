import React, { useState } from "react";
import style from "../../style/student/Student.module.css";
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
      <div className={style.main}>
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
                    <p> HTML-ROHIT SISODIYA-10:00A.M</p>
                    {openSub ? (
                      <FaChevronDown onClick={openSubHandle} />
                    ) : (
                      <FaChevronUp onClick={openSubHandle} />
                    )}
                  </div>
                  {openSub && (
                    <div className={style.subDetails}>
                      <p>introduce</p>
                      <p>heading</p>
                      <p>sementic tags</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        {/* performance info */}
        <div className={style.performanceInfo}>
          {/* Attendance Card */}
          <div className={style.performanceCard}>
            <div className={style.top}>
              <div>
                <p className={style.label}>Attendance</p>
                <h2>92%</h2>
              </div>

              <div className={style.circle}>
                <span>92%</span>
              </div>
            </div>

            <div className={style.progressBar}>
              <div className={style.progress}></div>
            </div>

            <div className={style.bottom}>
              <div>
                <p>Present</p>
                <h4>138 Days</h4>
              </div>

              <div>
                <p>Absent</p>
                <h4>12 Days</h4>
              </div>

              <div>
                <p>Status</p>
                <h4>Excellent</h4>
              </div>
            </div>
          </div>

          {/* Performance Card */}
          <div className={style.performanceCard}>
            <div className={style.top}>
              <div>
                <p className={style.label}>Performance</p>
              </div>

              <div className={style.circle2}>
                <span>A+</span>
              </div>
            </div>

            <div className={style.progressBar}>
              <div className={style.progress2}></div>
            </div>

            <div className={style.bottom}>
              <div>
                <p>Assignments</p>
                <h4>24/26</h4>
              </div>

              <div>
                <p>Tests</p>
                <h4>91%</h4>
              </div>

              <div>
                <p>Rank</p>
                <h4>#12</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fees Card */}
      <div className={style.feesCard}>
        <div className={style.feesTop}>
          <div>
            <p>Due Date</p>
            <h4>28 May 2026</h4>
          </div>
          <div className={style.feesStatus}>pending</div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
