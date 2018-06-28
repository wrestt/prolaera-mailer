import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../button';

describe('button component', () => {
  it('should display the correct text', async () => {
    let button = renderer.create(<Button text={'Click me!'} />);
    let buttonString = JSON.stringify(button.toJSON());
    let containsButtonText = buttonString.includes('Click me!');
    expect(containsButtonText).toEqual(true);
  });
});
