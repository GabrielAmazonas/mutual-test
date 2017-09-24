import React from 'react';
import App from './App';
import TouchableCircle from './components/TouchableCircle'

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});


describe('the circles', () => {
  it('renders a circle with a counter', () => {
      const tree = renderer.create(<TouchableCircle/>).toJSON()
      console.log(tree)
  })
})