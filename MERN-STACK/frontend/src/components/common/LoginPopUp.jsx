import React, { useState } from "react";
import style from "../css/LoginPopUp.module.css";

function LoginPopUp() {
  const [show, setShow] = useState(false);
  const formHandle = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={formHandle} className={style.container}>
        <h1>login</h1>
        <div className={style.inner}>
          <input
            className={style.searchBtn}
            type="text"
            name=""
            placeholder="enter your email"
          />
          <div className={style.inr}>
            <input
              type={show ? "text" : "password"}
              name=""
              className={style.popUpSearch}
              placeholder="enter your MPIN"
            />
            <button className={style.show} onClick={() => setShow(!show)}>
              👁️
            </button>
          </div>
        </div>
        <button type="submit" className={style.button}>login</button>
      </form>
    </>
  );
}

export default LoginPopUp;
