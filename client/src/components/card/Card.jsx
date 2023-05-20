import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ allRecipes }) => {
  const { id, title, image, diets, healthScore } = allRecipes;

  return (
    <div className={style.cont}>
      <Link to={`/detail/${id}`} style={{color: 'inherit',
    textDecoration: 'none'}}>
        <div>
          <h2 className={style.name}>{title}</h2>
        </div>
      </Link>
      <div>
        <h3>{healthScore}</h3>
      </div>
      <div>
        <img src={image} alt={title} className={style.img} />
      </div>
      <div>
        <h3 className={style.diet} >
          <ol>{diets}</ol>
        </h3>
      </div>
    </div>
  );
};

export default Card;
