import './App.css';
import { useState, useEffect } from 'react';
import SingleCard from './component/SingleCard';

const cardImages = [
  { "src": "/img/helmet-1.png", matched: false },
  { "src": "/img/potion-1.png", matched: false },
  { "src": "/img/ring-1.png", matched: false },
  { "src": "/img/scroll-1.png", matched: false },
  { "src": "/img/shield-1.png", matched: false },
  { "src": "/img/sword-1.png", matched: false }
]

function App() {

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [disabled, setDisabled] = useState(false)

  const [choiceOne, setChoiseOne] = useState(null);
  const [choiceTwo, setChoiseTwo] = useState(null);
  
  const handleChoice =(card)=> {
    //oneliner
      choiceOne ? setChoiseTwo(card) : setChoiseOne(card)
      //ako nema kliknato na karticata i ne e prevrtena
      // if(choiceOne != null) {
      //   setChoiseTwo(card);
      // } else {
      //   setChoiseOne(card)
      // }
  }
  //koa se loadira ednas se izvrsuva ama choiceOne i choiceTwo se null inema niso da naprai
  useEffect(() => {
    //samo ako imaat vrednost dvete za da moze da se izvrsuva samo koga se kliknati dvete 
    if(choiceOne && choiceTwo) 
    {
      //da ne moze da klika
      setDisabled(true)
        if(choiceOne.src === choiceTwo.src) 
        {
          //update na state ako se poklopat
          setCards(prevCards => {
            //so prev ja zeame postoecka niza go naogjame po card.src koj element e i go setirame
            //matched true ako ne postoi ja vrakame card
            return prevCards.map(card => {
              if(card.src === choiceOne.src) {
                return {...card, matched: true}
              }else {
                return card
              }
            })
          })
          resetTurn();
        } else {

          //da ne ja gasi instant klasata na vrtenje
          setTimeout(() => {
            resetTurn();
          }, 1000);
         
        }
    }

  },[choiceOne, choiceTwo])

  useEffect(() => {
    shuffleCards();
    setChoiseOne(null)
    setChoiseTwo(null)


  },[])
  console.log(cards);
  //resetira odbiranje i go zgolemuva turn counter
  const resetTurn = () => {
    setChoiseOne(null)
    setChoiseTwo(null)
    setTurns(prevTurns => prevTurns + 1) 
    setDisabled(false) 
  }

  const shuffleCards =() => {
    //random kartici da dava sekoe new game
    const shuffleCards = [...cardImages, ...cardImages]
          .sort(() => Math.random() - 0.5)
          .map((card) => ({...card, id: Math.random() }))

          setCards(shuffleCards)
          setTurns(0)
  }


  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
      {cards.map(card => (
       <SingleCard 
       key={card.id} 
       card={card}
       handleChoice={handleChoice} 
       flipped={card === choiceOne || card === choiceTwo || card.matched}
       disabled={disabled}
       />
      ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}

export default App;
