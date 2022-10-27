//Reglas de validación
export default function validateSignUp(data) {
  let errors = {};

  //Validar el nombre del usuario
  if (!data.name) {
    errors.name = "The name field is required";
  }

  //Validar el email
  if (!data.email) {
    errors.email = "The email field is required";
  }
  //Comprobar que el email tiene la estructura xxx@xxx.xx
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
    errors.email = "Invalid email";
  }

  //Validar el password
  if (!data.password) {
    errors.password = "The password field is required";
  } else if (data.password.length < 6) {
    errors.password = "Password must contain at least 6 characters";
  }

  return errors;
}
