import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Product Features</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/img-9.jpg'
              text='Mobile Apps'
              label='Technicals'
              path='/services'
            />
            <CardItem
              src='./images/img-2.png'
              text='MES Integrations'
              label='Core'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='./images/img-3.jpg'
              text='Web Servers'
              label='Specialization'
              path='/services'
            />
            <CardItem
              src='./images/img-4.jpg'
              text='Real Time Dashboard'
              label='Premium'
              path='/products'
            />
            <CardItem
              src='./images/img-8.jpg'
              text='Recipe Management'
              label='Experience'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;