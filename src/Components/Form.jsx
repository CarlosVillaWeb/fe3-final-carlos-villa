import React from "react";
import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [values, setValues] = useState({
    name: "",
    email: "",
  })

  const [validation, setValidation] = useState(false)

  /*
  Aca se valida de que el campo Name cuente con nombre y apellido
  y cumpla con la cantidad de caracteres requeridos para ser valido
  */
  const validateName = () => {

    let nameUser = values.name.split(" ")

    if (nameUser.length < 2) return alert("Ingrese Nombre y apellido en el campo de Name")
    if (nameUser[0].length < 3 || nameUser[1].length < 3) return alert("Ingrese un nombre/apellido valido")

    return true

  }

  /*
  Aca validamos que el email contenga caracteres tales como @ y una extension valida de correo .com
  */
  const validateEmail = () => {

    let emailUser = values.email.split("@")
    if (emailUser.length < 2) return alert("Email incorrecto, debe contener una '@' y una extension valida como '.com'")

    let dotCom = emailUser[1].split(".")
    if (dotCom.length < 2) return alert("Email incorrecto, debe contener una '@' y una extension valida como '.com'")

    return true

  }
  
  // Aca analizamos los cambios que pueda tener el form para validar de ser necesario
  const handleChange = (e) => {

    const { target } = e
    const { name, value } = target

    const newValues = {
      ...values,
      [name]:value,
    }

    setValues(newValues)

  }

  // Con el boton submit se empieza la validacion de datos
  const handleSubmit = (e) => {

    e.preventDefault()

    let nameValidation = validateName()

    let emailValidation = validateEmail()

    if (nameValidation && emailValidation) {
      setValidation(true)
    }

  }

  return (
    <div className="container-formComponent">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" className="input-form" onChange={handleChange} />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" className="input-form" onChange={handleChange} />
        <button type="submit" className="btn-form">SUBMIT</button>
      </form>
      <div className="container-h3">
      {validation ? <h3 className="h3">Gracias por escribirnos {values.name}. En breve, un asistente se contactará lo antes posible con usted!</h3> : ""}
      </div>
    </div>
  );
};

export default Form;