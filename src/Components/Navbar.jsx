import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {dispatch, theme} = useContextGlobal()

  return (
    <nav className='nav' id={theme.theme}>
      
      <img className='img-navbar' src="./images/DHOdonto.png" alt="Logo DH Odonto" />      

      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div className='links-navbar'>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/favourite'>Favourite</Link>
      </div>
      <input id="dark-mode" class="toggle" type="checkbox" name="Dark mode" role="switch" value="on" onClick={() => dispatch({type: "theme"})}/>
      
      <label for="dark-mode" class="sr">
      </label>
    </nav>
  )
}

export default Navbar