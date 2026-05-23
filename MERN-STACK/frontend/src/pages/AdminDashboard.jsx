import React, { useRef, useState } from "react";
import style from "../css/Admin.module.css";
import { MdOutlineDashboard } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiStudent } from "react-icons/pi";
import { IoBookSharp } from "react-icons/io5";
import { GrAnalytics } from "react-icons/gr";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { GiNotebook } from "react-icons/gi";
import SearchBtn from "../components/SearchBtn.jsx";
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
import RecentStu from "../components/RecentStu.jsx";
import CourseComplate from "../components/CourseComplate.jsx";

function AdminDashboard() {
  const [open, setOpen] = useState(false);

  const inputRef = useRef(null);

  const openSearchBar = () => {
    setOpen(!open);
    setTimeout(() => {
      inputRef.current.focus();
    }, 0);
  };

  return (
    <div className={style.container}>
      <div className={style.inr1}>
        <div className={style.textInr}>
          <h2>
            <MdOutlineDashboard /> Admin
          </h2>
          <p>Learning Management</p>
        </div>
        <div className={style.mainTextInr}>
          <h4>MAIN</h4>
          <p>
            <IoHomeOutline /> Dashboard
          </p>
          <p>
            <LiaChalkboardTeacherSolid /> teachers
          </p>
          <p>
            <PiStudent /> student
          </p>
          <p>
            <IoBookSharp /> courses
          </p>
          <p>
            <GrAnalytics /> Analytics
          </p>
          <h4>MANAGE</h4>
          <p>
            <GiNotebook /> Reports
          </p>
          <p>
            <IoIosNotificationsOutline />
            Notifications
          </p>
          <p>
            <IoSettingsOutline /> Settings
          </p>
        </div>
        <div className={style.lastInr}>
          <div className={style.rounded}>AD</div>
          <h3>Admin</h3>
        </div>
      </div>
      <div className={style.inr2}>
        <div className={style.textInr1}>
          <div className={style.textInr3}>
            <h2>Dashboard</h2>
            <p>Sunday, 17 May 2026</p>
          </div>
          {open ? <SearchBtn inputRef={inputRef} /> : null}

          <div className={style.outerSpan}>
            {/*  */}
            <span className={style.span} onClick={openSearchBar}>
              <FaSearch size="20px" />
            </span>
            <span className={style.span}>
              <IoIosNotifications size="20px" />
            </span>
            <span className={style.spanRound}>AD</span>
          </div>
        </div>
        <div className={style.textInr2}>
          <div className={style.textInr4}>
            <div className={style.box}>
              <p>
                <PiStudent /> total students
              </p>
              <p>2,841</p>
              <p>+12 this month</p>
            </div>
            <div className={style.box}>
              <p>
                <LiaChalkboardTeacherSolid /> total teachers
              </p>
              <p>2,841</p>
              <p>+12 this month</p>
            </div>
            <div className={style.box}>
              <p>
                <IoBookSharp /> total courses
              </p>
              <p>2,841</p>
            </div>
            <div className={style.box}>
              <p>
                <IoMdTime /> total review
              </p>
              <p>2,841</p>
              <p>+12 this month</p>
            </div>
          </div>

          <div className={style.recentActivity}>
            <div className={style.recentStudent}>
              <div className={style.recentInr}>
                <p>recent student</p>
                <p>view all</p>
              </div>
              <div className={style.students}>
                <RecentStu />
                <RecentStu />
                <RecentStu />
                <RecentStu />
                <RecentStu />
                <RecentStu />
              </div>
            </div>
            <div className={style.CourseCompletion}>
              <div className={style.recentInr}>
                <p>Top course completion</p>
                <p>view all</p>
              </div>
              <div className={style.students}>
                <CourseComplate courseName={"React.js"} progress={50} />
                <CourseComplate courseName={"node.js"} progress={20} />
                <CourseComplate courseName={"html"} progress={40} />
                <CourseComplate courseName={"css"} progress={90} />
                <CourseComplate courseName={"javascript"} progress={45} />
                <CourseComplate courseName={"Express.js"} progress={55} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
