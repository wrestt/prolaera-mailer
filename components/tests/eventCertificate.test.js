import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { Item } from 'react-html-email';
import renderer from 'react-test-renderer';
import Button from '../button';
import EventCertificate from '../certificate/eventCertificate';

Enzyme.configure({ adapter: new Adapter() });

const certificate = {
  course_name: 'Shoe-Tying 101',
  delivery_date: '2018-07-18T22:00:00.000Z',
  delivery_end_date: '2018-07-19T00:00:00.000Z',
  first: 'Jeff',
  body: 'This is a test body! It should match.',
  button1Text: 'View Certificate',
  button2Text: 'Complete Evaluation'
};

describe('eventCertificate component', () => {
  it('should return default values if none provided', async () => {
    let certificate = renderer.create(<EventCertificate />);
    let certString = JSON.stringify(certificate.toJSON());
    let containsDefault = certString.includes('Congratulations');
    expect(containsDefault).toEqual(true);
  });

  it('checks all custom inputs', async () => {
    const wrapper = shallow(<EventCertificate {...certificate} />);
    expect(
      wrapper.contains(
        <Item>
          <div
            style={{
              maxWidth: '300px',
              marginLeft: 'auto',
              marginRight: 'auto',
              border: '1px solid lightgray',
              borderRadius: '8px',
              background: 'linear-gradient(to bottom right, #ffd11a, #fff0b3, #ffd633)',
              boxShadow: '1px 1px 8px darkgray'
            }}
          >
            <h3 style={{ marginBottom: '5px' }}>Shoe-Tying 101</h3>
            <h6 style={{ marginTop: '0px' }}>July 18, 2018 - July 19, 2018</h6>
          </div>
        </Item>
      )
    ).toBe(true);

    expect(
      wrapper.contains(
        <Item>
          <h4>Congratulations Jeff!</h4>
        </Item>
      )
    ).toBe(true);

    expect(
      wrapper.contains(
        <Item>
          <p>This is a test body! It should match.</p>
        </Item>
      )
    ).toBe(true);

    expect(
      wrapper.contains(
        <Item>
          <Button text={'View Certificate'} />
          <hr style={{ width: '45px' }} />
          <Button text={'Complete Evaluation'} />
        </Item>
      )
    ).toBe(true);
  });
});
