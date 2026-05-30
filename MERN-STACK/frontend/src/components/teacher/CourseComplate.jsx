import React, { useEffect, useState } from "react";
import style from "../../style/teacher/CourseComplate.module.css";
function CourseComplate({ progress, courseName }) {
  const [animated, setAnimated] = useState(0);
  useEffect(() => {
    setTimeout(() => setAnimated(progress), 100);
  }, [progress]);
  return (
    <div className={style.outer}>
      <div className={style.inr}>
        <p>{courseName}</p>
      </div>
      <div className={style.progressFill}>
        <div
          className={style.proFillInr}
          style={{
            width: `${animated}%`,
            background: progress < 0 ? "rgb(160, 65, 250)" : "blueviolet",
          }}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
}

export default CourseComplate;
