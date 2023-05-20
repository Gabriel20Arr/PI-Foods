export const validate = (input) => {
  const newError = {};
  const vTitle = /^[A-Za-z\s]+$/;
  const vImage =
    /^(https?:\/\/)?[\w.-]+(\/\S+)+\.(png|jpe?g|gif|bmp|svg|jpeg;base64)/i;
  const vHealthScore = /^[0-9]/;

  if (!vTitle.test(input.title)) {
    newError.title = "Formato inválido";
  } else {
    newError.title = "";
  }

  if (!input.summary.length) {
    newError.summary = "Espacio obligatorio";
  } else {
    newError.summary = "";
  }

  if (!vImage.test(input.image)) {
    newError.image = "Debe ser una URL válida";
  } else {
    newError.image = "";
  }

  if (!vHealthScore.test(input.health_Score)) {
    newError.health_Score = "Debe ser un valor numérico";
  } else {
    newError.health_Score = "";
  }

  return newError;
};
