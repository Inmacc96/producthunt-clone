import { useState, useEffect } from "react";

const useValidation = (initialState, validate, fnSubmit) => {
  //initialState: el estado inicial
  //validate: Lo que vamos a validar, basicamente las reglas de validación
  //fnSubmit: Función que se va a ejecutar cuando se haga el submit

  //Los valores que el usuario introduzca en los inputs
  const [data, setData] = useState(initialState);
  const [error, setError] = useState({});
  const [submitForm, setSubmitForm] = useState(false);

  useEffect(() => {
    if (submitForm) {
      //Comprueba si existe errores
      const noErrors = Object.keys(error).length == 0;

      //Si no hay errores, entonces ejecuta la función del submit
      if (noErrors) {
        fnSubmit();
      }

      setSubmitForm(false);
    }
  }, [error]);

  //Función que se ejecuta conforme el usuario escribe algo
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  //Función que se ejecuta cuando el usuario hace submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const errorsValidation = validate(data);
    setError(errorsValidation);
    setSubmitForm(true);
  };

  return {
    data,
    error,
    submitForm,
    handleChange,
    handleSubmit,
  };
};

export default useValidation;

//Este hook va a esperar que submitForm sea true para ejecutarse
