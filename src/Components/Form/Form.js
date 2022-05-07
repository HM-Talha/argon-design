import React from "react";
import NavBar from "../Navbar/NavBar";
import style from "./Form.module.css";
import SideLog from "../../Assets/sideLogo.png";
import { Link } from "react-router-dom";
const Form = () => {
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
            <input type="email" />
            <br />
            <input type="password" />
            <p>Remember Me</p>
          </section>
          <Link to={"/dashborad"}>
            <button>Sign In</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Form;
