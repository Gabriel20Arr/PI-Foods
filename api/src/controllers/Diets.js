const axios = require("axios");
require("dotenv").config();

const { API_KEY, API_KEY_2, API_KEY_3, API_KEY_4 } = process.env;
const { Diet } = require("../db");

const getDiet = async (req, res) => {
  try {
    const dietsApi = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY_4}&addRecipeInformation=true&number=100`
    );
    const dietArray = dietsApi.data.results?.map((recipe) => recipe.diets);
    const dietsEach = dietArray.flat();
    const diets = [...new Set(dietsEach)];
    console.log(diets);

    diets.forEach((diet) => {
      Diet.findOrCreate({
        where: {
          name: diet,
        },
      });
    });

    res.status(200).json(diets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getDiet;

/*

const getAllDiets = async (req, res) => { 
  const resDiet = await Diet.findAll({
    attributes: ["name", "id"],
  });

return resDiet;
}

*/
