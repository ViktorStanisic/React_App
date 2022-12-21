import React from 'react'
import './SingleCard.css';

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
      const handleClick = () => {
            //da klika samo ako ne e odbrana karta
           if(!disabled) handleChoice(card)
      }
      return (
            <div className="card">
                  <div className={flipped ? "flipped" : ""}>
                        <img className="front" src={card.src} alt="card front" />
                        <img className="back" 
                        src="/img/cover.png" 
                        onClick={handleClick} 
                        alt="back card" />
                  </div>
            </div>

      )
}
