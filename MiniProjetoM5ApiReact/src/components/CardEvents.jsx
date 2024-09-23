import React from 'react';
import './style.css'; 
import Trash from '../assets/16qg.svg';

function Card({ event, onDelete }) {
  const handleDelete = async () => {
    try {
      await onDelete(event.id);
    } catch (error) {
      console.error("Erro ao excluir o evento:", error);
    }
  };

  return (
    <div className='card'>
      <h3 className='card__title'>{event.name}</h3>
      <p className='card__content'>Localização: {event.location}</p>
      <div className='card__date'>Data: {event.date}</div>
      <div className='card__arrow'>
        <button onClick={handleDelete}>
          <img src={Trash} alt="Delete Icon" />
        </button>
      </div>
    </div>
  );
}

export default Card;
