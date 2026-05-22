import React, { useState } from "react";
import style from "../css/popUp.module.css";

function PopUp() {
  const [show, setShow] = useState(false);
  const formHandle = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className={style.system}>
        <h1>learning mangement system</h1>
      </div>
      <form onSubmit={formHandle} className={style.container}>
        <h1>login</h1>
        <div className={style.inner}>
          <input type="text" name="" placeholder="enter your email" />


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
        <button type="submit">login</button>
      </form>
    </>
  );
}

export default PopUp;
