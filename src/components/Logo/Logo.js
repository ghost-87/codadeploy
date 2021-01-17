import React from 'react';
import classes from './Logo.css';

const Logo = () => {
  return (
    <div className = {classes.Logo}>
      <div className = {classes.DiceContainer}>
        <img 
          src = "assets/images/dice.svg"
          className = {classes.Dice1}
          alt = "dice-2"
        />
        <img 
          src = "assets/images/dicethree.svg" 
          className = {classes.Dice2}
          alt = "dice-1"
        />
      </div>
      <div className = {classes.BottomStyling}>
        <hr className = {classes.hrOne} />
        <span className = {classes.Square}>&nbsp;</span>
        <hr className = {classes.hrTwo} />
      </div>
    </div>
  );
}

export default Logo;