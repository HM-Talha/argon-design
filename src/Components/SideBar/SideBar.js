import React from "react";
import Logo from "../../Assets/Logo1.png";
import SideLogo from "../../Assets/sideLogo.png";
import Basket from "../../Assets/basket.png";
import bag from "../../Assets/bag.png";
import FB from "../../Assets/fb.png";
import Mail from "../../Assets/mail.png";
import Bell from "../../Assets/bell.png";
import SqFb from "../../Assets/squarefb.png";
import Message from "../../Assets/message.png";
import Home from "../../Assets/Home.png";
// import Home from "../../Assets/Home.png";
import style from "./Sidebar.module.css";
import Cards from "../Cards/Cards";
import GraphTemperature from "../GraphTemperature/GraphTemperature";
import Table from "../Table/Table";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className={style.sidebarBox}>
        <section className={style.imgBox}>
          <img src={Logo} width="100%" />
        </section>
        <section className={style.homeBox}>
          <div>
            <img src={Home} width="100%" />
          </div>
          <p>Dashborad</p>
        </section>
        <section>
          <Link to="/">
            <section className={style.homeBox}>
              <div>
                <img src={Logo} width="100%" />
              </div>

              <p>SignIn</p>
            </section>
          </Link>
          <section className={style.homeBox}>
            <div>
              <img src={SideLogo} width="100%" />
            </div>
            <p>Maps</p>
          </section>
          <section className={style.homeBox}>
            <div>
              <img src={Basket} width="100%" />
            </div>
            <p>USer Profile</p>
          </section>
          <section className={style.homeBox}>
            <div>
              <img src={bag} width="100%" />
            </div>
            <p>Tables</p>
          </section>

          <section className={style.homeBox}>
            <div>
              <img src={FB} width="100%" />
            </div>
            <p>Login</p>
          </section>
          <section className={style.homeBox}>
            <div>
              <img src={Mail} width="100%" />
            </div>
            <p>Register</p>
          </section>
        </section>

        <section className={style.homeBox}>
          <div>
            <img src={Bell} width="100%" />
          </div>
          <p>Documentation</p>
        </section>

        <section>
          <section className={style.homeBox}>
            <div>
              <img src={SqFb} width="100%" />
            </div>
            <p>Getting Started</p>
          </section>

          <section className={style.homeBox}>
            <div>
              <img src={Message} width="100%" />
            </div>
            <p>Foundation</p>
          </section>

          <section className={style.homeBox}>
            <div>
              <img src={bag} width="100%" />
            </div>
            <p>Component</p>
          </section>
        </section>
      </div>

      <main className={style.sideMainBOx}>
        <header className={style.sideBox}>
          <section>
            <p>DASHBOARD</p>
          </section>

          <section className={style.nav}>
            <div className={style.inpBox}>
              <span className={style.srchIcon}>
                <i className="fa-solid fa-magnifying-glass" />
              </span>
              <input type="text" placeholder="Search" />
            </div>
            <div className={style.profile}>
              <section className={style.navImgBox}>
                <img src={Basket} width="100%" />
              </section>
              <p>Jessica Jones</p>
            </div>
          </section>
        </header>

        <div>
          <Cards />
        </div>
      </main>
      <main className={style.forColor}>
        <GraphTemperature />
        <Table />
      </main>
    </>
  );
};

export default SideBar;
