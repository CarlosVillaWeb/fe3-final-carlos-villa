import React from "react";
import { useState} from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";

// Obtenemos la informacion del Context Global aqui
const Card = ({ data }) => {

  const {theme, setFavourite, favourite} = useContextGlobal();

  const [active, setActive] = useState(false)

  const addFavourite = ()=>{
    setFavourite([
      ...favourite,
      data,
    ])
  };
  // Devolvemos la card con su logica
  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <Link to={`/detail/${data.id}`} key={data.id} className="link-card">
        <h3>{data.id}</h3>
        <img src="./images/doctor.jpg" alt="img-doc" className="img-doc" />
        <h4>{data.name}</h4>
        <h5>{data.username}</h5>
      </Link>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={() => {
        addFavourite() 
        setActive(!active)}} 
        className={`favButton ${active ? "active" : ""}`} id={theme.theme}>
        ⭐Add Favourite⭐
      </button>
    </div>
  )
};

export default Card;
