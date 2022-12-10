import React from 'react'
import { useContextGlobal } from './utils/global.context'

// Funcion del footer de la pagina
const Footer = () => {
  const {theme} = useContextGlobal();
  console.log(theme.theme);

  // Se muestra el logo del footer, dependiendo del tema tendra un color u otro
  return (
    <footer className='footer' id={theme.theme}>
        <p>Powered by</p>
        {theme.theme === "light" ? <img src="./images/DH.png" alt='DH-logo'/> : <img src="./images/DH2.png" alt='DH2-logo'/>}
    </footer>
  )
}

// Como dice en ingles xD exportamos el footer
export default Footer;