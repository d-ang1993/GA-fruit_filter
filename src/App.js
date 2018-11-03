import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FruitContainer from './FruitContainer';

const fruitList = [
  'Acai',
  'Aceola',
  'Apple',
  'Apricots',
  'Avocado',
  'Banana',
  'Blackberry',
  'Blueberries',
  'Camu Camu berry',
  'Cherries',
  'Coconut',
  'Cranberry',
  'Cucumber',
  'Currents',
  'Dates',
  'Durian',
  'Fig',
  'Goji berries',
  'Gooseberry',
  'Grapefruit',
  'Grapes',
  'Jackfruit',
  'Kiwi',
  'Kumquat',
  'Lemon',
  'Lime',
  'Lucuma',
  'Lychee',
  'Mango',
  'Mangosteen',
  'Melon',
  'Mulberry',
  'Nectarine',
  'Orange',
  'Papaya',
  'Passion Fruit',
  'Peach',
  'Pear',
  'Pineapple',
  'Plum',
  'Pomegranate',
  'Pomelo',
  'Prickly Pear',
  'Prunes',
  'Raspberries',
  'Strawberries',
  'Tangerine/Clementine',
  'Watermelon'
]

class App extends Component {
  render() {
    return (
    <div>
      <FruitContainer fruits = {fruitList}/>
    </div>
    );
  }
}

export default App;
