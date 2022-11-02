//Reglas de validación
export default function validateNewProduct(data) {
  let errors = {};

  //Validar el nombre del usuario
  if (!data.name) {
    errors.name = "The name field is required";
  }

  //Validar el nombre de la empresa
  if (!data.company) {
    errors.company = "The company field is required";
  }

  // Validar la URL
  if (!data.url) {
    errors.url = "The product URL is required.";
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(data.url)) {
    errors.url = "Invalid URL";
  }

  // Validar descripción
  if (!data.description) {
    errors.description = "Add a description of your new product";
  }

  return errors;
}
