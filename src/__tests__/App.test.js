import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('App Component', () => {

  it('renders App', () => {
    // Arrange.
    const app = <App country="in" />;

    // Act.
    const wrapper = shallow(app);

    // Assert.
    expect(wrapper.find('h1')).toBeDefined();
    expect(wrapper.find('h1 span').text()).toEqual('in');
  });

});
