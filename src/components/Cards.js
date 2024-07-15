import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Explore Top Travel Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
            src="img-9.jpg"
            text="Explore Nature And Hidden Waterfalls.."
            label="Adventure"
            ></CardItem>
            <CardItem 
            src="img-2.jpg"
            text="Travel through the Islands of Bali in a Private Cruise"
            label="Luxury"
            ></CardItem>
          </ul>
          <ul className='cards__items'>
            <CardItem 
            src="img-4.jpg"
            text="Have A Look On Some Unseen Beautiful Spots.."
            label="Some Unseen Sopts"
            ></CardItem>
            <CardItem 
            src="img-3.jpg"
            text="Spend One Day Picnic With your Family And Friends.."
            label="Hill stataion"
            ></CardItem>
            <CardItem 
            src="img-8.jpg"
            text="A Tour To Historical Monuments.."
            label="History"
            ></CardItem>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;
