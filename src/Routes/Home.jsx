import React from 'react'
import { useContextGlobal } from '../Components/utils/global.context'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
// Funcion del home que muestra las cards con la informacion traida de las APIs
const Home = () => {

  const {dentist}= useContextGlobal()

  console.log(dentist);

  return (
    <main className="mainHome" >
      <h1>Home</h1>
      <div className='card-grid'>
      {dentist.map(dentist => (<Card key={dentist.id} data={dentist} />))}
      </div>
    </main>
  )
}

export default Home