import React, { useRef } from 'react';
import './TitleCards.css';
import Cards_data from '../../assets/cards/Cards_data';

const TitleCards = ({title, category}) => {

  const cardsRef = useRef(null);

  const scrollLeft = () => {
    if (cardsRef.current) {
      cardsRef.current.scrollLeft -= 300; // Adjust scroll speed
    }
  };

  const scrollRight = () => {
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += 300; // Adjust scroll speed
    }
  };

  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="scroll-buttons">
        <button className="scroll-left" onClick={scrollLeft}>&#8249;</button>
        <div className="card-list" ref={cardsRef}>
          {Cards_data.map((card, index) => (
            <div className='card' key={index}>
              <img src={card.image} alt={card.name} />
              <p>{card.name}</p>
            </div>
          ))}
        </div>
        <button className="scroll-right" onClick={scrollRight}>&#8250;</button>
      </div>
    </div>
  );
};

export default TitleCards;
