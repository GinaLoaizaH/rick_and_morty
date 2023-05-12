// import style from './Card.module.css'
import { NavLink } from "react-router-dom";


function Card({ id, name, status, species, gender, origin, image, onClose }) {
   return (
      <div>
         <button onClick={() => onClose(id)}>Cerrar</button>

         <img src={image} alt='' />

         <NavLink to={`/detail/${id}`}>
            <h2>{name}</h2>
         </NavLink>

         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
      </div>
   );
}

export default Card;
