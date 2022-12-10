import axios from "axios";
import { useReducer } from "react";
import { useEffect, useState, createContext, useContext } from "react";

// Cambiamos de tema de claro a oscuro y viceversa con el useReducer
export const initialState = { theme: "light" }; 

const reducer = (state, action) => {
  switch (action.type) {
    case "theme":
      return { theme: state.theme === "light" ? "dark" : "light" };

    default:
      throw new Error();
  }
};

export const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  
  //Esto sirve para hacer el theme con useState
  const [theme, dispatch] = useReducer(reducer, initialState);
  const [dentist, setDentist] = useState([]);
  const [favourite, setFavourite] = useState([])  

  const KEY = "card.info"

  // Esto nos ayuda a agregar el odontologo favorito al localStorage del navegador
  useEffect(() => {
      const storedFavourite = JSON.parse(localStorage.getItem(KEY));
      if (storedFavourite) {
          setFavourite(storedFavourite)
      }
  }, [])
  
  // Esto agrega el dentista favorito al local storage
  useEffect(() => {
      localStorage.setItem(KEY, JSON.stringify(favourite))
  }, [favourite])

  // Las siguientes lineas nos ayudan a obtener a los dentistas favoritos
  const getDentist = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setDentist(res.data));
  };

  useEffect(() => {
    getDentist();
  }, []);

  return (
    <ContextGlobal.Provider
      value={{
        dentist,
        theme,
        dispatch,
        favourite,
        setFavourite,
      }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => {
  return useContext(ContextGlobal);
};