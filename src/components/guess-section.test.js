import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessSection />', () => {

  it('Renders without creashing', () => {
    shallow(<GuessSection />);
  });
  
  it('Renders the feedback', () => {
    const feedback = "feedback";
    const wrapper = shallow(<GuessSection feedback={feedback} />);
    expect(wrapper.contains(feedback)).toEqual(true);
  });
});