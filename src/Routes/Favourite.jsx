import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favourite = () => {
  const {favourite} = useContextGlobal()

  return (
    <>
      <h1>Dentists Favourite</h1>
      <div className="container-favourite">
        {favourite.map(item =>{
          return(
            <Link to={`/detail/${item.id}`} key={item.id} className="link-card">
              <div className="card-grid">
                {/* este componente debe consumir los destacados del localStorage */}
                <div className="card">
                  <h3>{item.id}</h3>
                  <img src="./images/doctor.jpg" alt="img-doc" className="img-doc" />
                  <h4>{item.name}</h4>
                  <h5>{item.username}</h5>
                </div>
                {/* Deberan renderizar una Card por cada uno de ellos */}
              </div>
            </Link>
          )})}        
      </div>
    </>
  );
};

export default Favourite;
