import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Одбери го посакуваниот апартман!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/apartm3.jpg'
              text='Трајкоски '
              label='Апартман'
              path='/products'
            />
            <CardItem
              src='/images/struga.jpg'
              text='Стефаноски '
              label='Апартман'
              path='/products'
            />
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Cards;