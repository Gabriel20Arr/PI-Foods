import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getRecipesDetail, cleanDetail } from "../../redux/action";
import style from "./detail.module.css";

const Details = () => {
  const dispatch = useDispatch();
  const DetailRecipes = useSelector((state) => state.DetailRecipes);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getRecipesDetail(id));
    return () => {
      dispatch(cleanDetail());
    };
  }, [id]);

  const { title, image, summary, healthScore, steps, diets } = DetailRecipes;
  return (
    <div className={style.cont}>
      <div className={style.cont2}>
        <h2>{title}</h2>
        <img src={image} alt="" />
        <h3>
          {" "}
          <span dangerouslySetInnerHTML={{ __html: summary }} />{" "}
        </h3>
        <h3>{healthScore}</h3>
        <div>
          {steps ? (
            <div>
              {steps.map((step, index) => (
                <div key={index}>
                  <h2>Step {index + 1}</h2>
                  <p>{step.step}</p>
                  <h2>Ingredient</h2>
                  <ul>
                    {step.ingredients.map((ingredient, ingredientIndex) => (
                      <li key={ingredientIndex}>
                        {ingredient.name ? ingredient.name : ingredient}
                      </li>
                    ))}
                  </ul>
                  <h2>equipment</h2>
                  <ul>
                    {step.equipments.map((equipment, equipmentIndex) => (
                      <li key={equipmentIndex}>
                        {equipment.name ? equipment.name : equipment}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <h3><ol>{diets}</ol></h3>
      </div>
    </div>
  );
};

export default Details;
