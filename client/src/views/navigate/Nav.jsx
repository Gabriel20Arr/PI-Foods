import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={style.cont}>
      <NavLink to="/home" style={{ textDecoration: "none", color: "inherit" }}>
        <span className={style.boton} >Home</span>
      </NavLink>
      <NavLink
        to="created"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <span className={style.boton} >Created</span>
      </NavLink>
    </div>
  );
};

export default Nav;
