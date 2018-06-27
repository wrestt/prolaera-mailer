import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Button from '../button';
import TeamInfo from '../team/TeamInfo';

Enzyme.configure({
  adapter: new Adapter()
});

const team = {
  name: 'Test Team Name',
  description: 'Test Team Description',
  buttonProps: 'Test Button Text'
};

describe('TeamInfo component', () => {
  it('checks custom inputs', async () => {
    const wrapper = shallow(<TeamInfo {...team} />);
    expect(
      wrapper.contains(
        <h4 style={{ marginTop: '0px' }}>
          Name: <span style={{ fontWeight: 'normal' }}>Test Team Name</span>
        </h4>
      )
    ).toBe(true);

    expect(wrapper.contains(<p style={{ marginTop: '10px' }}>Test Team Description</p>)).toBe(true);
    expect(wrapper.contains(<Button text="Test Button Text" />)).toBe(true);
  });
});

describe('TeamInfo button', () => {
  it('checks conditional rendering', async () => {
    const wrapper = shallow(<TeamInfo />);
    expect(wrapper.contains(<span className="buttonSpan" />)).toBe(true);
  });
});
