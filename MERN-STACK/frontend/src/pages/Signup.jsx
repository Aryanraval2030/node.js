import React from "react";
import style from "../css/Signup.module.css";
import { MdSecurity } from "react-icons/md";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiArrowsInCardinalThin, PiStudent } from "react-icons/pi";
import { useState } from "react";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../apis/api.js";

function Signup() {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    role: "",
    // profilePic: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRole = (selectRole) => {
    setFormData({
      ...formData,
      role: selectRole,
    });
    setError("");
  };
  const formHandle = async (e) => {
    e.preventDefault();

    if (!formData.role) {
      return setError("Please select a role");
    }
    try {
      const data = await signupUser(formData);
      console.log(data);
      setError("");
      if (data.data.role === "admin") {
        navigate("/admin-dashboard");
      }
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        role: "",
      });
      alert("Signup Successful");
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.inrContainer}>
        <div className={style.heading}>
          <h1>create account</h1>
        </div>
        <form className={style.form} onSubmit={formHandle}>
          {error && <p className={style.error}>{error}</p>}

          <div className={style.profilePic}>
            <MdOutlineAddAPhoto className={style.pick} fontSize={"20px"} />
          </div>

          <div>
            <div className={style.name}>
              <p>first name</p>
              <input
                className={style.signupInputs}
                id="name"
                onChange={handleChange}
                name="firstName"
                required
                type="text"
                placeholder="Raj"
              />
            </div>
            <div className={style.name}>
              <p>last name</p>
              <input
                className={style.signupInputs}
                id="secondName"
                onChange={handleChange}
                type="text"
                name="lastName"
                placeholder="Kumar"
                required
              />
            </div>
          </div>

          <div className={style.secondDivs}>
            <p>email address</p>
            <input
              className={style.signupInputs1}
              id="email"
              required
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="raj@gmail.com"
            />
          </div>
          <div className={style.secondDivs}>
            <p>phone number</p>
            <input
              className={style.signupInputs1}
              type="tel"
              minLength={10}
              onChange={handleChange}
              required
              name="phone"
              placeholder="+91 64051 08612"
            />
          </div>
          <div className={style.secondDivs}>
            <p>password</p>
            <input
              className={style.signupInputs1}
              id="password"
              minLength={8}
              onChange={handleChange}
              name="password"
              required
              type={show ? "text" : "password"}
              placeholder="Min. 8 Characters"
            />
            <button
              className={style.showPassword}
              onClick={() => setShow(!show)}
              type="button"
            >
              👁️
            </button>
          </div>
          <div className={style.roleDiv}>
            <p>choose youre role</p>
            <div className={style.roleDivInr}>
              <div
                className={style.roleBoxes}
                onClick={() => handleRole("student")}
              >
                <PiStudent fontSize={"35px"} />
                <p>student</p>
                <p>study</p>
              </div>
              <div
                className={style.roleBoxes}
                onClick={() => handleRole("teacher")}
              >
                <LiaChalkboardTeacherSolid fontSize={"35px"} />
                <p>teacher</p>
                <p>create course</p>
              </div>
              <div
                className={style.roleBoxes}
                onClick={() => handleRole("admin")}
              >
                <MdSecurity fontSize={"35px"} />
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
