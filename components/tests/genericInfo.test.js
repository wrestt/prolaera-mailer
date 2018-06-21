import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { Item } from 'react-html-email';
import GenericInfo from '../generic/genericInfo';

Enzyme.configure({
  adapter: new Adapter()
});

const info = {
  header: 'Oh yeah!',
  body: 'Check out this body!',
  footer: 'Okay, all done now'
};

describe('GenericInfo component', () => {
  it('checks custom inputs using enzyme', async () => {
    const wrapper = shallow(<GenericInfo {...info} />);
    expect(
      wrapper.contains(
        <Item>
          <p>Oh yeah!</p>
        </Item>
      )
    ).toBe(true);

    expect(
      wrapper.contains(
        <Item>
          <p>Check out this body!</p>
        </Item>
      )
    ).toBe(true);

    expect(
      wrapper.contains(
        <Item>
          <p>Okay, all done now</p>
        </Item>
      )
    ).toBe(true);
  });
});
