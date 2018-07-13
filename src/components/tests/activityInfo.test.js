import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { Item } from 'react-html-email';
import renderer from 'react-test-renderer';
import Button from '../../components/button';
import ActivityInfo from '../activity/activityInfo';

Enzyme.configure({
  adapter: new Adapter()
});

const activity = {
  name: 'Eloquent Javascript',
  author: 'Teagan Wrestt',
  buttonText: "I'm a button!",
  button1Link: '#'
};

describe('ActivityInfo component', () => {
  it('provides default values if none are provided', async () => {
    let activityInfo = renderer.create(<ActivityInfo />);
    let emailString = JSON.stringify(activityInfo.toJSON());
    let containsDefaultInfo = emailString.includes('View Details');
    expect(containsDefaultInfo).toEqual(true);
  });

  it('checks all custom inputs', async () => {
    const wrapper = shallow(<ActivityInfo {...activity} />);
    expect(
      wrapper.contains(
        <Item>
          <h4>You have been assigned to a new Activity:</h4>
          <div
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: '15px',
              border: '1px solid lightgray',
              boxShadow: '1px 1px 8px darkgray',
              maxWidth: '300px'
            }}
          >
            <h3 style={{ marginBottom: '0px' }}>
              <em>Eloquent Javascript</em>
            </h3>
            <h4 style={{ marginTop: '7px' }}>
              By: <span style={{ fontWeight: 'normal' }}>Teagan Wrestt</span>
            </h4>
          </div>
        </Item>
      )
    ).toBe(true);

    expect(
      wrapper.contains(
        <Item>
          <Button text={"I'm a button!"} link="#" />
        </Item>
      )
    ).toBe(true);
  });
});
