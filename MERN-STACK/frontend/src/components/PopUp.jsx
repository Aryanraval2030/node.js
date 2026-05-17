import React, { useState } from "react";
import style from "../css/popUp.module.css";

function PopUp() {
  const formHandle = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={formHandle} className={style.container}>
        <h1>login</h1>
        <div className={style.inner}>
          <input type="text" name="" placeholder="enter your email" />
          <input type="password" name="" placeholder="enter your MPIN" />
        </div>
        <button type="submit">login</button>
      </form>
    </>
  );
}

export default PopUp;
