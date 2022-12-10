import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
//Funcion con el form para contactar en la app
const Contact = () => {
  return (
    <div className='container-form'>
      <h2>Do you want more information?</h2>
      <p>Send us your questions and an advisor will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact