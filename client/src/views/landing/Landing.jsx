import React from "react";
import { Link } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={style.conteiner}>
      <p>Landing</p>
      <div className={style.cont}>
        <Link to="/home">
          <button>Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
