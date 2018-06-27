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
  buttonText: 'Test Button Text',
  buttonLink: 'www.testButtonLink.com'
};

describe('TrackInfo component', () => {
  it('checks custom inputs', async () => {
    const wrapper = shallow(<TrackInfo {...track} />);
    expect(
      wrapper.contains(
        <h4 style={{ marginTop: '0px' }}>
          Name: <span style={{ fontWeight: 'normal' }}>Test Track Name</span>
        </h4>
      )
    ).toBe(true);

    expect(
      wrapper.contains(
        <h4>
          Author: <span style={{ fontWeight: 'normal' }}>Test Track Author</span>
        </h4>
      )
    ).toBe(true);

    expect(wrapper.contains(<p style={{ marginTop: '10px' }}>Test Track Description</p>)).toBe(true);
    expect(wrapper.contains(<Button text="Test Button Text" link="www.testButtonLink.com" />)).toBe(true);
  });
});

describe('TrackInfo button', () => {
  it('checks conditional rendering', async () => {
    const wrapper = shallow(<TrackInfo />);
    expect(wrapper.contains(<span className="buttonSpan" />)).toBe(true);
  });
});
