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
  
});