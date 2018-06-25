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
          <h4>Shoe-Tying 101: July 18, 2018 - July 19, 2018</h4>
        </Item>
      )
    ).toBe(true);

    expect(
      wrapper.contains(
        <Item>
          <h3>Congratulations Jeff,</h3>
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
          <span style={{ display: 'inline' }}>
            <Button text="View Certificate" /> <Button text="Complete Evaluation" />
          </span>
        </Item>
      )
    ).toBe(true);
  });
});
