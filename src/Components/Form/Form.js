import React, { useState } from "react";
import NavBar from "../Navbar/NavBar";
import style from "./Form.module.css";
import SideLog from "../../Assets/sideLogo.png";
import { Link, useNavigate } from "react-router-dom";

const Form = () => {
  let [name, setName] = useState("");
let [password, setPassword] = useState("");
  let navigator = useNavigate();

  const sumbitForm = () => {
    if (name == "admin" && password == "admin") {
      navigator("/dashboard")
      name = "";
      password = "";
    } else if (name == "" || password == "") {
      alert("Your field is empty");
    } else {
      alert("Invalid password or email");
    }
  };

  return (
    <div className={style.mainBox}>
      <NavBar />

      <div className={style.bottomBox}>
        <h3>Welcome!</h3>
        <p>
          Use these awesome forms to login or create new account in your project
          for free.
        </p>
      </div>
      <div className={style.imgAndForm}>
        <div className={style.sideBox}>
          <img src={SideLog} width="100%" />
        </div>
        <div className={style.formBox}>
          <p>Sign in width credentials</p>

          <section>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <p>Remember Me</p>
          </section>
          {/* <Link to={"/dashborad"}> */}
          <button onClick={sumbitForm}>Sign In</button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Form;
