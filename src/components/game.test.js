import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game />', () =>{

  it('Renders without crashing', () => {
    shallow(<Game />);
  });

  it('Checks if guess is NaN', () => {
    const wrongGuess = 'AAA';
    const wrapper = shallow(<Game />);
    const instance = wrapper.instance();
    instance.guess(wrongGuess);
    expect(wrapper.state('feedback')).toEqual('Please enter a valid number');
  });

  it('Produces correct feedback for each guess', () => {
    const guess = '55';
    const wrapper = shallow(<Game />);
    const answer = wrapper.state('correctAnswer');
    const difference = Math.abs(guess-answer);
    const instance = wrapper.instance();
    instance.guess(guess);
    if (difference >= 50) {
      expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');
    }
    else if (difference >= 30) {
      expect(wrapper.state('feedback')).toEqual('You\'re Cold...');
    }
    else if (difference >= 10) {
      expect(wrapper.state('feedback')).toEqual('You\'re Warm');
    }
    else if (difference >= 1) {
      expect(wrapper.state('feedback')).toEqual('You\'re Hot!');
    }
    else {
      expect(wrapper.state('feedback')).toEqual('You got it!');
    }
  });
  
   it('Starts a new game when requested', () => {
     const wrapper = shallow(<Game />);
     const instance = wrapper.instance();
     instance.newGame();
     expect(wrapper.state('guesses')).toEqual([]);
     expect(wrapper.state('feedback')).toEqual('Make your guess!');
   });
});