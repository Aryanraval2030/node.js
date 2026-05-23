import React from "react";
import style from "../css/Signup.module.css";
import { MdSecurity } from "react-icons/md";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiStudent } from "react-icons/pi";

function Signup() {
  return (
    <div className={style.container}>
      <div className={style.inrContainer}>
        <div className={style.heading}>
          <h1>create account</h1>
        </div>
        <form className={style.form}>
          <div>
            <div>
              <p>first name</p>
              <input
                className={style.signupInputs}
                id="name"
                type="text"
                placeholder="Raj"
              />
            </div>
            <div>
              <p>last name</p>
              <input
                className={style.signupInputs}
                id="secondName"
                type="text"
                placeholder="Kumar"
              />
            </div>
          </div>

          <div className={style.secondDivs}>
            <p>email address</p>
            <input
              className={style.signupInputs1}
              id="mail"
              type="mail"
              placeholder="raj@gmail.com"
            />
          </div>
          <div className={style.secondDivs}>
            <p>phone number</p>
            <input
              className={style.signupInputs1}
              inumberd="tel"
              type="tel"
              placeholder="+91 64051 08612"
            />
          </div>
          <div className={style.secondDivs}>
            <p>password</p>
            <input
              className={style.signupInputs1}
              id="password"
              type="password"
              placeholder="Min. 8 Characters"
            />
          </div>
          <div className={style.roleDiv}>
            <p>choose youre role</p>
            <div className={style.roleDivInr}>
              <div className={style.roleBoxes}>
                <PiStudent fontSize={"35px"}/>
                <p>student</p>
                <p>study</p>
              </div>
              <div className={style.roleBoxes}>
                <LiaChalkboardTeacherSolid fontSize={"35px"}/>
                <p>teacher</p>
                <p>create course</p>
              </div>
              <div className={style.roleBoxes}>
                <MdSecurity fontSize={"35px"}/>
                <p>admin</p>
                <p>Full access</p>
              </div>
            </div>
          </div>
          <button type="submit" className={style.signupBtn}>
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
