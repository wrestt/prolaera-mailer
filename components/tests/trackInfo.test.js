import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Button from '../button';
import TrackInfo from '../learningTrack/trackInfo';

Enzyme.configure({
  adapter: new Adapter()
});

const track = {
  name: 'Test Track Name',
  author: 'Test Track Author',
  description: 'Test Track Description',
  buttonProps: 'Test Button Text'
};

describe('TrackInfo component', () => {
  it('checks custom inputs', async () => {
    const wrapper = shallow(<TrackInfo {...track} />);
    expect(
      wrapper.contains(
        <h3>
          Name: <span style={{ fontSize: '18px', fontWeight: 'normal' }}>Test Track Name</span>
        </h3>
      )
    ).toBe(true);

    expect(
      wrapper.contains(
        <h3>
          Author: <span style={{ fontSize: '18px', fontWeight: 'normal' }}>Test Track Author</span>
        </h3>
      )
    ).toBe(true);

    expect(wrapper.contains(<p style={{ fontSize: '18px', fontWeight: 'normal' }}>Test Track Description</p>)).toBe(
      true
    );
    expect(wrapper.contains(<Button text="Test Button Text" />)).toBe(true);
  });
});

describe('TrackInfo button', () => {
  it('checks conditional rendering', async () => {
    const wrapper = shallow(<TrackInfo />);
    expect(wrapper.contains(<span />)).toBe(true);
  });
});
